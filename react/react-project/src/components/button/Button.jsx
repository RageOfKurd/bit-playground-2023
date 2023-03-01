import "./button.styles.css";

function Button({ text, handleClick }) {
  return (
    <button className="small-button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
