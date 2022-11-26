import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import CustomModal from "./Component/CustomModal/CustomModal";
// import Navbar from "./Component/Navbar/Navbar";
// import Products from "./Pages/Products/Products";
import "./Styles/mixins.scss";
// import { GlobalContext } from "./Utils/Context";
// import {Modal} from "bootstrap";
// import './App.css';
import React from "react";
import ProductsFun from "./Pages/Products/ProductsFun";
import Category from "./Pages/Category/Category";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route 
            element={<Layout />}
            >
              <Route path={"/"} element={<Category />} />
              <Route path={"/category"} element={<Category />} />
              <Route path={"/product"} element={<ProductsFun />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
