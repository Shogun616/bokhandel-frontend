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
import ConfirmRegister from "./pages/confirm/confirmRegister";
import ConfirmOrder from "./pages/confirm/confirmOrder";
import StartAdmin from "./pages/Start/startAdmin";
import LogInAdmin from "./pages/user/logInAdmin";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/login'} element={<LogIn />}/>
                <Route path={'/login/admin'} element={<LogInAdmin />}/>
                <Route path={'/registera/kund'} element={<SignUpCustomer />}/>
                <Route path={'/registera/admin'} element={<SignUpEmployee />}/>
                <Route path={'/start'} element={<Start />}/>
                <Route path={'/start/admin'} element={<StartAdmin />}/>
                <Route path={'/laggTillBok'} element={<AddBook />}/>
                <Route path={'/laggTillBokIVarukrogen'} element={<AddBooksToCart />}/>
                <Route path={'/tillokaAntaBocker'} element={<UpdateCartItem />}/>
                <Route path={'/minskaAntalBocker'} element={<DeleteBooksFromCart />}/>
                <Route path={'/taBortVarukorg'} element={<DeleteCartItem />}/>
                <Route path={'/skapaOrder'} element={<AddOrder />}/>
                <Route path={'/registeringsBekraftelse'} element={<ConfirmRegister />}/>
                <Route path={'/orderBekraftelse'} element={<ConfirmOrder />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
