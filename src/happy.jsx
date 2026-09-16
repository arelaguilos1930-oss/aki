import happy from './assets/MeHappy.jpg';
import { useNavigate } from "react-router-dom";
import './img.css'
function Happy(){
  
 const navigate = useNavigate();
    return(
        <>
         <h2>IF Aki happy me also happy :)</h2>
         <img src={happy} alt="" />
         <div className="buttonn">
                <button onClick={() => navigate("/")}>Go back</button>
         </div>
         
        </>
       
    )
}
export default Happy