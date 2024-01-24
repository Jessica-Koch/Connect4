import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const Button = ({ onClick, label }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);
