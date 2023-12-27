// import { useState } from "react";

const Item = ({ grocery, ondelete, onCheckHandlerFun, isChecked }) => {
  // const [isCheckeds, setIsCheckeds] = useState(isChecked);
  // const [isClick, setClick] = useState(false);

  const checkHandlr = () => {
    onCheckHandlerFun();
  };

  const onDeleteHandler = () => {
    ondelete();
    // setIsCheckeds(!isChecked);
    // setClick(!isClick);
  };
  // const onEditHandler = () => {
  //   onEdit();
  // };

  return (
    <div className="itemContainer">
      <div className="item">
        <input
          type="checkbox"
          checked={isChecked}
          id="checkbox"
          onChange={checkHandlr}
        />
        <p
          className="groceryItem"
          style={{ textDecoration: isChecked ? "line-through" : "none" }}
        >
          {grocery}
        </p>
      </div>
      <div className="btnContainer">
        <div className="deleteBtn" onClick={onDeleteHandler}>
          <img src="/bin.png" alt="Delete" />
        </div>
      </div>
    </div>
  );
};

export default Item;
