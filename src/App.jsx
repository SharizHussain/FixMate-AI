import { useEffect, useState } from 'react'
import Chats from './Chats'
import './App.css'
import {icons,themes} from './Data'

function App() {
                          // All States initialized

  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState("Menu");
  const [toggle, setToggle] = useState(true);
  const [currentWallpaper, setCurrentWallpaper] = useState(" ");
  const [sidColor, setSidColor] = useState(true);
  const [miniIcons, setMiniIcons] = useState([true, true, true]);

  
                        // Toggle mechanism for Back button in sidebar menu 
                        // by default back button is not visible but when someone click
                        // on any menuTabs then back button will visible
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

                      // Theme wallpapers change mechanism

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
          <img src={icons.aiIcon} alt="icon" className='icon' />
          <img src={icons.logo} alt="title" className='title' />
        </div>

        <div className='navRight'>
          <div className='theme'>

            <img src={dark ? themes.sunImg : themes.sunImgLight} alt="" className='sun' />

            <div className='themeMenu'>
              <div className='themeModes'>
                <div onClick={() => { setDark(true); setSidColor(true); setCurrentWallpaper("none") }}>Dark</div>
                <div onClick={() => { setDark(false); setSidColor(false); setCurrentWallpaper("none") }}>Light</div>
                <div onClick={() => { setDark(true); setSidColor(true); setCurrentWallpaper("none") }}>Reset</div>
              </div>
              <div className='wallpapers'>
                <img src={themes.theme1} alt="" className='theme1' />
                <img src={themes.theme2} alt="" className='theme2' />
                <img src={themes.theme3} alt="" className='theme3' />
              </div>
            </div>

          </div>
          <div className='profile'></div>
        </div>
      </header>

                                  {/* Sidebar */}

      <section className={`sidebar ${dark ? '' : "lightMode"} ${toggle ? "" : "sidebarOff"}`}>
        <img src={icons.backBtnImg} alt="" className='backBtn' onClick={() => setMenu("Menu")} />
        <div className={`currentMenu ${dark ? "" : "lightMode"} ${sidColor ? "" : "lightMode"}`}> {menu} </div>

        {
          <>
            <div className='glassEffect'></div>
            {menu === "Menu" ?
              <div className={`menuTabs ${sidColor ? "" : "lightMode"}`}>
                <div className='menus' onClick={() => setMenu("Chat History")}> <img src={icons.imgHistory} alt="" className='icons' /> <span> Chat History </span> </div>
                <div className='menus' onClick={() => setMenu("Categories")}> <img src={icons.imgCatg} alt="" className='icons' /> <span> Chat Categories </span> </div>
                <div className='menus' onClick={() => setMenu("Archives")}> <img src={icons.imgArchive} alt="" className='icons' /> <span> Archives </span></div>
              </div>
              :
              <Chats prop={menu} />
            }
          </>
        }

        <button className={`sidebarToggle ${toggle ? "" : "sidebarToggleOff"}`} onClick={() => setToggle(!toggle)}><div className={`toggleBtn ${toggle ? "" : "toggleOff"}`}></div></button>
      </section>

                                  {/* Mini Sidebar */}

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
            src={miniIcons[0] ? icons.imgHistory : icons.imgHistoryBlack}
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
            src={miniIcons[1] ? icons.imgCatg : icons.imgCatgBlack}
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
            src={miniIcons[2] ? icons.imgArchive : icons.imgArchiveBlack}
            className="miniIcons"
          />
        </div>
      </section>

                                      {/* Main */}

      <main className={`${dark ? "" : "lightMode"}`}>
        <img src={currentWallpaper} alt="" className="appliedWallpaper" />
        <textarea name="" id="" className={`mainInput ${toggle ? "" : "mainInputTrans"}`} placeholder='Type your query here....'></textarea>
      </main>

                                    {/* Footer*/}
      {/* <footer></footer> */}
    </>
  )
}

export default App
