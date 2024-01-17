import { useState } from "react";
import NewEntry from "../NewEntry/NewEntry";

const AddNewPerson = () => {
  const [isForm, setIsForm] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("person")) || []
  );

  const getForm = (formData) => {
    console.log(formData);
    // Update state with new form data
    const updatedUser = [...user, formData];
    setUser(updatedUser);

    // Update localStorage with the updated user data
    localStorage.setItem("person", JSON.stringify(updatedUser));
  };

  const onDeleteUserHandler = (id) => {
    console.log(id);
    const updatedData = user.filter((data) => data.id !== id);
    // getForm(updatedData);
    // console.log(updatedData);
    setUser(updatedData);

    // Update localStorage with the updated user data
    localStorage.setItem("person", JSON.stringify(updatedData));
  };

  return (
    <>
      <div className="AddNewPerson">
        <div>
          <h4 className="title">Add New Person</h4>
        </div>
        <table frame="box" rules="all">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map(({ name, date, aadharNumber, mobileNumber, age, id }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{date}</td>
                  <td>{aadharNumber}</td>
                  <td>{mobileNumber}</td>
                  <td>{age}</td>
                  <td className="deleteBtnContainer">
                    <button
                      className="submitBtn"
                      onClick={() => onDeleteUserHandler(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isForm && <NewEntry onFormSubmit={getForm} />}
        <button className="addBtn" onClick={() => setIsForm(!isForm)}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddNewPerson;
