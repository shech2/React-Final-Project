import React from "react";
import Sidebar from "./components/sidebar.js/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<UserList />} />
        </Routes>
        <Routes>
          <Route path="/user/:userId" element={<User />} />
        </Routes>
        <Routes>
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;