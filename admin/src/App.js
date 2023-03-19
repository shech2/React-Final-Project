import React from "react";
import Sidebar from "./components/sidebar.js/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import OrderList from "./pages/TransactionList/TransactionList";

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
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
        <Routes>
          <Route path="/transactions" element={<OrderList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;