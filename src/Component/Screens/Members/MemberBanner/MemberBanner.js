import React from "react";
import Header from "../../../Partials/Header/Header";
import "./MemberBanner.css";
function MemberBanner() {
  return (
    <div className="bg">
      <div className="berthing-wrapper member-banner-img">
        <div className="imageGradiant">
          <Header />
        </div>
        <div className="container">
          <div className="members-hero desktopMemberhero">
            <h1>
              Comprising 400+ reputed members handling vessels calling
              Bangladesh Ports
            </h1>

            <p>
              The main objective of this Association is to resolve problems
              faced by its members and to make a positive contribution to the
              long term progress of the Ports and Shipping industry in
              Bangladesh.
            </p>

            <button className="btn btn-outline-brand">
              Become A Member
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99996 0.166585L5.05996 1.10658L8.77996 4.83325L0.666626 4.83325L0.666626 6.16658L8.77996 6.16658L5.05329 9.88659L5.99996 10.8333L11.3333 5.49992L5.99996 0.166585Z"
                  fill="#BBC9ED"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="members-hero mobileMembersHero">
          <h1>
            Comprising 400+ reputed members handling vessels calling Bangladesh
            Ports
          </h1>

          <p>
            The main objective of this Association is to resolve problems faced
            by its members and to make a positive contribution to the long term
            progress of the Ports and Shipping industry in Bangladesh.
          </p>

          <button className="btn btn-outline-brand">
            Become A Member
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99996 0.166585L5.05996 1.10658L8.77996 4.83325L0.666626 4.83325L0.666626 6.16658L8.77996 6.16658L5.05329 9.88659L5.99996 10.8333L11.3333 5.49992L5.99996 0.166585Z"
                fill="#BBC9ED"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemberBanner;
