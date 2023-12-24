import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./product.json";
import { useState } from "react";

function App() {
  const [noOfItem, setNoOfItem] = useState(1);
  const [count, setCount] = useState(4);
  const [price, setprice] = useState(2199.96);
  const [cartItem, setCartItem] = useState(Product);

  const onChangeHandler = (res) => {
    if (res === "increase") {
      setNoOfItem(noOfItem + 1);
      setCount(count + 1);
    } else if (res === "deccrease") {
      setNoOfItem(noOfItem - 1);
      setCount(count - 1);
    }
  };

  //! Remove item from Cart

  const onRemoveItem = (id) => {
    const thatItem = cartItem.filter((item) => item.id === id);
    console.log(thatItem[0].price);
    const newItems = cartItem.filter((item, i) => item.id !== id);
    console.log(newItems);
    setCartItem(newItems);
    setCount(count - 1);
    setprice(+price - thatItem[0].price);
    // console.log(id);
    // setCartItem((prevState) => {
    //   const updateSte = [...prevState];
    //   const updateCart = updateSte.filter((item) => item.id !== id);
    //   console.log(updateCart);
    //   return updateCart;
    // });
    // console.log(cartItem);
  };

  const onPriceChangeHandler = (itemRate, res) => {
    if (res === "increase") {
      const val = (+price + +itemRate).toFixed(2);
      setprice(val);
    } else if (res === "deccrease") {
      const val = (+price - +itemRate).toFixed(2);
      setprice(val);
    }
  };

  const onClearHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Header count={count} />
      <h2>YOUR BAG</h2>

      {count <= 0 ? (
        <div className="empty">is currently empty</div>
      ) : (
        <div>
          {cartItem.map((item, i) => (
            <Cart
              key={i}
              {...item}
              onChangeNoOFItem={onChangeHandler}
              onPriceChange={onPriceChangeHandler}
              onRemoveItem={() => onRemoveItem(item.id)}
            />
          ))}
          <Footer price={price} onClearAll={onClearHandler} />
        </div>
      )}
    </div>
  );
}

export default App;
