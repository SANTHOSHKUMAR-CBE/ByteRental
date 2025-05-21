import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging in with Email: ${email} and Password: ${password}`);
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #8e2de2, #ff6a00)",  // 💡 NEW PURPLE-ORANGE GRADIENT
            padding: "1rem",
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: "#fff",
                    padding: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >
                <h2 style={{
                    marginBottom: "1.5rem",
                    color: "#8e2de2",
                    fontSize: "1.8rem"
                }}>User Login</h2>

                <div style={{ marginBottom: "1.25rem", textAlign: "left" }}>
                    <label style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#333",
                        fontWeight: "bold"
                    }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                        style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ccc",
                            borderRadius: "0.5rem",
                            fontSize: "1rem",
                            outlineColor: "#8e2de2",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                    <label style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#333",
                        fontWeight: "bold"
                    }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="********"
                        style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ccc",
                            borderRadius: "0.5rem",
                            fontSize: "1rem",
                            outlineColor: "#8e2de2",
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "linear-gradient(to right, #8e2de2, #ff6a00)",
                        border: "none",
                        borderRadius: "0.5rem",
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "background 0.3s ease",
                    }}
                >
                    Login
                </button>

                <p style={{ marginTop: "1rem", color: "#555" }}>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{
                        color: "#ff6a00",
                        textDecoration: "none",
                        fontWeight: "bold"
                    }}>
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default UserLogin;
