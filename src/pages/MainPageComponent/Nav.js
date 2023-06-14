import classes from "./Nav.module.css";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className={classes["MainPage__Header"]}>
      <nav className={classes["MainPage__Nav"]}>
        <div className={classes["MainPage__Nav--Items"]}>
          <a href="_">
            <img
              src="https://asset.brandfetch.io/idMweYxyV_/idl8-Z71mD.svg"
              alt="sellix logo"
            />
          </a>
          <ul className={classes["MainPage__Nav--Items-List"]}>
            <a href="_">
              <li>Features</li>
            </a>
            <a href="_">
              <li>Pricing</li>
            </a>
            <a href="_">
              <li>Fees</li>
            </a>
            <a href="_">
              <li>Resources</li>
            </a>
            <a href="_" className={classes["MainPage__Nav--Items-List_links"]}>
              <li>Blog</li>
            </a>
            <a href="_" className={classes["MainPage__Nav--Items-List_links"]}>
              <li>Stories</li>
            </a>
            <a href="_" className={classes["MainPage__Nav--Items-List_links"]}>
              <li>ICOs</li>
            </a>
            <a href="_">
              <li>Sellix-Pay</li>
            </a>
          </ul>
        </div>
        <div>
          <NavLink to="/Login">
            <button className="btnNav btnWhite">Login</button>
          </NavLink>
          <button className="btnNav btnBlack">
            Get Started
            <i className="ml-2 fa fa-arrow-right"></i>
          </button>
        </div>
        <div className={classes["MainPage__Nav--bars"]}>
          <i className="fa fa-bars" style={{ fontSize: "25px" }}></i>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
