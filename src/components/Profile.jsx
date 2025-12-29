import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  if (!currentUser) return null;

  return (
    <div style={{ position: "relative" }}>
      <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {currentUser.username}
      </div>
      {open && (
        <div style={{
          position: "absolute", right: 0, top: "100%", background: "#fff",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)", borderRadius: "6px", padding: "10px"
        }}>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
