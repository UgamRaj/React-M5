import React from "react";

const LandingPage = ({ setUserInfo, info, onCreateNotesHandler }) => {
  // console.log(setUserInfo);
  const handleUserInfo = () => {
    // setUserInfo(true);
    onCreateNotesHandler();
    // info.setUserInfo((prevState) => ({ ...prevState, id: Date.now() }));

    // console.log("landing");
  };

  return (
    <div className="mainH">
      <div className="mainOutpage">
        <h1>You have no notes</h1>
        <button className="createBtn" onClick={handleUserInfo}>
          Create one now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
