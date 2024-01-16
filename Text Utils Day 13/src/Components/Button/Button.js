import "./Button.css";

const Button = ({ title, dispatch, btnClass, state, contentType }) => {
  return (
    <>
      <button
        className={btnClass + " button " + (!state.content ? "disabled" : "")}
        style={state.content ? { scale: "0.94" } : {}}
        disabled={!state.content ? true : false}
        onClick={() => dispatch({ type: contentType })}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
