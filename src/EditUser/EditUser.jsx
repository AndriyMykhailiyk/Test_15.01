import React from "react";
import './EditUser.css'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EditUser = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <div className="edit-container">
<header>
    <h1>EDIT USER</h1>
</header>
<div className="inputSection">

<div className="User">
    <p>User</p>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Олег Шевченко</em>
          </MenuItem>
          {/* Додайте сюди інші опції */}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
</div>

</div>
<div className="BtnSection">
    
</div>
    </div>
      );
};

export default EditUser;
