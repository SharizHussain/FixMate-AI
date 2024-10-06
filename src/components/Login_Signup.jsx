import React, { useEffect, useState } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import bgImg from '../assets/img/dark-theme-background-8xlni5mkdutatc7r.jpg';
import './Login_Signup.css';

export default function Login_Signup() {
  gsap.registerPlugin(useGSAP);
  const tl = gsap.timeline()

  const [auth, setauth] = useState("login");

  useGSAP(() => {
    gsap.from('.logo-container', {
      y: -200,
      duration: 1,
    })

    gsap.from('.slide,.slide-btn', {
      x: -500,
      duration: 3,
      delay: 1,
      ease: "elastic",
      opacity: 0
    });

    tl.to('.login-container', {
      delay: 0.8,
      opacity: 1,
    });

    tl.to('.login-container', {
      x: 300,
      duration: 0.5,
    })
    
    tl.to('.login-container', {
      x: 0,
      duration: 1,
      ease: "elastic.out"
    })
  });

  const Login = () => {
    return (
      <>
        <div className='login-container'>
          <i className="fa-regular fa-user user-icon"></i>
          <h1 className='auth-title'>{auth === "login" ? "Login" : "SignUp"}</h1>
          <input type="text" className='auth-input' placeholder='Email' />
          <input type="text" className='auth-input password-input' placeholder='Password' />
          <p className='auth-switch-text'>
            {auth === "login" ? "Didn't Have an account" : "Already Have an account"}
            <span className='switch-link' onClick={() => setauth(auth === "login" ? "signup" : "login")}>
              {auth === "login" ? "SignUp" : "Login"}
            </span>
          </p>
        </div>
        <div></div>
      </>
    );
  };

  const [currentSlide, setcurrentSlide] = useState(1)

  useEffect(() => {
    const slideBtnRight = document.querySelector('.slideBtnRight')
    const handleSlideChange = () => {
      setcurrentSlide(prev => prev + 1);
      document.querySelector(`#sl${currentSlide}`).style.zIndex = 10;
    }

    slideBtnRight.addEventListener("click", handleSlideChange);
  })

  return (
    <div className='authParent'>
      <div className='auth-container'>
        <img src={bgImg} alt="" className='bg-img' />
        <div className='logo-container'>
          <div className='logo'>FixMate</div>
        </div>

        <div className='featured'>
          <div id='sl1' className='slide'>
            <img src={bgImg} alt="" className='slide-img' />
            <h1 className='slide-title'>Work pending! Do Refresh </h1>
            <p className='slide-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Soluta, magni quidem quaerat fuga repellat voluptatibus. Culpa aspernatur fugiat quo nesciunt amet facere autem quas sed.
              Autem, velit odio? Impedit, nemo.
            </p>
          </div>
          <div id='sl2' className='slide'>
            <img src={bgImg} alt="" className='slide-img' />
            <h1 className='slide-title'>Welcome </h1>
            <p className='slide-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div id='sl3' className='slide'>
            <img src={bgImg} alt="" className='slide-img' />
            <h1 className='slide-title'>Welcome </h1>
            <p className='slide-text'>
              An <span className='ai-assistant'>AI-powered Assistant</span> integrated with the Gemini API, built to help you fix coding issues faster. Organize your chats, resolve syntax errors, and enhance your coding workflow with personalized assistance. <br /><br /> <span>Log in to get started!</span>
            </p>
          </div>
          <button className='slide-btn slideBtnLeft'>
            <i className="fa-solid fa-arrow-left arrow-icon"></i>
          </button>
          <button className='slide-btn slideBtnRight'>
            <i className="fa-solid fa-arrow-right arrow-icon"></i>
          </button>
        </div>
        <Login />
      </div>
    </div>
  );
}
