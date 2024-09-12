import { useEffect, useState } from 'react'
import Chats from './Chats'
import img from './assets/img/artificial-intelligence.png'
import img2 from './assets/img/Screenshot from 2024-09-09 14-52-46.png'
import backBtnImg from './assets/img/undo.png'
import imgHistory from './assets/img/chat(1).png'
import imgCatg from './assets/img/menu.png'
import imgArchive from './assets/img/archive.png'
import sunImg from './assets/img/sun.png'
import sunImgLight from './assets/img/sunLight.png'
import './App.css'

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState("Menu");
  const [toggle, setToggle] = useState(true)

  useEffect(()=>{
    const currentMenu = document.querySelector('.currentMenu')
    const back = document.querySelector('.sidebar>img')
    if(menu==="Menu"){
      back.style.display = "none"
      currentMenu.style.width = "80%"
      currentMenu.style.marginLeft = "-2%"
    }
    else{
      back.style.display = "block"
      currentMenu.style.width = "70%"
      currentMenu.style.marginLeft = "3vw"
    }
  },[menu])

  
  return (
    <>
                              {/* Header */}
      <div className='glassEffectHeader'></div>
      <header className={`header ${dark ? "" : "lightMode"}`}>
        <div className='navLeft'>
          <img src={img} alt="icon" className='icon'/>
          <img src={img2} alt="title" className='title'/>
        </div>

        <div className='navRight'>
          <div className='theme'>
            <img src={dark ? sunImg : sunImgLight} alt="" className='sun' onClick={()=>setDark(!dark)}/>
          </div>
          <div className='profile'></div>
        </div>
      </header>

                              {/* Sidebar */}
      <section className={`sidebar ${dark ? '' : "lightMode"} ${toggle ? "" : "sidebarOff"}`}>
        <img src={backBtnImg} alt="" className='backBtn' onClick={()=>setMenu("Menu")}/>
        <div className={`currentMenu ${dark ? "" : "lightMode"}`}> {menu} </div>

      {
<>    
        <div className='glassEffect'></div>
{menu==="Menu" ?
        <div className='menuTabs'>
            <div className='menus' onClick={() => setMenu("Chat History")}> <img src={imgHistory} alt="" className='icons'/> <span> Chat History </span> </div>
            <div className='menus' onClick={() => setMenu("Categories")}> <img src={imgCatg} alt="" className='icons'/> <span> Chat Categories </span> </div>
            <div className='menus' onClick={() => setMenu("Archives")}> <img src={imgArchive} alt="" className='icons'/> <span> Archives </span></div>
        </div>
:
        <Chats prop={menu}/>
}
</>
        }

      <button className={`sidebarToggle ${toggle ? "" : "sidebarToggleOff"}`} onClick={()=>setToggle(!toggle)}><div className={`toggleBtn ${toggle ? "" : "toggleOff"}`}></div></button>
      </section>

      <section className={`miniSidebar ${toggle ? "" : "miniSidebarCome"}`}>
      <div className='miniMenuTabs'>
            <img title='Chat History' onClick={() => {setMenu("Chat History"); setToggle(true)}} src={imgHistory} className='miniIcons'/>
            <img title='Chat Categories' onClick={() => {setMenu("Categories"); setToggle(true)}} src={imgCatg} className='miniIcons'/>
            <img title='Archives' onClick={() => {setMenu("Archives"); setToggle(true)}} src={imgArchive} className='miniIcons'/>
        </div>
      </section>
                                
                              {/* Main */}
      <main className={`${dark ? "" : "lightMode"}`}>
        {/* <input type="text" className='mainInput' placeholder='Type your query here....'/> */}
        <textarea name="" id="" className={`mainInput ${toggle ? "" : "mainInputTrans"}`} placeholder='Type your query here....'></textarea>
      </main>

                              {/* Footer*/}
      <footer></footer>
    </>
  )
}

export default App
