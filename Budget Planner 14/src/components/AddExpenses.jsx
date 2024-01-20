import { useState } from "react";
import { useBudget } from "../context/BudgetProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddExpenses = () => {
  const { userData, setUserData } = useBudget();

  // console.log(totalBudget);
  const [userName, setName] = useState("");
  const [cost, setCost] = useState("");

  const onBudgetSaveHandler = (e) => {
    e.preventDefault();
    // console.log(name, cost);
    if (!userName || !cost) {
      return toast.warning("Please Enter Valid Input");
    }
    const updatedUser = [
      ...userData,
      { userName, cost, id: Math.floor(Math.random() * 1000) },
    ];

    setUserData(updatedUser);

    setName("");
    setCost("");
    // updateUserData();
  };

  return (
    <div className="addExpences">
      <h2>Add Expenses</h2>
      <form action="" onSubmit={onBudgetSaveHandler}>
        <input
          className="input"
          type="text"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type name here..."
        />
        <input
          className="input"
          type="number"
          value={cost}
          placeholder="cost..."
          onChange={(e) => setCost(e.target.value)}
        />
        <button className="saveBtn" type="submit">
          Save
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Zoom
      />
    </div>
  );
};

export default AddExpenses;
