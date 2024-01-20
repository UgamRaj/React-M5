import { useBudget } from "../context/BudgetProvider";

const Expenses = () => {
  const { userData, setUserData, setUserOnDeleted } = useBudget();
  //   console.log(totalBudget);

  const onDeleteHandler = (id) => {
    const deletedUser = userData.filter((user) => user.id === id);
    const updatedData = userData.filter((user) => user.id !== id);
    // console.log(updatedData);
    setUserData(updatedData);
    // updateUserData();
    setUserOnDeleted(deletedUser);
  };

  return (
    <>
      <h2 className="expensesHeader">Expenses</h2>

      {userData.length === 0 ? (
        <p className="addDataToList">Add Data To List.....</p>
      ) : (
        userData?.map(({ userName, cost, id }) => {
          return (
            <div className="expensexContainer" key={id}>
              <p>{userName}</p>
              <div className="rightContainer">
                <p>₹ {cost}</p>
                <img
                  src="/icons8-delete-48.png"
                  alt="delete"
                  onClick={() => onDeleteHandler(id)}
                />
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Expenses;
