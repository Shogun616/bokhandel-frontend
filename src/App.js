import React from "react";
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LogIn from "./pages/user/logIn";
import SignUpCustomer from "./pages/user/signUpCustomer";
import SignUpEmployee from "./pages/user/signUpEmployee";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path={'/'} element={<Home />}/>
                <Route exact path={'/loggaIn'} element={<LogIn />}/>
                <Route exact path={'/registeraKund'} element={<SignUpCustomer />}/>
                <Route exact path={'/registeraAdmin'} element={<SignUpEmployee />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
