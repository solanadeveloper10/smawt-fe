// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { forwardRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import styles from './styles.module.scss'
import ChatComponent from './ChatComponent';
import { MotionButton } from '../Button';

interface IChatModal extends React.ComponentProps<"div"> {
  isOpen: boolean
  onClose: () => void
}

const ChatModal: React.FC<IChatModal> = forwardRef((props, ref) => {
  const { isOpen, onClose } = props

  return (<AnimatePresence initial={false}>
    {isOpen ?
      (
        <motion.div
          ref={ref}
          className={styles.modalWrapper}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
        >
          <div
            className={styles.modal}
          >
            <MotionButton onClick={onClose} className={styles.closeBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >X</MotionButton>
            <ChatComponent />
          </div>
        </motion.div>)
      : null}
  </AnimatePresence >
  )
})

// export const MotionChatModal = motion(ChatModal);

export default ChatModal
