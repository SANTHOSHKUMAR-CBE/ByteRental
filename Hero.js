import React, { useState } from "react";
import logo from "./media/images/ByteRental_Logo2.png";
import background from "./media/images/ByteRental_Logo.png";
import { useNavigate } from "react-router-dom"; // Only added if needed for navigation

const Hero = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    return (
        <section style={{
            minHeight: "100vh",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center"
        }}>
            {/* Overlay */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(4px)",
                zIndex: 0
            }}></div>

            {/* Navigation */}
            <nav style={{
                position: "absolute",
                top: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 2rem",
                zIndex: 1
            }}>
                <img src={logo} alt="ByteRental Logo" style={{ height: "100px" }} />
                <div style={{ position: "relative" }}>
                    <div
                        onClick={toggleDropdown}
                        style={{
                            padding: "0.5rem 1rem",
                            fontSize: "1rem",
                            borderRadius: "0.5rem",
                            backgroundColor: "#2563eb",
                            cursor: "pointer",
                            userSelect: "none"
                        }}
                    >
                        Login
                    </div>

                    {/* Dropdown with vertical layout */}
                    {dropdownVisible && (
                        <div style={{
                            position: "absolute",
                            top: "100%",
                            right: 0,
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "0.5rem",
                            marginTop: "0.5rem",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            zIndex: 10
                        }}>
                            <div
                                style={{ padding: "0.5rem 1rem", cursor: "pointer", whiteSpace: "nowrap" }}
                                onClick={() => navigate("/userlogin")}
                            >
                                User Login
                            </div>
                            <div
                                style={{ padding: "0.5rem 1rem", cursor: "pointer", whiteSpace: "nowrap" }}
                                onClick={() => navigate("/adminlogin")}
                            >
                                Admin Login
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Text */}
            <div style={{ position: "relative", zIndex: 1 }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                    Welcome to Byte Rental Hub
                </h1>
                <p style={{ fontSize: "1.2rem", color: "#d1d5db", marginBottom: "2rem" }}>
                    Rent high-performance laptops for work, gaming, or study.
                </p>
                <p style={{ fontSize: "1.2rem", color: "#d1d5db", marginBottom: "2rem" }}>
                    ByteRental was built with a mission to make tech access easy, affordable, and reliable.
                    Whether you're a student, developer, freelancer, or business professional—we’ve got the right device for you, when you need it.
                </p>
            </div>
        </section>
    );
};

export default Hero;
