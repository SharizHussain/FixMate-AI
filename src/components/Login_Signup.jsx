// import React, { useState } from 'react'
// import bgImg from '../assets/img/dark-theme-background-8xlni5mkdutatc7r.jpg'
// import './Login_Signup.css'

// export default function Login_Signup() {

//   const [auth, setauth] = useState("login")

//   const Login = () => {
//     return (
//       <>
//         <div className='absolute border backdrop-blur-3xl flex justify-center pt-5 rounded-2xl w-[25vw] h-[35vw] right-[9vw] top-[10vw]'>
//             <i class="fa-regular fa-user text-[5vw] text-white"></i>
//             <h1 className='absolute text-[2vw] text-white mt-[6vw]'>{auth === "login" ? "Login" : "SignUp"}</h1>
//             <input type="text"  className='absolute mt-[10vw] w-[18vw]  h-[3vw] p-[0.5vw] rounded-2xl'  placeholder='Email'/>
//             <input type="text"  className='absolute mt-[14vw] w-[18vw] h-[3vw] p-[0.5vw] rounded-2xl' placeholder='Password'/>

//         <p className='absolute text-white mt-[18vw] left-[2vw]'>{auth === "login" ? "Didn't Have an account" : "Already Have an account"} <span className='ms-2 text-blue-500 underline cursor-pointer' onClick={()=>setauth(auth==="login"?"signup":"login")}>{auth==="login"?"SignUp":"Login"}</span> </p>
//         </div>
//         <div></div>
//       </>
//     )
//   }

//   const SignUp = () => {
//     return (
//       <>
//         <div className=''>safsadfsdf</div>
//       </>
//     )
//   }



//   return (
//     <>
//       <div className='relative auth'>
//         <img src={bgImg} alt="" className='bgImg absolute -z-10 h-[100vh] w-[100vw] object-cover' />
//         <div className='absolute w-[100vw] flex justify-center text-center mt-5'>
          // <div className='logo absolute text-7xl'>FixMate</div>
//         </div>

//         <div className='featured absolute p-5 h-[38vw] w-[58vw] overflow-hidden mt-[8.5vw] ms-12 rounded-2xl'>
//           <div id='sl1' className='absolute left-2 top-[1%] h-[98%] w-[54vw] object-cover rounded-2xl'>
//             <img src={bgImg} alt="" className='absolute h-[100%] w-[100%] rounded-2xl border-[4px]' />
//             <h1 className=' text-5xl mt-[3vw] ml-[3vw] text-white uppercase'>Welcome </h1>
//             <p className='text-white w-[30vw] mt-[2vw] ml-[5vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, magni quidem quaerat fuga repellat voluptatibus. Culpa aspernatur fugiat quo nesciunt amet facere autem quas sed. Autem, velit odio? Impedit, nemo.</p>
//           </div>
//           <div id='sl2' className='absolute left-7 top-[1%] h-[98%] w-[54vw] object-cover rounded-2xl'>
//             <img src={bgImg} alt="" className='absolute h-[100%] w-[100%] rounded-2xl border-[4px]' />
//             <h1 className=' text-5xl mt-[3vw] ml-[3vw] text-white uppercase'>Welcome </h1>
//             <p className='text-white w-[30vw] mt-[2vw] ml-[5vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, magni quidem quaerat fuga repellat voluptatibus. Culpa aspernatur fugiat quo nesciunt amet facere autem quas sed. Autem, velit odio? Impedit, nemo.</p>
//           </div>
//           <div id='sl3' className='absolute left-12 top-[1%] h-[98%] w-[54vw] object-cover rounded-2xl'>
//             <img src={bgImg} alt="" className='absolute h-[100%] w-[100%] rounded-2xl border-[4px]' />
//             <h1 className=' text-5xl mt-[3vw] ml-[3vw] text-white uppercase'>Welcome </h1>
//             <p className='text-white w-[30vw] mt-[2vw] ml-[5vw]'>An <span className='uppercase bg-gray-400 text-black px-1 rounded-md py-1'>AI-powered Assistant</span> integrated with the Gemini API, built to help you fix coding issues faster. Organize your chats, resolve syntax errors, and enhance your coding workflow with personalized assistance. Log in to get started!</p>
//           </div>
//           <button className='slideBtnLeft absolute bg-slate-200 w-[5vw] h-[5vw] ml-[65%] mt-[30%]'><i class="fa-solid fa-arrow-left text-purple-600"></i></button>
//           <button className='slideBtnRight absolute bg-slate-200 w-[5vw] h-[5vw] ml-[74%] mt-[30%]'><i class="fa-solid fa-arrow-right text-purple-600"></i></button>
//         </div>
//             <Login />
//       </div>
//     </>
//   )
// }


import React, { useEffect, useState } from 'react';
import bgImg from '../assets/img/dark-theme-background-8xlni5mkdutatc7r.jpg';
import './Login_Signup.css';

export default function Login_Signup() {
  const [auth, setauth] = useState("login");

  const Login = () => {
    return (
      <>
        <div className='login-container'>
          <i className="fa-regular fa-user user-icon"></i>
          <h1 className='auth-title'>{auth === "login" ? "Login" : "SignUp"}</h1>
          <input type="text" className='auth-input' placeholder='Email'/>
          <input type="text" className='auth-input password-input' placeholder='Password'/>
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
    const handleSlideChange =() =>{
      setcurrentSlide(prev => prev+1);  
      document.querySelector(`#sl${currentSlide}`).style.zIndex = 10;
    }

    slideBtnRight.addEventListener("click", handleSlideChange);
  })
  
  return (
    <div className='authParent'>
      <div className='auth-container'>
        <img src={bgImg} alt="" className='bg-img'/>
        <div className='logo-container'>
          <div className='logo'>FixMate</div>
        </div>

        <div className='featured'>
          <div id='sl1' className='slide'>
            <img src={bgImg} alt="" className='slide-img'/>
            <h1 className='slide-title'>Work pending! Do Refresh </h1>
            <p className='slide-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Soluta, magni quidem quaerat fuga repellat voluptatibus. Culpa aspernatur fugiat quo nesciunt amet facere autem quas sed.
              Autem, velit odio? Impedit, nemo.
            </p>
          </div>
          <div id='sl2' className='slide'>
            <img src={bgImg} alt="" className='slide-img'/>
            <h1 className='slide-title'>Welcome </h1>
            <p className='slide-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div id='sl3' className='slide'>
            <img src={bgImg} alt="" className='slide-img'/>
            <h1 className='slide-title'>Welcome </h1>
            <p className='slide-text'>
              An <span className='ai-assistant'>AI-powered Assistant</span> integrated with the Gemini API, built to help you fix coding issues faster. Organize your chats, resolve syntax errors, and enhance your coding workflow with personalized assistance. <span>Log in to get started!</span>
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
