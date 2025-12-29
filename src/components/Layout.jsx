import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "./Sidebar";

const Layout = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* NAVBAR */}
      <div className="navbar">
        <h2>Corporate Training System</h2>

        {/* PROFILE */}
        <div style={{ position: "relative" }}>
          <div
            onClick={() => setOpen(!open)}
            style={{
              cursor: "pointer",
              background: "#fff",
              color: "#1e293b",
              padding: "6px 12px",
              borderRadius: "20px",
              fontWeight: "600"
            }}
          >
            {currentUser.username} ⌄
          </div>

          {open && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "40px",
                background: "white",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                overflow: "hidden",
                minWidth: "140px"
              }}
            >
              <button
                onClick={logout}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="content">
        <Sidebar role={currentUser.role} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
