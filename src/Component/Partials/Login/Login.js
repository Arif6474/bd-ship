import React, { useState } from 'react'
import './Login.css'
function Login({loginModal, setLoginModal, registerModal , setRegisterModal , forgotPassswordModal , setForgotPassswordModal }) {
    const [closeModal , setCloseModal] =useState(true);
    const handleCloseModal= ()=>{
        setCloseModal(!closeModal)
        setLoginModal(!loginModal)
    }
    const handleRegister =()=>{
        setLoginModal(!loginModal)
        setRegisterModal(!registerModal)
    }
    const handleForgetPassword =()=>{
        setLoginModal(!loginModal)
        setForgotPassswordModal(!forgotPassswordModal)
    }
    return (
        <div className='bg'>
        { closeModal &&
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
                                    <p>Log In to your account</p>
                                </div>
                                <div className="wlcm">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="wlcm">
                                    <div className="form-floating passRel">
                                        <input type="password" className="form-control" id="Password"
                                            placeholder="Your Password" />
                                        <label for="Password">Your Password</label>
                                        <button type="button" className="passwordToogler">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21.9196 11.6C19.8996 6.91 16.0996 4 11.9996 4C7.89958 4 4.09958 6.91 2.07958 11.6C2.02452 11.7262 1.99609 11.8623 1.99609 12C1.99609 12.1377 2.02452 12.2738 2.07958 12.4C4.09958 17.09 7.89958 20 11.9996 20C16.0996 20 19.8996 17.09 21.9196 12.4C21.9746 12.2738 22.0031 12.1377 22.0031 12C22.0031 11.8623 21.9746 11.7262 21.9196 11.6ZM11.9996 18C8.82958 18 5.82958 15.71 4.09958 12C5.82958 8.29 8.82958 6 11.9996 6C15.1696 6 18.1696 8.29 19.8996 12C18.1696 15.71 15.1696 18 11.9996 18ZM11.9996 8C11.2085 8 10.4351 8.2346 9.7773 8.67412C9.1195 9.11365 8.60681 9.73836 8.30406 10.4693C8.00131 11.2002 7.9221 12.0044 8.07644 12.7804C8.23078 13.5563 8.61174 14.269 9.17115 14.8284C9.73056 15.3878 10.4433 15.7688 11.2192 15.9231C11.9951 16.0775 12.7994 15.9983 13.5303 15.6955C14.2612 15.3928 14.8859 14.8801 15.3255 14.2223C15.765 13.5645 15.9996 12.7911 15.9996 12C15.9996 10.9391 15.5782 9.92172 14.828 9.17157C14.0779 8.42143 13.0604 8 11.9996 8ZM11.9996 14C11.604 14 11.2173 13.8827 10.8884 13.6629C10.5595 13.4432 10.3032 13.1308 10.1518 12.7654C10.0004 12.3999 9.96084 11.9978 10.038 11.6098C10.1152 11.2219 10.3057 10.8655 10.5854 10.5858C10.8651 10.3061 11.2214 10.1156 11.6094 10.0384C11.9974 9.96126 12.3995 10.0009 12.7649 10.1522C13.1304 10.3036 13.4428 10.56 13.6625 10.8889C13.8823 11.2178 13.9996 11.6044 13.9996 12C13.9996 12.5304 13.7889 13.0391 13.4138 13.4142C13.0387 13.7893 12.53 14 11.9996 14Z"
                                                    fill="#BBC9ED" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="login-btn">
                                    <button type="submit" className="w-100 btn btn-brand">Log In</button>
                                </div>
                                <div className="login-btn">
                                    <button onClick={handleForgetPassword} type="button" className="w-100 btn btn-forgot" data-bs-toggle="modal"
                                        data-bs-target="#forgotPassModal">Forgot Password?</button>
                                </div>
                                <div className="wlcm">
                                    <p className="haveAcount">Don’t have any account? <span onClick={handleRegister}  data-bs-toggle="modal"
                                        data-bs-target="#signUpModal">Create one!</span></p>
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

export default Login