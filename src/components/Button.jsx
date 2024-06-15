function Button({ onClick, buttonType, text }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>
      {text}
    </button>
  );
}
export default Button;
