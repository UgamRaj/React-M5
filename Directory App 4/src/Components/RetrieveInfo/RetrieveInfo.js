import { useState } from "react";
import TopBtnContainer from "../TopBtnContainer/TopBtnContainer";

const RetrieveInfo = () => {
  const [retieveData, setRetrieveData] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const onSubmitDataSearchHandler = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("person");
    if (data) {
      console.log(data);

      const dataFromLocalStorage = JSON.parse(data);
      const searchUser = dataFromLocalStorage.filter(
        (user) => user.aadharNumber === searchKey
      );
      // console.log("searchUser ", searchUser);
      setRetrieveData(searchUser[0]);
    }
  };

  return (
    <>
      <main className="main">
        <TopBtnContainer />

        <div className="Retrieve">
          <div>
            <h4 className="title">Retrieve Information</h4>
          </div>
          <div className="find">
            <form className="find-form" onSubmit={onSubmitDataSearchHandler}>
              <input
                className="search-aadhar"
                type="number"
                value={searchKey}
                min="100000000000"
                max="999999999999"
                required
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <input type="submit" className="find-btn" value="Find" />
            </form>
          </div>
          <div className="result">
            {!retieveData ? (
              <h1>No Data</h1>
            ) : (
              <div className="findCard">
                <div className="outputCard">
                  <p>Name :{retieveData.name}</p>
                  <p>DOB :{retieveData.date}</p>
                  <p>Aadhar :{retieveData.aadharNumber} </p>
                  <p>Mobile no. :{retieveData.mobileNumber}</p>
                  <p>Age :{retieveData.age}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* {isAddNewPerson && <AddNewPerson />}
      {isRetrieve && <RetrieveInfo />} */}
      </main>
    </>
  );
};

export default RetrieveInfo;
