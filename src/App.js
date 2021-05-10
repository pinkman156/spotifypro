import React, { useState } from "react";

import "./styles/App.css";
import Dashboard from "./components/DashBoard";
import Login from "./components/Login";
import NavBar from "./components/Navbar";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <NavBar />

      {token === "" ? (
        <Login token={token} setToken={setToken} />
      ) : (
        <Dashboard token={token} />
      )}
    </div>
  );
}
