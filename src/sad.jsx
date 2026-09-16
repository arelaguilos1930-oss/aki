import { useNavigate } from "react-router-dom";
import sad from "./assets/Mesad.jpg";
import './img.css'
function Sad(){
    const navigate = useNavigate();
    return(
        <>
        
        <h2>If u sad i also sad :(</h2>
        <h3>I am here to save da day no worries </h3>
        <img src={sad} alt="" />
        <div className="buttonn">
                <button onClick={() => navigate("/")}>Go back</button>
        </div>
        
        </>
    )
}
export default Sad