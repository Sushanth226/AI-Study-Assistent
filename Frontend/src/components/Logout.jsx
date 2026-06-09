import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    // Prevent the default link/button click behavior
    e.preventDefault();

    try {
      // Notice the empty {} for the body, making withCredentials the 3rd argument
      await axios.post("http://localhost:5000/auth/logout", {}, { withCredentials: true });
      
      console.log("Logout Completed");
      
      // Navigate to the home page only AFTER the backend successfully logs you out
      navigate("/");
      
    } catch (error) {
      console.error(error);
      
      const resData = error?.response?.data;
      const errorMsg = resData?.message || resData?.error || (typeof resData === 'string' ? resData : null) || error.message || "Logout failed";
      
      alert(errorMsg);
    }
  }

  return (
    <button onClick={handleLogout} className="btn btn-outline" style={{ cursor: "pointer" }}>
      Logout
    </button>
  )
}

export default Logout;