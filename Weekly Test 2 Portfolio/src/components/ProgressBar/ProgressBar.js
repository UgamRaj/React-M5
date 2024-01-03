const ProgressBar = ({ width }) => {
  return (
    <>
      <div className="languages-progress-bg">
        <div className="languages-progress-fill" style={{ width: width }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
