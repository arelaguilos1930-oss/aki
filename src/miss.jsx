
import { useNavigate } from "react-router-dom";
function Miss(){
 const navigate = useNavigate();
    return(
        <>
         <h2>Love you</h2>
         <button onClick={() => navigate("/")}>Okay thanks where is back?</button>
        </>
       
    )
}
export default Miss