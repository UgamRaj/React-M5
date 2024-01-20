import "./App.css";
import Main from "./components/Main";
import BudgetProvider from "./context/BudgetProvider";

function App() {
  return (
    <>
      <BudgetProvider>
        <Main />
      </BudgetProvider>
    </>
  );
}

export default App;
