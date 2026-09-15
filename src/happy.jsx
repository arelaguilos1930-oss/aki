
import { useNavigate } from "react-router-dom";
function Happy(){
 const navigate = useNavigate();
    return(
        <>
         <h2>HAPpyyy</h2>
         <button onClick={() => navigate("/")}>Okay thanks where is back?</button>
        </>
       
    )
}
export default Happy