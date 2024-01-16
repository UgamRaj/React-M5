import "./Button.css";

const Button = ({ btnName, styless }) => {
  return (
    <>
      <button style={{ ...styless }}>{btnName}</button>
    </>
  );
};

export default Button;
