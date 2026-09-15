import { useNavigate } from "react-router-dom";
function Angry(){
     const navigate = useNavigate();
    return(
        <>
        <h2>DOn't be mad na</h2>
        <button onClick={() => navigate("/")}>Okay thanks where is back?</button>
        </>
    )
}
export default Angry