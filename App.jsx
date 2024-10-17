import { useEffect, useState, useRef } from 'react'
import Chats from './components/Chats'
import Loader from './Loader'
import './App.css'
import './AppMobile.css'
import './CodeSnippets.css'
import { icons, themes } from './Data'
// importing runSemanticSearch function from fetchGeminiContent.js 
import runSemanticSearch from "../api/fetchGeminiContent";

function App() {
  // All States initialized

  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState("Menu");
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 780) {
      setToggle(false)
    }
    else {
      setToggle(true)
    }
  }, [])
  const [currentWallpaper, setCurrentWallpaper] = useState(themes.theme1);
  const theme = useRef("")
  const [sidColor, setSidColor] = useState(true);
  const [miniIcons, setMiniIcons] = useState([true, true, true]);
  const [input, setInput] = useState("");
  const [isCursorBg, setIsCursorBg] = useState(false)
  const cursorRef = useRef("");
  const cursorRefChat = useRef("");

  // state for form submission
  let [text, setText] = useState('');

  // state for gemini response
  let [geminiResponse, setGeminiResponse] = useState({}); 

  // Toggle mechanism for Back button in sidebar menu.
  // by default, back button is not visible but when someone click
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
        // if (e.target.className == "theme3") {
        // setSidColor(false)
        // }
        // else {
        // }
        setSidColor(true)
        setDark(true)
        setCurrentWallpaper(e.target.src);
        theme.current.style.display = "block"
        setIsCursorBg(false)
      })
    })

  }, [])

  const customWall = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setCurrentWallpaper(fileReader.result);
    }

    fileReader.readAsDataURL(file);

    setDark(true)
    theme.current.style.display = "block"
    setSidColor(true)
  }

  useEffect(() => {

    const handleMouseMove = (e) => {
      cursorRef.current.style.marginLeft = e.clientX + "px"
      cursorRef.current.style.marginTop = e.clientY + "px"
      if (toggle) {
        cursorRefChat.current.style.marginLeft = e.clientX - 300 + "px"
        cursorRefChat.current.style.marginTop = e.clientY + 30 + "px"
      }
      else {
        cursorRefChat.current.style.marginLeft = e.clientX - 180 + "px"
        cursorRefChat.current.style.marginTop = e.clientY + 30 + "px"
      }
    }

    if(cursorRef){
      // Mouse Follower //
      window.addEventListener('mousemove', handleMouseMove)
  }

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
    
  })


  // Code Copy //
  useEffect(() => {
    const copyButton = document.querySelector('.copy-button');

    copyButton.addEventListener('submit', () => {
      const codeText = document.querySelector('.code').textContent;
      navigator.clipboard.writeText(codeText);

      // Provide visual feedback that the task is completed
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 700);
    });
  })

  
  // Handling form submission and fetching content from fetchGeminiContent
  async function handleSubmit(event) {
    event.preventDefault();
  
    const queryText = document.getElementById('queryBox').value;
    setText(queryText);
    // assigning textarea value value to text
    text = queryText;
    console.log(text);
  
    const response = await runSemanticSearch(text);
    setGeminiResponse(response);
    // assigning gemini response to geminiResponse 
      geminiResponse = response;
      console.log(geminiResponse);
  }


  let timeout;
  return (
    <>
      <Loader />

      {/* Header / Navbar */}

      <header className={`header ${dark ? "" : "lightMode"}`}>
        <div className='navLeft'>
          <img src={icons.logo} alt="title" className={`title ${toggle ? "" : "mainInputTrans"}`} />
        </div>

        <div className='navRight'>
          <div className='theme'>

            <img src={dark ? themes.sunImg : themes.sunImgLight} alt="" className='sun' />

            <div className='themeMenu'>
              <div className='themeModes'>
                <div onClick={() => { setDark(true); setSidColor(true); setCurrentWallpaper("none"); theme.current.style.display = "none"; setIsCursorBg(true) }}>Dark</div>
                <div onClick={() => { setDark(false); setSidColor(false); setCurrentWallpaper("none"); setIsCursorBg(true) }}>Light</div>
                <div onClick={() => { setDark(true); setSidColor(true); setCurrentWallpaper(themes.theme1); theme.current.style.display = "block"; setIsCursorBg(false) }}>Reset</div>
              </div>
              <div className='wallpapers'>
                <img src={themes.theme1} alt="" className='theme1' />
                <img src={themes.theme2} alt="" className='theme2' />
                <img src={themes.theme3} alt="" className='theme3' />
              </div>

              <div className='customBg'>
                <h3>Custom Background: </h3>
                <label htmlFor="customUpload" className='customBgLabel'> Upload </label>
                <input type='file' accept='image/*' id='customUpload' onChange={customWall} />
              </div>
            </div>

          </div>
          <div className='profile'>
            <img src={icons.profileImg} alt="" className='profileImg' />
          </div>
        </div>
      </header>

      {/* Sidebar */}

      <section className={`sidebarWrap ${toggle ? "" : "sidebarOff"}`}>

        <section className={`sidebar ${dark ? '' : "lightMode"}`} onMouseMove={() => { isCursorBg ? cursorRef.current.style.display = "block" : cursorRef.current.style.display = "none" }}>

          <img src={icons.backBtnImg} alt="" className='backBtn' onClick={() => setMenu("Menu")} />
          <div className={`currentMenu ${dark ? "" : "lightMode"} ${sidColor ? "" : "lightMode"}`}> {menu} </div>

          {
            <>
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
        </section>
        <div className='cursorBg' ref={cursorRef}></div>
      </section>
      <button className={`sidebarToggle ${toggle ? "" : "sidebarToggleOff"}`} onClick={() => setToggle(!toggle)}><div className={`toggleBtn ${toggle ? "" : "toggleOff"}`}></div></button>


      {/* Main */}

      <main className={`${dark ? "" : "lightMode"}`}>
        <img src={currentWallpaper} alt="" className="appliedWallpaper" ref={theme} />

        <div className={`chatAreaWrap ${toggle ? "" : "mainInputTrans"}`}>

          <div className={`chatArea`} onMouseMove={() => {
            clearTimeout(timeout); isCursorBg ? cursorRefChat.current.style.display = "block" : cursorRefChat.current.style.display = "none"; timeout = setTimeout(() => {
              cursorRefChat.current.style.display = "none"
            }, 2500);
          }}>


            <div className='question_in_chat'>
              <img src="" alt="" />
              { /* Error Pasted */}
              <p>{text}</p>
            </div>

            <div className='answer_in_chat'>
              <img src="" alt="" />
              { /* Error Title */}
              <h1 className='title'>{geminiResponse.title}</h1>
              <br /><br /><hr /><br />
              { /* Error Type */}
              <h3 className='type'> Error Type: {geminiResponse.type}</h3>
              <br /><br /><hr /><br />
              { /* Problem Definition Block */}
              <p className='problemDefinition'>{geminiResponse.problemDefinition}</p>
              <br /><br /><hr /><br />
              { /* Problem Causes Block */}
              <p className='problemCauses'>{geminiResponse.problemCauses}</p>
              <br /><br /><hr /><br />
              { /* Problem Solution Block */}
              <p className='problemSolution' >{geminiResponse.problemSolution}</p>
              <br /><br /><br />
              { /* Code Snippet Block */}
              <pre className='codeSnippets'>
                <code className='code' >{geminiResponse.codeSnippets}</code>
                <button className="copy-button" >Copy</button>
              </pre>
              <br /><br /><hr /><br />
              { /* Embedded Links Block */}
              {/* <a className='embeddedLink' href={geminiResponse.embeddedLinks[0]} target='_newtab' >{geminiResponse.embeddedLinks[0]}</a>
              <a className='embeddedLink' href={geminiResponse.embeddedLinks[1]} target='_newtab' >{geminiResponse.embeddedLinks[1]}</a> */}
              <br /><br /><hr /><br />
            </div>

          </div>
          <div className='cursorBgChat' ref={cursorRefChat}></div>
        </div>
        { /* Query Box */}
        {/* <textarea name="" id="queryBox" onChange={(e) => setInput(e.target.value)} className={`mainInput ${toggle ? "" : "mainInputTrans"} ${input === "" ? "" : "inputFocused"}`} placeholder='Type your query here....'></textarea> */}
        <div>
          <form onSubmit={handleSubmit} className='queryForm' >
            <textarea name="" id="queryBox" onChange={(e) => setInput(e.target.value) && setText(e.target.value)} className={`mainInput ${toggle ? "" : "mainInputTrans"} ${input === "" ? "" : "inputFocused"}`} rows="3" placeholder='Type your query here....'></textarea>
            <input type="submit" id='' value="send" onChange={(e) => setInput(e.target.value)} className={`querySubmit ${toggle ? "" : "mainInputTrans"}`} />
          </form>

        </div>


      </main>

      {/* Footer*/}
      {/* <footer></footer> */}
    </>
  )
}

export default App
