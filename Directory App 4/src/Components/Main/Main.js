import AddNewPerson from "../AddNewPerson/AddNewPerson";
import TopBtnContainer from "../TopBtnContainer/TopBtnContainer";

const Main = () => {
  return (
    <main className="main">
      <TopBtnContainer />
      <AddNewPerson />
      {/* {isAddNewPerson && <AddNewPerson />}
      {isRetrieve && <RetrieveInfo />} */}
    </main>
  );
};

export default Main;
