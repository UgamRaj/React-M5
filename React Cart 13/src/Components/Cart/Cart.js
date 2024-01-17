import { useEffect, useState } from "react";

const Cart = ({ cartItem }) => {
  //   console.log(cartItem);
  const [total, setTotal] = useState(0);
  const getTotal = () => {
    const totalRuppes = cartItem.reduce(
      (prevItem, currItem) => (prevItem += currItem.price * currItem.qty),
      0
    );
    // console.log(totalRuppes);
    setTotal(totalRuppes);
  };

  useEffect(() => {
    getTotal();
  }, [cartItem]);
  //   const [cartitem, setCardItem] = useState(cartItem);
  return (
    <>
      <section className="rightBox">
        <div className="cart-box">
          <h2>Cart</h2>
          <div id="cartItemsList" className="cartItemsList">
            <div id="cartItems" className="cartItems">
              {cartItem.length === 0 ? (
                <div className="cartEmpty">No Product added to the cart </div>
              ) : (
                cartItem.map(({ product, qty, price }, i) => {
                  return (
                    <div className="cart" key={i}>
                      <div className="productName">{product}</div>
                      <div className="cart-Quantity">
                        <p className="qtycart">{qty}</p>
                        <span>X</span>
                        <p>{price}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="cartTotal">
              <p>Total :</p>
              <p id="total">{total} &#8377;</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
