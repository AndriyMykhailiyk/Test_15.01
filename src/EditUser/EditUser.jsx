import React, { useEffect, useState } from "react";
import './EditUser.css'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EditUser = () => {
    const [age, setAge] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            const data = [
                {
                    "name": "John Doe",
                    "status": {
                        "name": "Active",
                        "value": "ACTIVE"
                    },
                    "department": {
                        "name": "Information Technology",
                        "value": "IT"
                    },
                    "country": {
                        "name": "United States",
                        "value": "US"
                    }
                },
                {
                    "name": "Jane Smith",
                    "status": {
                        "name": "Disabled",
                        "value": "DISABLED"
                    },
                    "department": {
                        "name": "Finance",
                        "value": "FIN"
                    },
                    "country": {
                        "name": "Canada",
                        "value": "CA"
                    }
                },
                // Add other users here...
            ];
            setUsers(data);
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="edit-container">
            <header className="HeaderBlock">
                <h1>EDIT USER</h1>
            </header>
            <div className="inputSection">
                <div className="User">
                    <p className="textUser">User</p>
                    <Box>
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                value={age}
                                onChange={handleChange}
                                defaultValue="Оберіть вік"
                                placeholder="Оберіть вік"
                            >
                                <MenuItem value="">
                                    <em>Олег Шевченко</em>
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
            </div>
            <div className="BtnSection">
                {/* Add buttons or other elements here */}
            </div>
        </div>
    );
};

export default EditUser;