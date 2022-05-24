import React from "react";
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/user/logIn";
import SignUpCustomer from "./pages/user/signUpCustomer";
import SignUpEmployee from "./pages/user/signUpEmployee";
import Start from "./pages/Start/start";
import AddBook from "./pages/book/addBook";
import AddBooksToCart from "./pages/shoppingCart/addBooksToCart";
import UpdateCartItem from "./pages/shoppingCart/updateCartItem";
import DeleteBooksFromCart from "./pages/shoppingCart/deleteBooksFromCart";
import DeleteCartItem from "./pages/shoppingCart/DeleteCartItem";
import AddOrder from "./pages/order/addOrder";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/loggaIn'} element={<LogIn />}/>
                <Route path={'/registeraKund'} element={<SignUpCustomer />}/>
                <Route path={'/registeraAdmin'} element={<SignUpEmployee />}/>
                <Route path={'/start'} element={<Start />}/>
                <Route path={'/laggTillBok'} elemet={<AddBook />}/>
                <Route path={'/laggTillBokIVarukrogen'} element={<AddBooksToCart />}/>
                <Route path={'/tillökaAntaBocker'} element={<UpdateCartItem />}/>
                <Route path={'/minskaAntalBocker'} element={<DeleteBooksFromCart />}/>
                <Route path={'/taBort Varukorgen'} element={<DeleteCartItem />}/>
                <Route path={'/skapaOrder'} element={<AddOrder />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
