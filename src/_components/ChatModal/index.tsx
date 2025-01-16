import { useEffect, useRef } from 'react';
import styles from './styles.module.scss'

interface IChatModal {
  isOpen: boolean
  onClose: () => void
}

const ChatModal: React.FC<IChatModal> = ({ isOpen, onClose }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (isOpen && iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;

      // Inject HTML content
      iframeDoc.body.innerHTML = `
        <div id="content">
          <h1>Hello from the iframe</h1>
          <div className={styles.chatHistory} id='chat-history'></div>
         <div>
          <input id="user-input" type="text" />
            <button id='send-button'>Send</button>
           </div>
        </div>
      `;

      // Inject JavaScript
      const script = iframeDoc.createElement("script");
      script.textContent = `
                    const chatHistory = JSON.parse(sessionStorage.getItem('chatHistory')) || [];

            function updateChatHistory() {
                const chatHistoryDiv = document.getElementById('chat-history');
                chatHistoryDiv.innerHTML = chatHistory.map(msg => msg).join('');
                chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
            }

            function addMessageToChat(message, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.className = isUser ? 'user-message' : 'bot-message';
                if (!isUser) {
                    messageDiv.innerHTML = \`< div class="bot-avatar" ></ > <span>\${message}</span>\`;
                } else {
                    messageDiv.innerHTML = \`< span > \${ message }</ > \`;
                }

                chatHistory.push(messageDiv.outerHTML);
                updateChatHistory();

                messageDiv.style.opacity = 0;
                setTimeout(() => {
                    messageDiv.style.opacity = 1;
                }, 0);
            }

            document.getElementById('send-button').addEventListener('click', sendMessage);
            document.getElementById('user-input').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });

            async function sendMessage() {
                const sendButton = document.getElementById('send-button');

                if (sendButton.disabled) return

                const userInput = document.getElementById('user-input').value;
                if (!userInput) return;

                addMessageToChat(userInput, true);
                sessionStorage.setItem('chatHistory', JSON.stringify(chatHistory));
                document.getElementById('user-input').value = '';

                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'bot-message';
                typingIndicator.innerHTML = \`< div class="bot-avatar" ></ > <span>Daq is typing...</span>\`;
                chatHistory.push(typingIndicator.outerHTML);
                updateChatHistory();

                // Блокируем кнопку отправки
                sendButton.disabled = true;
                const backendUrl = 'https://daq-backend.onrender.com/chat';
                const fetchPromise = fetch(backendUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ messages: chatHistory.slice(-10) })
                });

                // Таймер на 5 секунд
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Server error')), 5000)
                );

                try {
                    const response = await Promise.race([fetchPromise, timeoutPromise]);
                    if (!response.ok) {
                        throw new Error(\`Error: \${ response.status } \${ response.statusText } \`);
                    }
                    const data = await response.json();
                    chatHistory.pop();
                    addMessageToChat(\`\${ data.reply } \`, false);
                } catch (error) {
                    chatHistory.pop();
                    addMessageToChat(\`Error: \${ error.message || 'request error' }\`, false);
                } finally {
                    updateChatHistory();
                    sessionStorage.setItem('chatHistory', JSON.stringify(chatHistory));
                    // Разблокируем кнопку отправки
                    sendButton.disabled = false;

                }
            }
            updateChatHistory();
      `;

      iframeDoc.body.appendChild(script);
    }
  }, [isOpen]);

if (!isOpen) return null;

return (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <div style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      width: "80%",
      maxWidth: "600px",
    }}>
      <button onClick={onClose} style={{ marginBottom: "10px" }}>Close</button>
      <iframe
        ref={iframeRef}
        style={{
          width: "100%",
          height: "300px",
          border: "1px solid #ccc",
        }}
      ></iframe>
    </div>
  </div>
);

  //   return (
  //     <div className={styles.modalWrapper}>
  //       <div className={styles.modal}>
  //         <div className={styles.chatHistory} id='chat-history'>

  //         </div>
  //         <div>
  //           <input id="user-input" type="text" />
  //           <button id='send-button'>Send</button>
  //         </div>
  //       </div>
  //     </div>
  //   )
}

export default ChatModal
