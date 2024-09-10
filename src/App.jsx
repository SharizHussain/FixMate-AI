import { useEffect, useState } from 'react'
import Chats from './Chats'
import img from './assets/img/artificial-intelligence.png'
import img2 from './assets/img/Screenshot from 2024-09-09 14-52-46.png'
import backBtnImg from './assets/img/undo.png'
import imgHistory from './assets/img/chat(1).png'
import imgCatg from './assets/img/menu.png'
import imgArchive from './assets/img/archive.png'
import './App.css'

function App() {
  const [menu, setMenu] = useState("Menu")

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

  const menuFun = (e) =>{
      setMenu(e)
  }

  useEffect(() => {

    const backBtn = document.querySelector(".backBtn");
    backBtn.addEventListener('click',()=>{
      setMenu("Menu")
    })

  }, [])

  return (
    <>
                              {/* Header */}
      <header className='header'>
        <div className='navLeft'>
          <img src={img} alt="icon" className='icon'/>
          <img src={img2} alt="title" className='title'/>
        </div>

        <div className='navRight'>
          <div className='theme'></div>
          <div className='profile'></div>
        </div>
      </header>

                              {/* Sidebar */}
      <section className='sidebar'>
        <img src={backBtnImg} alt="" className='backBtn'/>
        <div className='currentMenu'> {menu} </div>

      {
<>    
{menu==="Menu" ?
        <div className='menuTabs'>
            <div onClick={() => menuFun("Chat History")}> <img src={imgHistory} alt="" className='icons'/> <span> Chat History </span> </div>
            <div onClick={() => menuFun("Categories")}> <img src={imgCatg} alt="" className='icons'/> <span> Chat Categories </span> </div>
            <div onClick={() => menuFun("Archives")}> <img src={imgArchive} alt="" className='icons'/> <span> Archives </span></div>
        </div>
:
        <Chats prop={menu}/>
}
</>
        }
      </section>
                                
                              {/* Main */}
      <main>
        {/* <input type="text" className='mainInput' placeholder='Type your query here....'/> */}
        <textarea name="" id="" className='mainInput' placeholder='Type your query here....'></textarea>
      </main>

                              {/* Footer*/}
      <footer></footer>
    </>
  )
}

export default App
