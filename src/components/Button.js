import styles from "./Button.module.css";

function Button({ children, onClick, classType }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[classType]}`}>
      {children}
    </button>
  );
}

export default Button;
