import * as React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../Images/ProfilePicture.jpg";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div>
          <img src={ProfilePicture} className="mx-auto profile-pic" />
        </div>
        <div className="name text-center">Dhruv Kacha</div>
        <div className="occupation text-center">Web developer</div>
      </div>
      <div>
        <ul className="links">
          <Link className="links" to="/dhruv-kacha/">
            <div>Home</div>
          </Link>
          <Link className="links" to="/dhruv-kacha/about">
            <div>About</div>
          </Link>
          <Link className="links" to="/">
            <div>Work</div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
