import { createContext, useContext, useEffect, useState } from "react";
const BudgetContext = createContext({});

export const useBudget = () => {
  return useContext(BudgetContext);
};

const BudgetProvider = (props) => {
  const [totalBudget, setTotalBudget] = useState({
    budget: 2000,
    remaining: 2000,
    spent: 0,
  });

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userBudgetData")) || []
  );
  const [userOnDeleted, setUserOnDeleted] = useState([]);

  const updateUserData = () => {
    // console.log("updated", userData);
    localStorage.setItem("userBudgetData", JSON.stringify(userData));

    userData?.map((user) => {
      const newUser = totalBudget.remaining - user.cost;
      const newSpent = totalBudget.spent + +user.cost;
      return setTotalBudget({
        budget: 2000,
        remaining: newUser,
        spent: newSpent,
      });
    });
  };
  // console.log(totalBudget);

  const onDeleted = () => {
    userOnDeleted?.map((user) => {
      const newUser = totalBudget.remaining + +user.cost;
      const newSpent = totalBudget.spent - +user.cost;
      return setTotalBudget({
        budget: 2000,
        remaining: newUser,
        spent: newSpent,
      });
    });
  };

  useEffect(() => {
    updateUserData();
  }, [userData]);

  useEffect(() => {
    onDeleted();
  }, [userOnDeleted]);

  const MyBudget = {
    totalBudget,
    setTotalBudget,
    userData,
    setUserData,
    updateUserData,
    userOnDeleted,
    setUserOnDeleted,
  };

  return (
    <>
      <BudgetContext.Provider value={MyBudget}>
        {props.children}
      </BudgetContext.Provider>
    </>
  );
};

export default BudgetProvider;
