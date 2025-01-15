import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditUserPage from "./page/EditUserPage";
import UsersApp from "./Users/Users";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EditUserPage />} />
          <Route path="/users" element={<UsersApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
