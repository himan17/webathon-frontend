import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { logo1 } from "../../assets/assets";
import { Navigate, useNavigate } from "react-router";

const Profile = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("curUser")) {
      navigate("/signin");
    } else {
      setUser(JSON.parse(localStorage.getItem("curUser")));
    }
  }, []);

  return (
    <div className="profile">
      <div>
        <img />
      </div>

      <div className="pc-container">
        <h2>My Profile</h2>
        <div>
          <p>Email id</p>
          <div className="profile-val">{user?.email}</div>
        </div>
        <div>
          <p>Name</p>
          <div className="profile-val">{user?.fullName}</div>
        </div>
        <div>
          <p>College</p>
          <div className="profile-val">{user?.college}</div>
        </div>
        <div>
          <p>About</p>
          <div className="profile-val">{user?.about}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="Button yellow"
            onClick={() => {
              localStorage.clear();
              navigate("/signup");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
