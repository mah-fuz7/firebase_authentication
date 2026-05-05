// import { Link } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-5xl">
          🔥<span className="text-xl mt-5 text-orange-500">fireBase</span>
        </a>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
     
           <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/signin"}>Sign In</MyLink>
          </li>
          <li>
           
                   <MyLink to={"/login"}>Login</MyLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="border-2 border-amber-400 p-6 mr-5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
