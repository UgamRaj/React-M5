import React, { useEffect, useState } from "react";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [item, setItem] = useState("");
  // const [isClick, setIsClick] = useState(false);
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem("groceryItem"))
  );

  // useEffect(() => {
  //   const itemFromStorage = localStorage.getItem("groceryItem");
  //   if (itemFromStorage) {
  //     setItemList(JSON.parse(itemFromStorage));
  //   }
  // }, []);

  //! Whenever this itemList updateed this useEffect works
  useEffect(() => {
    localStorage.setItem("groceryItem", JSON.stringify(itemList));
  }, [itemList]);

  const onAddItemHanler = () => {
    if (!item) {
      toast.error("Please Provide Value !");
      setItem("");
      return;
    }
    const newItem = [
      ...itemList,
      {
        id: Date.now(),
        grocery: item,
        isChecked: false,
      },
    ];

    setItemList(newItem);
    setItem("");
    toast.success("Item added To The List");
    // setIsChecked(false);
  };

  const deleteHandler = (id) => {
    const updatedItem = itemList.filter((item) => item.id !== id);
    setItemList(updatedItem);
    toast.success("Item Deleted");
  };

  // checked
  const onCheckHandler = (id) => {
    // console.log(id);
    // const copyItemList = [...itemList];
    const updateItem = itemList.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setItemList(updateItem);
  };

  // const onEditFun = (id) => {
  //   // console.log(id);
  //   const preItem = [...itemList];
  //   const editableItem = preItem.filter((item) => item.id === id);
  //   // console.log(editableItem[0].grocery);
  //   setItem(editableItem[0].grocery);
  // };

  return (
    <div className="cardMain">
      <h1>Grocery Bud</h1>
      <div className="inputContainer">
        <input
          type="text"
          value={item || ""}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={onAddItemHanler}>Add Item</button>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>

      {itemList != null
        ? itemList.map((item, i) => {
            return (
              <Item
                key={i}
                {...item}
                ondelete={() => deleteHandler(item.id)}
                onCheckHandlerFun={() => onCheckHandler(item.id)}
              />
            );
          })
        : setItemList([])}
    </div>
  );
};

export default Main;
