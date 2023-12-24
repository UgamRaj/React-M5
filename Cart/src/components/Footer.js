const Footer = ({ price, onClearAll }) => {
  const onClearHandler = () => {
    console.log("clear All");
    onClearAll();
  };
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="footerContent">
            <p className="cartTotal">Total </p>
            <p className="cartTotalAmount">${price}</p>
          </div>
          <button className="clearBtn" onClick={onClearHandler}>
            Clear Cart
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
