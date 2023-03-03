import React from 'react'
import './EditProfile.css'
import user from '../../../assets/images/userImg.png'
import Header from '../../Partials/Header/Header'
function EditProfile() {
  return (
   
   <div className="bg">
    <div className="edit_prof">
    <Header/>
    </div>
     <div className="container edit">
        <div className="edit_profile">
            <div className="profile-title">
                <h1 className="profileTitle">Edit Profile</h1>
            </div>
        </div>

        <div className="editProfContainer">
            <form action="#">
                <div className="row">
                    <div className="user-image text-center">
                        <div className="imgContainer">
                            <img className="profImgShow" src={user} alt=""/>
                            <button type="button" className="overlayUpBtn"><svg width="19" height="18" viewBox="0 0 19 18"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
                                        fill="#BBC9ED" />
                                </svg></button>
                            <input className="visuallyHidden profImageInput required" type="file" name="profileImg"
                                onchange="readURL()"/>
                        </div>
                        <h6 className="uploadPic">UPLOAD YOUR PICTURE</h6>

                    </div>

                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="Name" placeholder="Your Name"/>
                            <label for="Name">Your Name</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                            <label for="email">Your Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="phone" placeholder="Phone Number"/>
                            <label for="phone">Phone Number</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="date" className="form-control date" id="dob" placeholder="Date Of Birth"/>
                            <label for="dob">Date Of Birth</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="w-100 btn btn-brand save-profile"
                          >Save Profile</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
   </div>
  )
}

export default EditProfile