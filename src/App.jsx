import { useEffect, useState } from 'react'
import Chats from './Chats'
import img from './assets/img/artificial-intelligence.png'
import img2 from './assets/img/Screenshot from 2024-09-09 14-52-46.png'
import backBtnImg from './assets/img/undo.png'
import imgHistory from './assets/img/chat(1).svg'
import imgCatg from './assets/img/menu.svg'
import imgArchive from './assets/img/archive.svg'

import imgHistoryBlack from './assets/img/chat_black.svg'
import imgCatgBlack from './assets/img/menu_black.svg'
import imgArchiveBlack from './assets/img/archive_black.svg'

import sunImg from './assets/img/sun.png'
import sunImgLight from './assets/img/sunLight.png'
import theme1 from './assets/img/1000_F_602015518_x8XPfvJVTAyBasPwNigCmJNDBesSxqwB-transformed.jpeg'
import theme2 from './assets/img/photo-1557626204-59dd03fd2d31.jpeg'
import theme3 from './assets/img/pexels-pripicart-620337.jpg'
import './App.css'

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState("Menu");
  const [toggle, setToggle] = useState(true);
  const [currentWallpaper, setCurrentWallpaper] = useState("none");
  const [sidColor, setSidColor] = useState(true);
  const [miniIcons, setMiniIcons] = useState([true, true, true]);

  useEffect(() => {
    const currentMenu = document.querySelector('.currentMenu')
    const back = document.querySelector('.sidebar>img')
    if (menu === "Menu") {
      back.style.display = "none"
      currentMenu.style.width = "80%"
      currentMenu.style.marginLeft = "-2%"
    }
    else {
      back.style.display = "block"
      currentMenu.style.width = "70%"
      currentMenu.style.marginLeft = "3vw"
    }
  }, [menu])

  useEffect(() => {
    const clickedWallpaper = document.querySelectorAll('.wallpapers img')

    clickedWallpaper.forEach((img) => {
      img.addEventListener('click', (e) => {
        if (e.target.className == "theme3") {
          setSidColor(false)
        }
        else {
          setSidColor(true)
        }
        setDark(true)
        setCurrentWallpaper(e.target.src);
      })
    })

  }, [])


  return (
    <>
      {/* Header */}
      <div className='glassEffectHeader'></div>
      <header className={`header ${dark ? "" : "lightMode"}`}>
        <div className='navLeft'>
          <img src={img} alt="icon" className='icon' />
          <img src={img2} alt="title" className='title' />
        </div>

        <div className='navRight'>
          <div className='theme'>

            <img src={dark ? sunImg : sunImgLight} alt="" className='sun' />

            <div className='themeMenu'>
              <div className='themeModes'>
                <div onClick={() => { setDark(true); setSidColor(true); setCurrentWallpaper("none") }}>Dark</div>
                <div onClick={() => { setDark(false); setSidColor(false); setCurrentWallpaper("none") }}>Light</div>
                <div onClick={() => { setDark(true); setSidColor(true); setCurrentWallpaper("none") }}>Reset</div>
              </div>
              <div className='wallpapers'>
                <img src={theme1} alt="" className='theme1' />
                <img src={theme2} alt="" className='theme2' />
                <img src={theme3} alt="" className='theme3' />
              </div>
            </div>

          </div>
          <div className='profile'></div>
        </div>
      </header>

      {/* Sidebar */}
      <section className={`sidebar ${dark ? '' : "lightMode"} ${toggle ? "" : "sidebarOff"}`}>
        <img src={backBtnImg} alt="" className='backBtn' onClick={() => setMenu("Menu")} />
        <div className={`currentMenu ${dark ? "" : "lightMode"} ${sidColor ? "" : "lightMode"}`}> {menu} </div>

        {
          <>
            <div className='glassEffect'></div>
            {menu === "Menu" ?
              <div className={`menuTabs ${sidColor ? "" : "lightMode"}`}>
                <div className='menus' onClick={() => setMenu("Chat History")}> <img src={imgHistory} alt="" className='icons' /> <span> Chat History </span> </div>
                <div className='menus' onClick={() => setMenu("Categories")}> <img src={imgCatg} alt="" className='icons' /> <span> Chat Categories </span> </div>
                <div className='menus' onClick={() => setMenu("Archives")}> <img src={imgArchive} alt="" className='icons' /> <span> Archives </span></div>
              </div>
              :
              <Chats prop={menu} />
            }
          </>
        }

        <button className={`sidebarToggle ${toggle ? "" : "sidebarToggleOff"}`} onClick={() => setToggle(!toggle)}><div className={`toggleBtn ${toggle ? "" : "toggleOff"}`}></div></button>
      </section>

      <section className={`miniSidebar ${toggle ? "" : "miniSidebarCome"} ${dark ? "" : "lightMode"}`}>
        <div className='miniMenuTabs'>
          <img
            title="Chat History"
            onClick={() => {
              setMenu("Chat History");
              setToggle(true);
            }}
            onMouseEnter={() => {
              const newIcons = [...miniIcons];
              newIcons[0] = false;  
              setMiniIcons(newIcons);  
            }}
            onMouseLeave={() => {
              const newIcons = [...miniIcons];
              newIcons[0] = true;
              setMiniIcons(newIcons);
            }}
            src={miniIcons[0] ? imgHistory : imgHistoryBlack}
            className="miniIcons"
          />

          <img
            title="Chat Categories"
            onClick={() => {
              setMenu("Categories");
              setToggle(true);
            }}
            onMouseEnter={() => {
              const newIcons = [...miniIcons];
              newIcons[1] = false;
              setMiniIcons(newIcons);
            }}
            onMouseLeave={() => {
              const newIcons = [...miniIcons];
              newIcons[1] = true;
              setMiniIcons(newIcons);
            }}
            src={miniIcons[1] ? imgCatg : imgCatgBlack}
            className="miniIcons"
          />

          <img
            title="Archives"
            onClick={() => {
              setMenu("Archives");
              setToggle(true);
            }}
            onMouseEnter={() => {
              const newIcons = [...miniIcons];
              newIcons[2] = false;
              setMiniIcons(newIcons);
            }}
            onMouseLeave={() => {
              const newIcons = [...miniIcons];
              newIcons[2] = true;
              setMiniIcons(newIcons);
            }}
            src={miniIcons[2] ? imgArchive : imgArchiveBlack}
            className="miniIcons"
          />
        </div>
      </section>

      {/* Main */}
      <main className={`${dark ? "" : "lightMode"}`}>
        <img src={currentWallpaper} alt="" className="appliedWallpaper" />
        {/* <input type="text" className='mainInput' placeholder='Type your query here....'/> */}
        <textarea name="" id="" className={`mainInput ${toggle ? "" : "mainInputTrans"}`} placeholder='Type your query here....'></textarea>
      </main>

      {/* Footer*/}
      <footer></footer>
    </>
  )
}

export default App
