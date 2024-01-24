import styles from './Button.module.css';

type ButtonProps = {
  className?: string;
  onClick: () => void;
  label: string;
};

export const Button = ({ className, onClick, label }: ButtonProps) => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    {label}
  </button>
);
