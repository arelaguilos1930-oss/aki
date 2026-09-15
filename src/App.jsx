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
  const [language, setlanguage] = useState("");
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
      {content}
      <select value={language} onChange={(e) => setlanguage(e.target.value)}>
        <option value="" hidden disabled>Choose </option>
        <option value="english">English</option>
        <option value="tagalog">Filipino</option>
      </select>

      <button onClick={() => navigate("/happy")}>Are you Happy?</button>
      <button onClick={() => navigate("/sad")}>U Sad?</button>
      <button onClick={() => navigate("/angry")}>Open when u Angry</button>
      <button onClick={() => navigate("/miss")}>Open When you miss me</button>
    </>
  )
}

export default App
