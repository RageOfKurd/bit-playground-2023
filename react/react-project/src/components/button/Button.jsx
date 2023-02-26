import "./button.styles.css";

function Button({ text, isLoggedIn }) {
  return <>{!isLoggedIn && <button className="small-button">{text}</button>}</>;
}

export default Button;
