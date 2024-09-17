import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import img from './assets/img/Screenshot from 2024-09-17 00-32-05.png'
import logo from './assets/img/Screenshot from 2024-09-17 00-32-34.png'
import './App.css'

export default function LoadAni() {

  gsap.registerPlugin(useGSAP)

  const tl = gsap.timeline();

  useGSAP(()=>{
    tl.to('.loadImg',{
      rotate: 2880,
      duration: 4,
      yoyo: true,
      transformOrigin: "center",
      ease: "bounce.out"
    })
    tl.to('.loader',{
        opacity: 0,
        display: "none",
    })
  })

  return (
    <div className='loader'>
        <img src={img} alt="" className='loadImg'/>
        <img src={logo} alt=""  className='loadImgOverlay'/>
    </div>
  )
}
