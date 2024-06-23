import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}

export function Button({ onClick, children, disabled = false }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
}