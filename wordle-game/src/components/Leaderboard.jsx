import React from "react";
import { useNavigate, BrowserRouter} from "react-router-dom";


const Leaderboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/leaderboard");
  };
  return (
    <div>
      <p>This is leaderboard page</p>
    </div>
  );
}

export default Leaderboard;