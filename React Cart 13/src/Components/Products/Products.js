import productList from "./Products.json";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(productList);

  const onDecrease = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    setProducts((prevItems) =>
      prevItems.map((cartItem) => {
        if (cartItem.id === item.id && cartItem.qty > 0) {
          return { ...cartItem, qty: cartItem.qty - 1 };
        } else {
          return cartItem;
        }
      })
    );
    if (existingItem) {
      //! If the item is already in the cart, update its quantity
      setCartItems((prevItems) =>
        prevItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            if (cartItem.qty > 1) {
              return { ...cartItem, qty: cartItem.qty - 1 };
            } else {
              return removeItem(item);
            }
          } else {
            return cartItem;
          }
        })
      );
    }
  };

  const removeItem = (cartItem) => {
    const updatedItems = cartItems.filter((item) => item.id !== cartItem.id);

    setCartItems(updatedItems);
  };

  const onIncrease = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    setProducts((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      )
    );
    if (existingItem) {
      //! If the item is already in the cart, update its quantity
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        )
      );
    } else {
      //! If the item is not in the cart, add it with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...item, qty: 1 }]);
    }
  };
  return (
    <>
      <main className="container">
        <section className="leftBox">
          <h1>Products</h1>
          <div id="products" className="productList">
            {products.map((item, i) => {
              return (
                <div className="products" key={i}>
                  <div className="productName">{item.product}</div>
                  <div className="price">${item.price}</div>
                  <div className="quentity-box">
                    <div className="decrese">
                      <button
                        className="decerseBtn"
                        onClick={() => onDecrease(item)}
                      >
                        -
                      </button>
                    </div>
                    <div className="quantity">{item.qty}</div>
                    <div className="increse">
                      <button
                        className="increseBtn"
                        onClick={() => onIncrease(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <Cart cartItem={cartItems} />
      </main>
    </>
  );
};

export default Products;
