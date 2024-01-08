import React from "react";

const Textarea = ({ changeHandler, change }) => {
  return (
    <div>
      <textarea
        onChange={(e) => changeHandler(e.target.value)}
        value={change}
        id="message"
        rows="4"
        className="textarea"
        placeholder="Write Something here....."
      ></textarea>
    </div>
  );
};

export default Textarea;
