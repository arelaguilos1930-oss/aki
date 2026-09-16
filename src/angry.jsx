import { useNavigate } from "react-router-dom";
function Angry(){
     const navigate = useNavigate();
    return(
        <>
        <h2>.....</h2>
        <h3>Please no angry na po coz i is Scared</h3>
        <button onClick={() => navigate("/")}>Go back</button>
        </>
    )
}
export default Angry