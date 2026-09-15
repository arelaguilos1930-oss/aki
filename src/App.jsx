import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import English from './english'
import Tagalog from './tagalog'
import Happy from './happy'

import { useNavigate } from "react-router-dom";


function App() {
  const [language, setlanguage] = useState("english");
    const navigate = useNavigate();
  let content;
  if(language==="english"){
    content=<English></English>
  }else if(language==="tagalog"){
    content=<Tagalog></Tagalog>
  }
  

  return (
    <>
      <h2>Hi Aki</h2>
       <select value={language} onChange={(e) => setlanguage(e.target.value)}>
        <option value="" hidden disabled>Choose </option>
        <option value="english">English</option>
        <option value="tagalog">Filipino</option>
      </select>
      <div className="main-content">
        {content}
      </div>
      
     

       <div className="button">
        <button className="btn-happy" onClick={() => navigate("/happy")}>Are you Happy?</button>
        <button className="btn-sad" onClick={() => navigate("/sad")}>U Sad?</button>
        <button className="btn-angry" onClick={() => navigate("/angry")}>Open when u Angry</button>
        <button className="btn-miss" onClick={() => navigate("/miss")}>Open When you miss me</button>
      </div>

    </>
  )
}

export default App
