import React, { useEffect, useState } from "react";
import "./EditUser.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EditUser = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [users, setUsers] = useState([]);
  const [initialData, setInitialData] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);

  const userData = [
    {
      name: "John Doe",
      status: {
        name: "Active",
        value: "ACTIVE",
      },
      department: {
        name: "Information Technology",
        value: "IT",
      },
      country: {
        name: "United States",
        value: "US",
      },
    },
    {
      name: "Jane Smith",
      status: {
        name: "Disabled",
        value: "DISABLED",
      },
      department: {
        name: "Finance",
        value: "FIN",
      },
      country: {
        name: "Canada",
        value: "CA",
      },
    },
    {
      name: "Alice Johnson",
      status: {
        name: "Active",
        value: "ACTIVE",
      },
      department: {
        name: "Marketing",
        value: "MKT",
      },
      country: {
        name: "United Kingdom",
        value: "GB",
      },
    },
    {
      name: "Bob Brown",
      status: {
        name: "All statuses",
        value: "ALL",
      },
      department: {
        name: "Sales",
        value: "SAL",
      },
      country: {
        name: "Australia",
        value: "AU",
      },
    },
    {
      name: "Charlie Davis",
      status: {
        name: "Active",
        value: "ACTIVE",
      },
      department: {
        name: "Customer Support",
        value: "CS",
      },
      country: {
        name: "Germany",
        value: "DE",
      },
    },
    {
      name: "Eve Wilson",
      status: {
        name: "Disabled",
        value: "DISABLED",
      },
      department: {
        name: "Human Resources",
        value: "HR",
      },
      country: {
        name: "France",
        value: "FR",
      },
    },
    {
      name: "Frank Moore",
      status: {
        name: "Active",
        value: "ACTIVE",
      },
      department: {
        name: "Operations",
        value: "OPS",
      },
      country: {
        name: "India",
        value: "IN",
      },
    },
    {
      name: "Grace Lee",
      status: {
        name: "All statuses",
        value: "ALL",
      },
      department: {
        name: "Legal",
        value: "LEG",
      },
      country: {
        name: "China",
        value: "CN",
      },
    },
    {
      name: "Henry White",
      status: {
        name: "Active",
        value: "ACTIVE",
      },
      department: {
        name: "Product Management",
        value: "PM",
      },
      country: {
        name: "Japan",
        value: "JP",
      },
    },
    {
      name: "Isabella Green",
      status: {
        name: "Disabled",
        value: "DISABLED",
      },
      department: {
        name: "Research and Development",
        value: "R&D",
      },
      country: {
        name: "Ukraine",
        value: "UA",
      },
    },
    {
      name: "Jack Black",
      status: {
        name: "Active",
        value: "ACTIVE",
      },
      department: {
        name: "Sales",
        value: "SAL",
      },
      country: {
        name: "Australia",
        value: "AU",
      },
    },
    {
      name: "Lily Scott",
      status: {
        name: "All statuses",
        value: "ALL",
      },
      department: {
        name: "Information Technology",
        value: "IT",
      },
      country: {
        name: "Canada",
        value: "CA",
      },
    },
  ];

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleUserChange = (event) => {
    const selectedUserName = event.target.value;
    const user = users.find((user) => user.name === selectedUserName);
    setSelectedUser(user);
    setSelectedStatus(user ? user.status.value : "");
    setSelectedDepartment(user ? user.department.value : "");
    setSelectedCountry(user ? user.country.value : "");
    setInitialData(user);
    setHasChanges(true);
  };

  const handleStatusChange = (event) => {
    const statusValue = event.target.value;
    setSelectedStatus(statusValue);
    setHasChanges(true);
  };

  const handleDepartmentChange = (event) => {
    const departmentValue = event.target.value;
    setSelectedDepartment(departmentValue);
    setHasChanges(true);
  };

  const handleCountryChange = (event) => {
    const countryValue = event.target.value;
    setSelectedCountry(countryValue);
    setHasChanges(true);
  };

  const handleUndo = () => {
    if (initialData) {
      setSelectedUser(initialData);
      setSelectedStatus(initialData.status.value);
      setSelectedDepartment(initialData.department.value);
      setSelectedCountry(initialData.country.value);
    }
    setHasChanges(false);
  };

  const handleSave = () => {
    console.log("Data saved:", {
      user: selectedUser,
      status: selectedStatus,
      department: selectedDepartment,
      country: selectedCountry,
    });
    setHasChanges(false);
  };

  const uniqueStatuses = [...new Set(users.map((user) => user.status.value))];
  const uniqueDepartments = [
    ...new Set(users.map((user) => user.department.value)),
  ];
  const uniqueCountries = [...new Set(users.map((user) => user.country.value))];

  return (
    <div className="edit-container">
      <header className="HeaderBlock">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "500",
            letterSpacing: "10px",
          }}
        >
          EDIT USER
        </h1>
      </header>
      <div className="inputSection">
        <div className="User">
          <p className="textUser">User</p>
          <Box>
            <FormControl fullWidth>
              <Select
                labelId="user-select-label"
                id="user-select"
                value={selectedUser ? selectedUser.name : ""}
                onChange={handleUserChange}
                placeholder="Select a user"
              >
                <MenuItem value="">
                  <em>Select a user</em>
                </MenuItem>
                {users.map((user, index) => (
                  <MenuItem key={index} value={user.name}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="wrapper_sec">
          <h2 className="User_Information">User Information</h2>
          <section className="wrap">
            <div className="User">
              <p className="textUser">Full Name</p>
              <Box>
                <FormControl fullWidth>
                  <Select
                    labelId="user-select-label"
                    id="user-select"
                    value={selectedUser ? selectedUser.name : ""}
                    onChange={handleUserChange}
                    placeholder="Select a user"
                  >
                    <MenuItem value="">
                      <em>Select a user</em>
                    </MenuItem>
                    {users.map((user, index) => (
                      <MenuItem key={index} value={user.name}>
                        {user.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="Status">
              <p className="textStatus">Status</p>
              <Box>
                <FormControl fullWidth>
                  <Select
                    labelId="status-select-label"
                    id="status-select"
                    value={selectedStatus}
                    onChange={handleStatusChange}
                  >
                    <MenuItem value="">
                      <em>Select a status</em>
                    </MenuItem>
                    {uniqueStatuses.map((status, index) => (
                      <MenuItem key={index} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="Department">
              <p className="textDepartment">Department</p>
              <Box>
                <FormControl fullWidth>
                  <Select
                    labelId="department-select-label"
                    id="department-select"
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                  >
                    <MenuItem value="">
                      <em>Select a department</em>
                    </MenuItem>
                    {uniqueDepartments.map((department, index) => (
                      <MenuItem key={index} value={department}>
                        {department}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="Country">
              <p className="textCountry">Country</p>
              <Box>
                <FormControl fullWidth>
                  <Select
                    labelId="country-select-label"
                    id="country-select"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <MenuItem value="">
                      <em>Select a country</em>
                    </MenuItem>
                    {uniqueCountries.map((country, index) => (
                      <MenuItem key={index} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </section>
        </div>
      </div>
      <div className="BtnSection">
        <button onClick={handleUndo} className="Select">
          Undo
        </button>

        <button onClick={handleSave} disabled={!hasChanges} className="Select">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditUser;
