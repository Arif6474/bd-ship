import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/images/Icons and Logos/logo.svg";
import facebook from "../../../assets/images/002-facebook.svg";
import instagram from "../../../assets/images/001-instagram.svg";
import twitter from "../../../assets/images/003-twitter.svg";
import map from "../../../assets/images/map-marker-alt-solid 1.svg";
import phone from "../../../assets/images/phone-alt-solid 1.svg";
import envelope from "../../../assets/images/envelope-open-text-solid 1.svg";
import axios from 'axios'
import { CONTACT_INFOS_API, MESSAGES_API, OFFICES_API } from '../../../../src/Utilities/APIs'
function Footer() {
  const [offices, setOffices] = useState([])
  // console.log(offices);
  useEffect(() => {
     const getOffices = async() =>{
          const { data } = await axios.get(OFFICES_API)
          setOffices(data)
      }
      getOffices()
  }, [])
  const [contactInfos, setContactInfos] = useState([])
  // console.log(offices);
  useEffect(() => {
     const getContactInfos = async() =>{
          const { data } = await axios.get(CONTACT_INFOS_API)
          setContactInfos(data)
      }
      getContactInfos()
  }, [])
  const handleMessage = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const description = e.target.message.value;
    //    console.log(name, email, subject, description);
    const messages = { name, email, subject, description };
    axios.post(MESSAGES_API , messages )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      e.target.reset()
  };
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-icon">
              <div className="footerLogo">
                <div>
                  {" "}
                  <img src={logo} alt="" />
                </div>
                <div>
                {
                    contactInfos?.map(contactInfo => 
                <ul key={contactInfo._id}>
                 
                  <li>
                    <Link to={`/${contactInfo?.facebook}`}>
                      <img src={facebook} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`/${contactInfo?.instagram}`}>
                      <img src={instagram} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`/${contactInfo?.twitter}`}>
                      <img src={twitter} alt="" />
                    </Link>
                  </li>
                </ul>
                      )
                  }
                </div>
              </div>
              <div className="footerNavLink">
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/members">Our members</Link>
                  </li>
                  <li>
                    <Link to="/berthing-report">Berthing Report</Link>
                  </li>
                  <li>
                    <Link to="/shipping-stat">Shipping Statistics</Link>
                  </li>
                  <li>
                    <Link href="tariffRates.html">Tariff Rates</Link>
                  </li>
                  <li>
                    <Link to="/circulars">Circulars</Link>
                  </li>
                  <li>
                    <Link to="/news-events">News & Events</Link>
                  </li>
                  <li>
                    <Link to="/training-dev">Training & Development</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="address">
              {
                offices?.map(office => 
              <div className="footer-address" key={office._id}>
                <h6>{office?.name} {office?.district}</h6>
                <div className="singleAddress">
                  <div>
                    <img src={map} alt="" />
                  </div>
                  <div>
                  {office?.address}
                  </div>
                </div>
                <div className="singleAddress">
                  <div>
                    <img src={phone} alt="" />
                  </div>
                  <div>{office?.contact}</div>
                </div>
                <div className="singleAddress">
                  <div>
                    <img src={envelope} alt="" />
                  </div>
                  <div>bsaa@bbts.net</div>
                </div>
              </div>
                  )
              }
           
            </div>

            <div className="get-in-touch">
              <form onSubmit={handleMessage} action="#">
                <div className="contactFrom">
                  <div className="contact">
                    <div className="get-in">
                      <h3>Get In Touch</h3>
                    </div>
                    <div className="get-in">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div className="get-in">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="get-in">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="Subject">Subject</label>
                      </div>
                    </div>
                    <div className="get-in">
                      <div className="form-floating">
                        <textarea
                          className="form-control text-area"
                          placeholder="message"
                          id="message"
                        ></textarea>
                        <label for="message">Your Message</label>
                      </div>
                    </div>
                    <div className="get-in text-center send text-lg-end">
                      <button type="submit" className="btn btn-brand ">
                        Send Message{" "}
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.00002 0.166585L5.06002 1.10658L8.78002 4.83325L0.666687 4.83325L0.666687 6.16658L8.78002 6.16658L5.05335 9.88659L6.00002 10.8333L11.3334 5.49992L6.00002 0.166585Z"
                            fill="#061425"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="copy-right">
            <div className="get-in copyright">
              <h6>
                © Copyright 2020 - 2021 <span></span> All rights reserved by
                Antopolis
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
