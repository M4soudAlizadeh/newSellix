// import classes from "./Nav.module.css";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex items-center justify-center">
      <nav className="flex items-center justify-between w-full lg:h-20 h-14 pl-5 pr-3 max-w-[1376px]">
        <div className="flex items-center w-[70%]">
          <a href="_">
            <img
              className="h-5 w-18"
              src="https://asset.brandfetch.io/idMweYxyV_/idl8-Z71mD.svg"
              alt="sellix logo"
            />
          </a>
          <ul className="flex ml-12 text-base font-medium font-Inter lgMax:hidden">
            <a href="_">
              <li>Features</li>
            </a>
            <a href="_" className="ml-7">
              <li>Pricing</li>
            </a>
            <a href="_" className="ml-7">
              <li>Fees</li>
            </a>
            <a href="_" className="ml-7">
              <li>Resources</li>
            </a>
            <a href="_" className="ml-7 lgMax2:hidden">
              <li>Blog</li>
            </a>
            <a href="_" className="ml-7 lgMax2:hidden">
              <li>Stories</li>
            </a>
            <a href="_" className="ml-7 lgMax2:hidden">
              <li>ICOs</li>
            </a>
            <a href="_" className="ml-7">
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
        <div className="hidden pr-5 lgMax:inline-block">
          <i className="fa fa-bars" style={{ fontSize: "25px" }}></i>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
