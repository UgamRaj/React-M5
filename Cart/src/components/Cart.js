import { useState } from "react";

const Cart = ({
  id,
  title,
  url,
  alt,
  price,
  onChangeNoOFItem,
  onPriceChange,
  onRemoveItem,
}) => {
  const [itemNo, setItemNo] = useState(1);

  const quantityIncHandler = () => {
    setItemNo(itemNo + 1);
    onChangeNoOFItem("increase");
    onPriceChange(price, "increase");
  };

  const quantityDeccHandler = () => {
    const noOfItem = itemNo - 1;

    if (noOfItem <= 0) {
      onRemoveItem();
      console.log("item less then zero");
    } else {
      setItemNo(noOfItem);
      onChangeNoOFItem("deccrease");
      onPriceChange(price, "deccrease");
    }
  };

  const onRemoveHandler = () => {
    onRemoveItem();
    onChangeNoOFItem("deccrease");
    onPriceChange(price, "deccrease");
  };

  return (
    <div className="">
      <div className="mainContainer">
        <article className="cartItem card shadow-animate">
          <div className="cartLeft">
            <div className="thambnailImage">
              <img src={url} alt={alt} />
            </div>
            <div className="info">
              <h5>{title}</h5>
              <p className="itemPrice">${price}</p>
              <button className="removeBtn" onClick={onRemoveHandler}>
                remove
              </button>
            </div>
          </div>
          <div className="actionContainer">
            <button className="amountBtn" onClick={quantityIncHandler}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="amountIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
              </svg>
            </button>
            <span className="amount">{itemNo}</span>
            <button className="amountBtn" onClick={quantityDeccHandler}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="amountIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Cart;
