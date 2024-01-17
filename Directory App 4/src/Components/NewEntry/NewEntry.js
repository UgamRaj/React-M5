import { useState } from "react";
import { nanoid } from "nanoid";

const NewEntry = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    aadharNumber: "",
    mobileNumber: "",
    age: "",
  });
  const [totalAge, setTotalAge] = useState("");

  const calculateAge = (currDate) => {
    // const today = new Date();

    // const birthdateString = "1995-06-01";

    //! Convert birthdate string to a Date object
    const birthdate = new Date(currDate);

    // Current date
    const currentDate = new Date();

    // Calculate age
    const age =
      currentDate.getFullYear() -
      birthdate.getFullYear() -
      (currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() < birthdate.getDate())
        ? 1
        : 0);
    // console.log(age);
    // const age = today.getFullYear() - currDate.getFullYear();
    // return age;
    setTotalAge(age);
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      // setCurrDate(value);
      //! When we get date then calculategae function triggered
      calculateAge(value);
    }
    setFormData({ ...formData, [name]: value });
    // console.log(name);
    // console.log(value);
    // console.log(formData);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    //! Sending value to parent function
    onFormSubmit({
      ...formData,
      age: totalAge,
      id: nanoid(),
    });
    setFormData({
      name: "",
      date: "",
      aadharNumber: "",
      mobileNumber: "",
      age: "",
    });
    setTotalAge("");
  };

  return (
    <div>
      <div className="form-container">
        <h3>Fill below form for New Entry</h3>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            name="name"
            onChange={onHandleChange}
          />
          <input
            type="date"
            required
            name="date"
            value={formData.date}
            onChange={onHandleChange}
          />
          <input
            type="number"
            placeholder="Aadhar number"
            min="100000000000"
            max="999999999999"
            required
            value={formData.aadharNumber}
            name="aadharNumber"
            onChange={onHandleChange}
          />
          <input
            type="number"
            placeholder="Mobile number"
            min="1000000000"
            max="9999999999"
            required
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={onHandleChange}
          />
          <input
            placeholder="Age"
            disabled
            value={totalAge}
            name="age"
            // onChange={onHandleChange}
          />
          <input type="submit" className="submitBtn" value="Save" />
        </form>
      </div>
    </div>
  );
};

export default NewEntry;
