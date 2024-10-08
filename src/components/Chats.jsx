import React, { useState } from 'react'
import '../App.css'

export default function Chats({ prop }) {

  const [dummyHistory, setDummyHistory] = useState([
    { title: "Hello Moto", quetions: [], answers: [], },
    { title: "Who is Dr. Doom", quetions: [], answers: [], },
    { title: "Tell me about Js", quetions: [], answers: [], },
    { title: "Who is known as Bhaijaan", quetions: [], answers: [], },
    { title: "Hello Moto", quetions: [], answers: [], },
    { title: "Who is Dr. Doom", quetions: [], answers: [], },
    { title: "Tell me about Js", quetions: [], answers: [], },
    { title: "Who is known as Bhaijaan dsfasdfasdfds", quetions: [], answers: [], },
    { title: "Hello Moto", quetions: [], answers: [], },
    { title: "Who is Dr. Doom", quetions: [], answers: [], },
    { title: "Tell me about Js", quetions: [], answers: [], },
    { title: "Who is known as Bhaijaan", quetions: [], answers: [], }
  ]);

  const [dummyCatgs, setDummyCatgs] = useState([
    { img: "", title: "College", chatTitles: ["Library info", "C++ assigments", "Multimedia tools"], },
    { img: "", title: "Cooking", chatTitles: ["Chicken Tikka Recipe", "Shake", "Pizza Recipe"], },
    { img: "", title: "Movie", chatTitles: ["Sikander", "Avengers", "Kick"], },
    { img: "", title: "Web", chatTitles: ["Js Topics", "Baas", "Mongodb"], }
  ])

  const [activeCatgs, setActiveCatgs] = useState(null)
  function ActiveCategory(index) {
    setActiveCatgs(index)
  }

  // function deleteBtnFun(i){
  //   // e.chatTitles[i].style.display = "block"
  // }

  return (
    <>
      {
        prop === "Chat History" ?

          <div className='chatHistory'>
            {
              dummyHistory.map((e, i) => (
                <div key={i} className='chatTitles'>
                  <span>
                    {e.title}
                  </span>
                  <span className='chatOptions' onMouseEnter={()=>{
    document.querySelector(`#deleteBtn${i}`).style.display = "inline" }} onMouseLeave={()=>{document.querySelector(`#deleteBtn${i}`).style.display = "none" }}>... <span id={`deleteBtn${i}`} className='deleteChatFocused'>Delete</span></span>
                </div>
              ))
            }
          </div>
          :
          prop === "Archives" ? 
          <div className='chatHistory'>
          {
            dummyHistory.map((e, i) => (
                i<4 ?
              <div key={i} className='chatTitles'>
                <span>
                  {e.title}
                </span>
                <span className='chatOptions' onMouseEnter={()=>{
  document.querySelector(`#deleteBtn${i}`).style.display = "inline" }} onMouseLeave={()=>{document.querySelector(`#deleteBtn${i}`).style.display = "none" }}>... <span id={`deleteBtn${i}`} className='deleteChatFocused'>Delete</span></span>
              </div>
              :
              ""
            ))
          }
        </div>
          :
          activeCatgs !== null ?
            <div className='chatHistory'>
              {
                dummyCatgs[activeCatgs].chatTitles.map((title, i) => (
                  <div key={i} className='chatTitles'>
                    <span>
                      {title}
                    </span>
                    <span className='chatOptions' onMouseEnter={()=>{
    document.querySelector(`#deleteBtn${i}`).style.display = "inline" }} onMouseLeave={()=>{document.querySelector(`#deleteBtn${i}`).style.display = "none" }}>... <span id={`deleteBtn${i}`} className='deleteChatFocused'>Delete</span></span>
                  </div>
                ))
              }
            </div>
            :
            <div className='catgs'>
              {
                dummyCatgs.map((e, index) => (
                  <div key={index} className='chatCatgs' onClick={() => { ActiveCategory(index) }}>
                    <img src=" " alt="" className='catgsImg' />
                    <div className='catgsTitle'>{e.title}</div>
                  </div>
                ))
              }
            </div>
      }



    </>
  );
}
