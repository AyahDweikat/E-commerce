import { tab } from "@testing-library/user-event/dist/tab";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navStruct } from "./utils";
import { GlobalContext } from './../../Utils/Context';
import './Navbar.css'
import LoginCard from "../LoginCard/LoginCard";
function Navbar() {
  const [navStructState, setNavStructState] = useState(navStruct);
  const location = useLocation();
  const _auth = useContext(GlobalContext);
  let {auth} = _auth;

  // const [pathName, setPathName] = useState('')

  useEffect(() => {
    const _navStructState = navStructState.map((item, idx) => {
      const _item = { ...item };
      if (_item.path === location.pathname) {
        _item.isActive = true;
      } else {
        _item.isActive = false;
      }
      return _item;
    });
    setNavStructState(_navStructState);
  }, [location]);
  // function onTabbedClicked(tabIdx) {
  //   let _navStructState = JSON.parse(JSON.stringify(navStructState));
  //   _navStructState = _navStructState.map((tab, idx) => {
  //     tab.isActive = idx === tabIdx;
  //     return tab;
  //   });
  //   setNavStructState(_navStructState);
  // }
  return (
    <div className="navbar navbar-expand-md bg-primary navbar-dark ps-5">
      {/* {console.log(location.pathname)} */}
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavBar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="mainNavBar">
        <ul className="navbar-nav w-100">
          {navStructState.map((tab, idx) => {
            return (
              <div key={idx} className={`d-flex ${ tab.name === 'Login'? "ms-auto" :""} me-3`}>
                { tab.name === 'Login' ?
                <LoginCard key={idx} tab={tab} location={location} /> 
                :
                <Link to={tab.path} state={`${location.pathname}${location.search}`}>
                  <li className="nav-item">
                    <button
                      className={`btn nav-link ${tab.cssClass} 
                      ${tab.isActive ? "active" : "" }`}
                    >
                      {tab.name}
                      </button>
                  </li>
                </Link>
          }
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

// export default class Navbar extends Component {
//
