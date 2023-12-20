const Paragraph = ({ paragraph, inputNum }) => {
  const renderData = paragraph.slice(0, inputNum);
  return (
    <>
      {renderData.map((para) => {
        return (
          <div className="para" key={para.id}>
            <p>
              {para.id}
              {")"} {para.paragraph}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Paragraph;
