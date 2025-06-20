import { FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modal__overlay} onClick={onClose}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__gradientBg} />
        <button
          className={styles.modal__closeBtn}
          onClick={onClose}
          aria-label="Закрыть модальное окно"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}; 