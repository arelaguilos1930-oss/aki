
import { useNavigate } from "react-router-dom";
import me from "./assets/I'mHere.jpg";
import MusicPlayer from "./MusicPlayer.jsx";
function Miss(){
 const navigate = useNavigate();
    return(
        <>
         <h2>I'm here, don't worry.. </h2>
         <img src={me} alt="" />
         <div className="buttonn">
                <button onClick={() => navigate("/")}>Go back</button>
         </div>
         <MusicPlayer></MusicPlayer>
         
        </>
       
    )
}
export default Miss