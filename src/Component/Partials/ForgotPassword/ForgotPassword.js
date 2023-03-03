import React, { useState } from 'react'
import './ForgotPassword.css'
function ForgotPassword({loginModal, setLoginModal, registerModal , setRegisterModal, forgotPassswordModal ,setForgotPassswordModal}) {
    const [closeModal , setCloseModal] =useState(true);
   
    const handleCloseModal= ()=>{
        setCloseModal(!closeModal) 
    }
    const handleLogin =()=>{
        setLoginModal(!loginModal)
        setForgotPassswordModal(!forgotPassswordModal)
    }
  return (
    <div className='bg'>
    { 
    closeModal &&
        <div data-aos="fade-down" className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="close-icon">
                    <button onClick={handleCloseModal} type="button" className="closeModalBtn" data-bs-dismiss="modal" aria-label="Close"><svg
                        width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.6578 8.45753L16.001 14.1144L10.3441 8.45753C10.0941 8.20748 9.75492 8.067 9.4013 8.067C9.04767 8.067 8.70854 8.20748 8.45849 8.45753C8.20844 8.70758 8.06796 9.04671 8.06796 9.40034C8.06796 9.75396 8.20844 10.0931 8.45849 10.3431L14.1153 16L8.45849 21.6569C8.20844 21.9069 8.06796 22.246 8.06796 22.5997C8.06796 22.9533 8.20844 23.2924 8.45849 23.5425C8.70854 23.7925 9.04767 23.933 9.4013 23.933C9.75492 23.933 10.0941 23.7925 10.3441 23.5425L16.001 17.8856L21.6578 23.5425C21.9079 23.7925 22.247 23.933 22.6006 23.933C22.9542 23.933 23.2934 23.7925 23.5434 23.5425C23.7935 23.2924 23.934 22.9533 23.934 22.5997C23.934 22.246 23.7935 21.9069 23.5434 21.6569L17.8866 16L23.5434 10.3431C23.7935 10.0931 23.934 9.75396 23.934 9.40034C23.934 9.04671 23.7935 8.70758 23.5434 8.45753C23.2934 8.20748 22.9542 8.067 22.6006 8.067C22.247 8.067 21.9079 8.20748 21.6578 8.45753Z"
                            fill="white" />
                    </svg>
                    </button>
                </div>

                <div className="modal-body authForm">
                    <form action="">
                        <div className="login">
                            <div className="wlcm">
                                <h1>Welcome!</h1>
                                <p>Are you forgot your password?</p>
                            </div>
                            <div className="wlcm">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="wlcm">
                                <button type="submit" className="w-100 btn btn-brand">Submit</button>
                            </div>
                            
                            <div className="wlcm">
                                <p className="haveAcount">Don’t forgot? <span data-bs-toggle="modal"
                                    data-bs-target="#signUpModal" onClick={handleLogin}>Log In!</span></p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    }
</div>
  )
}

export default ForgotPassword