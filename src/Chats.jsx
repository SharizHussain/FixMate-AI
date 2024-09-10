import React, { useState } from 'react'
import './App.css'

export default function Chats({ prop }) {
  const [dummyHistory, setDummyHistory] = useState([
    { title: "Hello Moto", description: "hakjfkjaskjfkjaskdfj" },
    { title: "Who is Dr. Doom", description: 'ailsdjflkjasdklfj' },
    { title: "Tell me about Js", description: "ladkjfljaslfjlask" },
    { title: "Who is known as Bhaijaan", description: 'ailsdjflkjasdklfj' }
  ]);

  const [dummyCatgs, setDummyCatgs] = useState([{ img: "", title: "College" },{ img: "", title: "Cooking" },{ img: "", title: "Movie" }, { img: "", title: "Web" }])
  return (
    <>
      {
        prop === "Chat History" ?

          dummyHistory.map((e, index) => (
            <div key={index} className='chatTitles'>{e.title}</div>
          ))
          :
          <div className='catgs'>
            {
              dummyCatgs.map((e, index) => (
                <div key={index} className='chatCatgs'>
                  <img src="" alt="" className='catgsImg'/>
                  <div className='catgsTitle'>{e.title}</div>
                </div>
              ))
            }
          </div>
      }
    </>
  );
}
