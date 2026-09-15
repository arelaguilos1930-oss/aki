

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Happy from "./happy";
import App from "./App";
import Sad from "./sad";
import Angry from "./angry";
import Miss from "./miss";

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/happy" element={<Happy />} />
        <Route path="/sad" element={<Sad />} />
        <Route path="/angry" element={<Angry />} />
        <Route path="/miss" element={<Miss/>} />
      </Routes>
  );
}
export default AppRouter