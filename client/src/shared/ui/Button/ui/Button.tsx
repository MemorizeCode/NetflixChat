import { memo } from "react";
import styles from "./Button.module.css";


interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;

  isLoading?: boolean;
}

const Button = memo(
  ({
    children,
    onClick,
    disabled = false,
    className,
    isLoading = false,
  }: ButtonProps) => {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${styles.btn} ${className} ${styles.large}`}
      >
        {isLoading ? <h2>Loading...</h2> : children}
      </button>
    );
  }
);

export default Button;
