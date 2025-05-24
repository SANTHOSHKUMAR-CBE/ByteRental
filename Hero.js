import React, { useState } from "react";
import logo from "./media/images/ByteRental_Logo3.png";
import background from "./media/images/ByteRental_Logo.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                minHeight: "100vh",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
                textAlign: "center",
                overflow: "hidden"
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
                    left: 0,
                    right: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 2rem",
                    zIndex: 1,
                    boxSizing: "border-box"
                }}>
                    <img src={logo} alt="ByteRental Logo" style={{ height: "50px" }} />
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <button
                            onClick={() => scrollToSection("about-section")}
                            style={{
                                backgroundColor: "#2563eb",
                                border: "none",
                                color: "white",
                                fontSize: "1rem",
                                cursor: "pointer",
                                padding: "0.4rem 0.8rem",
                                borderRadius: "0.4rem"
                            }}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("footer-section")}
                            style={{
                                backgroundColor: "#2563eb",
                                border: "none",
                                color: "white",
                                fontSize: "1rem",
                                cursor: "pointer",
                                padding: "0.4rem 0.8rem",
                                borderRadius: "0.4rem"
                            }}
                        >
                            Contact
                        </button>
                        <div style={{ position: "relative", maxWidth: "150px" }}>
                            <div
                                onClick={toggleDropdown}
                                style={{
                                    padding: "0.5rem 1rem",
                                    fontSize: "1rem",
                                    borderRadius: "0.5rem",
                                    backgroundColor: "#2563eb",
                                    cursor: "pointer",
                                    userSelect: "none",
                                    color: "white",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}
                            >
                                Login
                            </div>

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
                                    zIndex: 10,
                                    minWidth: "160px"
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
                    </div>
                </nav>

                {/* Hero Text */}
                <div style={{ position: "relative", zIndex: 1, marginTop: "5rem" }}>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                        Welcome to Byte Rental Hub
                    </h1>
                    <p style={{ fontSize: "1.2rem", color: "#d1d5db", marginBottom: "2rem" }}>
                        Rent high-performance laptops for work, gaming, or study.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section id="about-section" style={{
                padding: "4rem 2rem",
                backgroundColor: "#f3f4f6",
                textAlign: "center",
                color: "#1f2937"
            }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About ByteRental</h2>
                <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
                    ByteRental was built with a mission to make tech access easy, affordable, and reliable. Whether you're a student, developer, freelancer, or business professional—we’ve got the right device for you, when you need it.
                </p>
                <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "1rem auto 0", lineHeight: "1.6" }}>
                    We understand the demands of modern users. That's why we offer a curated selection of powerful, well-maintained laptops tailored for programming, design, business use, and everyday productivity. Our seamless booking process, flexible rental plans, and doorstep delivery make renting a laptop easier than ever.
                </p>
                <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "1rem auto 0", lineHeight: "1.6" }}>
                    Whether you need a device for a week or a few months, ByteRental ensures you have the performance and support you need to stay focused on your goals. Join hundreds of happy renters who trust us with their tech needs.
                </p>
            </section>

            {/* Footer */}
            <footer id="footer-section" style={{
                backgroundColor: "#1f2937",
                color: "#d1d5db",
                padding: "2rem",
                textAlign: "center"
            }}>
                <img src={logo} alt="ByteRental Logo" style={{ height: "60px", marginBottom: "1rem" }} />
                <p>ByteRental HQ, 123 Silicon Avenue, Bangalore, IN 560001</p>
                <p>Email: support@byterental.fake</p>
                <p>Phone: +91-98765-43210</p>
                <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#9ca3af" }}>
                    &copy; {new Date().getFullYear()} ByteRental. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Hero;
