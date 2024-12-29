import { memo } from "react";
import styles from "./Input.module.css";

type Size = "small" | "medium" | "large";

interface InputProps {
  placeholder?: string;
  //   children?: ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  typeInput?: string;
  size: Size;
  autoFocus?: boolean;
}

const Input = memo(
  ({
    placeholder,
    // children,
    value,
    onChange,
    className,
    typeInput,
    size = "medium",
    autoFocus,
  }: InputProps) => {
    return (
      <input
        autoFocus={autoFocus}
        onChange={onChange}
        className={`${styles.inputs} ${className} ${
          size == "small"
            ? styles.small
            : size == "medium"
            ? styles.medium
            : styles.large
        }
        }`}
        type={typeInput}
        placeholder={placeholder}
        value={value}
      />
    );
  }
);

export default Input;
