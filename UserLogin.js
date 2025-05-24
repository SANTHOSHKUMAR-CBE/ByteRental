import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "./media/images/ByteRental_Logo.png";

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging in with Email: ${email} and Password: ${password}`);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                    backgroundColor: "rgba(15, 23, 42, 0.85)", // same dark navy overlay
                    backdropFilter: "blur(6px)",
                    zIndex: 0,
                }}
            />

            <form
                onSubmit={handleSubmit}
                style={{
                    position: "relative",
                    backgroundColor: "rgba(31, 41, 55, 0.75)", // dark slate translucent bg
                    padding: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center",
                    zIndex: 1,
                    color: "#e0e7ff",
                    fontWeight: "500",
                }}
            >
                <h2
                    style={{
                        marginBottom: "1.5rem",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#a5b4fc", // soft blue heading
                    }}
                >
                    User Login
                </h2>

                <div style={{ marginBottom: "1.25rem", textAlign: "left" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            color: "#a5b4fc", // soft blue label
                            fontWeight: "bold",
                        }}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                        style={inputStyle}
                    />
                </div>

                <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            color: "#a5b4fc",
                            fontWeight: "bold",
                        }}
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="********"
                        style={inputStyle}
                    />
                </div>

                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    Login
                </button>

                <p style={{ marginTop: "1rem", color: "#a5b4fc" }}>
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        style={{
                            color: "#60a5fa",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Sign up
                    </Link>
                </p>
            </form>
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
};

const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    background:
        "linear-gradient(to right, #2563ebcc, #1e40afcc)", // slightly transparent blue gradient
    border: "none",
    borderRadius: "0.5rem",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s ease",
};

export default UserLogin;
