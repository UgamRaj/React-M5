import AddExpenses from "./AddExpenses";
import Budget from "./Budget";
import Expenses from "./Expenses";

const Main = () => {
  return (
    <main className="main">
      <h1>My Budget Planner</h1>
      <Budget />
      <Expenses />
      <AddExpenses />
    </main>
  );
};

export default Main;
