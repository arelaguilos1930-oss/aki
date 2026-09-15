import { useNavigate } from "react-router-dom";
function Sad(){
    const navigate = useNavigate();
    return(
        <>
        
        <h2>Why u sad</h2>
        <button onClick={() => navigate("/")}>Okay thanks where is back?</button>
        </>
    )
}
export default Sad