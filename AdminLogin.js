import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "./media/images/ByteRental_Logo.png"; // Use same background image

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin123") {
            alert("Admin login successful!");
            navigate("/admin-dashboard");
        } else {
            alert("You are not an admin");
            navigate("/");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                padding: "1rem",
                color: "#e0e7ff",
            }}
        >
            {/* Dark overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(6px)",
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    position: "relative",
                    backgroundColor: "rgba(31, 41, 55, 0.75)",
                    padding: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center",
                    zIndex: 1,
                    color: "#a5b4fc",
                    fontWeight: "500",
                }}
            >
                <h2 style={{ marginBottom: "1.5rem", fontWeight: "bold", fontSize: "2rem" }}>
                    Admin Login
                </h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #475569",
    fontSize: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#e0e7ff",
    outlineColor: "#2563eb",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
};

const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    background:
        "linear-gradient(to right, #2563ebcc, #1e40afcc)",
    border: "none",
    borderRadius: "0.5rem",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s ease",
};

export default AdminLogin;
