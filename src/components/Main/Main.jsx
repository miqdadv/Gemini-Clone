import React, { useContext, useRef } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  const greetRef = useRef(null);

  const handleMouseMove = (e) => {
    const span = greetRef.current;
    const { left, width } = span.getBoundingClientRect();
    const xPos = (e.clientX - left) / width; // Calculate cursor position as a percentage
    span.style.backgroundPosition = `${xPos * 100}% 50%`; // Update background position
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>

      <div className="main-container">
        {!showResult
        ?<>
         <div className="greet">
          <p>
            <span ref={greetRef} onMouseMove={handleMouseMove}>
              Hello, Dev.
            </span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Bike ride</p>
            <img src={assets.compass_icon} />
          </div>

          <div className="card">
            <p>Bike ride</p>
            <img src={assets.bulb_icon} />
          </div>

          <div className="card">
            <p>Bike ride</p>
            <img src={assets.message_icon} />
          </div>

          <div className="card">
            <p>Bike ride</p>
            <img src={assets.code_icon} />
          </div>
        </div>
        </>
        :<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon}/>
            {loading
            ?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            
          </div>
        </div>
        }
        

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
             {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
