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
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Login from "./Pages/Login/Login";
import { FetchData } from './Utils/ApiUtils';
import { mapCategory } from './Utils/utils';
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import IsAuth from "./Component/IsAuth/IsAuth";
import Info from "./Pages/Info/Info";
function App() {


    // method -1
    // return (
    //   <>
    //     <BrowserRouter>
    //       {/* <Navbar /> */}
    //       <Routes>
    //         <Route
    //         element={<Layout />}
    //         >
    //           <Route path={"/"} element={<Category />} />
    //           <Route path={"/category"} element={<Category />} />
    //           <Route path={"/product"} element={<ProductsFun />} />
    //           <Route path={"/login"} element={<Login />} />

    //         </Route>
    //       </Routes>
    //     </BrowserRouter>
    //   </>
    // );

    // method -2
    // const router = createBrowserRouter([
    //   {
    //     element:<Layout/>,
    //     children: [
    //       {
    //         path:'/',
    //         element: <Category/>
    //       },
    //       {
    //         path:'/category',
    //         element: <Category/>
    //       },
    //       {
    //         path:'/product',
    //         element: <ProductsFun/>
    //       },
    //     ]
    //   },
    // ])
    // method -3
    const router = createBrowserRouter(
      createRoutesFromElements(// without <Routes></Routes> tag
        <Route element={<Layout />} errorElement={<PageNotFound />}>
          <Route path={"/"} element={
            <RequireAuth>
              <Category />
            </RequireAuth>
          }
          loader={async  () =>{
            const resp = await FetchData(
              "https://fakestoreapi.com/products/categories",
              "GET"
            );
            const mappedCategories = mapCategory(resp.data);
            if (resp.status === 200) {
              return mappedCategories;
            } else {
              console.warn("sorry, this API failed");
              //// @TODO: we will handle it later// to work later
            }
          }}/>
          <Route path={"/category"} 
          element={
            <RequireAuth>
              <Category />
            </RequireAuth>
          }
          />
          <Route path={"/product"} element={
            <RequireAuth>
              <ProductsFun />
            </RequireAuth>
          } />
          <Route path={"/login"} element={
            <IsAuth>
              <Login />
            </IsAuth>
          } />
          <Route path={"/info"} element={<Info/>} />
          {/* <Route path={"/login"} element={
            // <IsAuth>
              <Login />
            // </IsAuth>
          } /> */}
          {/* <Route path={"*"} element={<PageNotFound />} /> */}
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  }

export default App;
