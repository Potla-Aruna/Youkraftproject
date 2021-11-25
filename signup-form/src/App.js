import React, {useState} from 'react';
import './App.css';
import data from "./sample-data.json";

function App() {

  const [users, setUsers] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData ={...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newUsers = [...users,newUser];
    setUsers(newUsers);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.fullName}</td>
              <td>{user.address}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text"name="fullName"
        required="required"
        placeholder="Enter a Name"
        onChange={handleAddFormChange} /> 

        <input type="text"name="address"
        required="required"
        placeholder="Enter your address"
        onChange={handleAddFormChange} />

        <input type="text"name="phoneNumber"
        required="required"
        placeholder="Enter your Number"
        onChange={handleAddFormChange} />

        <input type="email"name="email"
        required="required"
        placeholder="Enter an email"
        onChange={handleAddFormChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
