import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import axios from "axios";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobsList from "./components/JobsList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/user-list" element={<UserList />} />
        <Route path="/job-list" element={<JobsList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
