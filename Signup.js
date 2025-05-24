import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "./media/images/ByteRental_Logo.png";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        alert("Signup successful!");
        navigate("/userlogin");
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
                padding: "2rem",
                color: "#d1d5db",
            }}
        >
            {/* Darker overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(15, 23, 42, 0.85)", // dark navy overlay
                    backdropFilter: "blur(6px)",
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    position: "relative",
                    backgroundColor: "rgba(31, 41, 55, 0.75)", // darker translucent form bg (dark slate)
                    borderRadius: "1rem",
                    padding: "2rem",
                    maxWidth: "400px",
                    width: "100%",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
                    backdropFilter: "blur(8px)",
                    textAlign: "center",
                    zIndex: 1,
                    color: "#e0e7ff",
                    fontWeight: "500",
                }}
            >
                <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem", fontWeight: "bold" }}>
                    Create an Account
                </h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #475569", // muted blue-gray border
    fontSize: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // subtle transparent input bg
    color: "#e0e7ff",
    outlineColor: "#2563eb",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
    "::placeholder": {
        color: "#94a3b8",
    },
};

const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    background: "linear-gradient(to right, #2563ebcc, #1e40afcc)", // slightly transparent blue gradient
    border: "none",
    borderRadius: "0.5rem",
    color: "white",
    fontSize: "1.1rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease",
};

export default Signup;
