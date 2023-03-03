import React from "react";
import "./Profile.css";
import user from "../../../assets/images/userImg.png";
import Header from "../../Partials/Header/Header";
function Profile() {
  return (
    <div className="bg">
      <div className="edit_prof">
        <Header />
      </div>
      <div className="container">
        <div className="my-profile">
          <div className="profile_title">
            <h1 className="profileTitle">My Profile</h1>
          </div>
        </div>

        <div className="profContainer">
          <div className="my-profile-content">
            <div className="profile-details profImg">
              <img src={user} alt="" />
              <a href="editProfile.html">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
                    fill="#BBC9ED"
                  />
                </svg>
                Edit profile
              </a>
            </div>
            <div className="profile-details">
              <div className="profDetails">
                <h2>NAME</h2>
                <h1>Sheehan Rahman</h1>
              </div>
              <div className="profDetails">
                <h2>DATE OF BIRTH</h2>
                <h1>24 May, 1984</h1>
              </div>
            </div>
            <div className="profile-details">
              <div className="profDetails">
                <h2>EMAIL ADDRESS</h2>
                <h1>sheehanvy@gmail.com</h1>
              </div>
              <div className="profDetails">
                <h2>PHONE NUMBER</h2>
                <h1>+8801796421891</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
