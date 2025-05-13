// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react';

import styles from './styles.module.scss'
import { MotionButton } from '../Button';

const backendUrl = 'https://backend-new-0pm8.onrender.com/chat';

const ChatComponent = ({ setIsChatOpen }) => {
   const [message, setMessage] = useState('');
   const [chatHistory, setChatHistory] = useState([]);
   const chatContainerRef = useRef(null);
   const chatHistoryKey = 'chatHistory';

   useEffect(() => {
      const savedHistory =
         JSON.parse(sessionStorage.getItem(chatHistoryKey)) || [];
      setChatHistory(savedHistory);
      scrollToBottom();
   }, []);

   const saveChatHistory = (newHistory) => {
      sessionStorage.setItem(chatHistoryKey, JSON.stringify(newHistory));
   };

   const scrollToBottom = () => {
      if (chatContainerRef.current) {
         chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
      }
   };

   const handleSendMessage = async (e) => {
      e.preventDefault();
      if (!message) return;

      const newUserMessage = { message, isUser: true };

      setChatHistory((prevHistory) => {
         const updatedHistory = [...prevHistory, newUserMessage];
         saveChatHistory(updatedHistory);
         return updatedHistory;
      });

      const botTypingMessage = { message: 'Bot is typing...', isUser: false };
      setChatHistory((prevHistory) => [...prevHistory, botTypingMessage]);

      setMessage('');

      try {
         const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               messages: [...chatHistory, newUserMessage].slice(-10)
            })
         });

         if (!response.ok)
            throw new Error(`${response.status} ${response.statusText}`);
         const data = await response.json();

         const botMessage = { message: data.reply, isUser: false };

         setChatHistory((prevHistory) => {
            const updatedHistory = prevHistory
               .filter((msg) => msg !== botTypingMessage)
               .concat(botMessage);

            saveChatHistory(updatedHistory);
            return updatedHistory;
         });
      } catch (error) {
         const errorMessage = {
            message: `Error: ${error.message || 'Error sending request'}`,
            isUser: false
         };

         setChatHistory((prevHistory) => {
            const updatedHistory = prevHistory
               .filter((msg) => msg !== botTypingMessage)
               .concat(errorMessage);

            saveChatHistory(updatedHistory);
            return updatedHistory;
         });
      }
   };

   return <div className={styles.chatWrapper}>
      <h2 className=''>
         Talk with Bob
      </h2>

      <div
         className={styles.chatHistory}
         ref={chatContainerRef}
      >
         {chatHistory.map((entry, index) => (
            <div
               key={index}
               className={entry.isUser ? styles.userMessage : styles.botMessage}
            >
               <div
                  className={``}
               >
                  {entry.message}
               </div>
            </div>
         ))}

      </div>

      <form className={styles.form} onSubmit={handleSendMessage}>
         <input
            className={styles.input}
            placeholder='Ask Bob something...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
         />
         <MotionButton className={styles.btn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
         >Send</MotionButton>
      </form>
   </div >
}

export default ChatComponent;
