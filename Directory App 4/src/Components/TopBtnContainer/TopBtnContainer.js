import { useNavigate } from "react-router-dom";

const TopBtnContainer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="topBtnContainer">
        <button className="topBtnContainerBtn" onClick={() => navigate("/")}>
          Add New Person
        </button>
        <button
          className="topBtnContainerBtn"
          onClick={() => navigate("/retrieve")}
        >
          Retrieve Infromation
        </button>
      </div>
    </>
  );
};

export default TopBtnContainer;
