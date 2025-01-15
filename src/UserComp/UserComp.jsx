import React, { useState, useEffect } from "react";
import "./Users.css";
import Busket from "../svg/basket.svg";
const Users = () => {
  const initialUsers = [
    {
      id: 1,
      name: "John Doe",
      status: "Active",
      department: "IT",
      country: "US",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Disabled",
      department: "Finance",
      country: "CA",
    },
    {
      id: 3,
      name: "Alice Johnson",
      status: "Active",
      department: "Marketing",
      country: "GB",
    },
    {
      id: 4,
      name: "Bob Brown",
      status: "All statuses",
      department: "Sales",
      country: "AU",
    },
    {
      id: 5,
      name: "Charlie Davis",
      status: "Active",
      department: "Customer Support",
      country: "DE",
    },
  ];

  const getUsersFromLocalStorage = () => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : initialUsers;
  };

  const [users, setUsers] = useState(getUsersFromLocalStorage());
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    status: "",
    department: "",
    country: "",
  });
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleDepartmentChange = (department) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(
        selectedDepartments.filter((dept) => dept !== department)
      );
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
    }
  };

  const resetFilters = () => {
    setSelectedDepartments([]);
    setSelectedStatus("");
    setSelectedCountry("");
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const openAddUserPopup = () => {
    setIsAddUserPopupOpen(true);
  };

  const closeAddUserPopup = () => {
    setIsAddUserPopupOpen(false);
    setNewUser({
      name: "",
      status: "",
      department: "",
      country: "",
    });
  };

  const addUser = () => {
    if (
      newUser.name &&
      newUser.status &&
      newUser.department &&
      newUser.country
    ) {
      const user = {
        id: users.length + 1,
        ...newUser,
      };
      const updatedUsers = [...users, user];
      setUsers(updatedUsers);
      closeAddUserPopup();
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const filteredUsers = users.filter((user) => {
    const matchesDepartment =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(user.department);
    const matchesStatus = !selectedStatus || user.status === selectedStatus;
    const matchesCountry = !selectedCountry || user.country === selectedCountry;
    return matchesDepartment && matchesStatus && matchesCountry;
  });

  const uniqueDepartments = [...new Set(users.map((user) => user.department))];
  const uniqueStatuses = [...new Set(users.map((user) => user.status))];
  const uniqueCountries = [...new Set(users.map((user) => user.country))];

  return (
    <div className="users-container">
      <h1 className="UsersTitle">USERS</h1>

      <div className="wrapBloack">
        <p>
          Please add at least 3 departmetns to be able to proceed next steps.
        </p>
        <div className="wrappBlock">
          <div className="filters">
            <div className="department-filter">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="">All Departments</option>
                {uniqueDepartments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <div className="status-filter">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                disabled={!selectedDepartment}
              >
                <option value="">All Statuses</option>
                {uniqueStatuses.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="country-filter">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                disabled={selectedDepartments.length < 2}
              >
                <option value="">All Countries</option>
                {uniqueCountries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="wrapperDelitew">
              <img
                src={Busket}
                alt="basket"
                className="basket"
                onClick={resetFilters}
              />
            </div>
          </div>

          <button onClick={openAddUserPopup} className="add-user-button">
            Add User
          </button>
        </div>
      </div>

      <div className="user-list">
        <div className="headeruserList">
          <div className="user-info">
            <p>Full Name</p>
            <p>Department</p>
            <p>Country</p>
            <p>Status</p>
          </div>
        </div>

        {filteredUsers.map((user) => (
          <div key={user.id} className="user-item">
            <div className="user-info">
              <p>{user.name}</p>
              <p> {user.department}</p>
              <p>{user.country}</p>
              <p> {user.status}</p>
            </div>
            <div className="wrapperDelitew">
              <img
                src={Busket}
                alt="basket"
                className="basket1"
                onClick={() => deleteUser(user.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {isAddUserPopupOpen && (
        <div className="popup-overlay">
          <div className="add-user-popup">
            <h2 className="AddUsersTitle">ADD USER</h2>

            <div className="wrappInput">
              <div className="wrapOnInput">
                <label htmlFor="name" className="LableText">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="selectAl"
                  value={newUser.name}
                  onChange={handleNewUserChange}
                />
              </div>

              <div className="wrapOnInput">
                <label htmlFor="status" className="LableText">
                  Status:
                </label>
                <select
                  id="status"
                  name="status"
                  className="selectAl"
                  value={newUser.status}
                  onChange={handleNewUserChange}
                >
                  <option value="" className="optionStyle">
                    Select Status
                  </option>
                  {uniqueStatuses.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="wrapOnInput">
                <label htmlFor="department" className="LableText">
                  Department:
                </label>
                <select
                  id="department"
                  name="department"
                  value={newUser.department}
                  onChange={handleNewUserChange}
                  className="selectAl"
                >
                  <option value="" className="optionStyle">
                    Select Department
                  </option>
                  {uniqueDepartments.map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>

              <div className="wrapOnInput">
                <label htmlFor="country" className="LableText">
                  Country:
                </label>
                <select
                  id="country"
                  name="country"
                  className="selectAl"
                  value={newUser.country}
                  onChange={handleNewUserChange}
                >
                  <option value="" className="optionStyle">
                    Select Country
                  </option>
                  {uniqueCountries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="popup-buttons">
              <button onClick={closeAddUserPopup} className="cancel-button">
                Cancel
              </button>
              <button onClick={addUser} className="add-button">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
