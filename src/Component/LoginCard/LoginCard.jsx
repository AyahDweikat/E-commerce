import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Utils/Context";
function LoginCard({ tab, location }) {
  const navigate = useNavigate();
  const {auth} = useContext(GlobalContext);
  function onLogout() {
    if (auth.user) {
      auth.signout();
    } else {
      navigate("./login", location);
    }
  }
  return (
    <div>
      <li className="nav-item ms-auto"  onClick={onLogout} >
        <button
          className={`btn nav-link ${tab.cssClass}
          ${tab.isActive ? "active" : ""}`}>
          {auth.user ?
                    <React.Fragment>
                        <div className="welcome" >{`Welcome ${auth?.user?.name}`}</div>
                        <div>Logout</div>
                    </React.Fragment>
                    :
                    tab.name}

        </button>
      </li>
    </div>
  );
}

export default LoginCard;
