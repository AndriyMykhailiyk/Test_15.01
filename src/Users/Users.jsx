import React from "react";
import Users from "../UserComp/UserComp";
import SwitchBtn from "../SwitchBtn/SwitchBtn";
const UsersApp = () => {
  return (
    <div className="App">
      <SwitchBtn />
      <hr />
      <Users />
    </div>
  );
};

export default UsersApp;
