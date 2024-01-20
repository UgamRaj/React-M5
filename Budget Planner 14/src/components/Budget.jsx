import { useBudget } from "../context/BudgetProvider";

const Budget = () => {
  const { totalBudget } = useBudget();
  // console.log(userData);

  return (
    <div className="totalBudgetConatiner">
      <h4 className="totalBudget">Budget: Rs. {totalBudget.budget}</h4>
      <h4 className="remainingBudget">
        Remaining: Rs. {totalBudget.remaining}
      </h4>
      <h4 className="spentBedget">Spent so far: {totalBudget.spent}</h4>
    </div>
  );
};

export default Budget;
