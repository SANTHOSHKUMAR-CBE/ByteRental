import React from "react";
import logo from "./media/images/ByteRental_Logo2.png";
import background from "./media/images/ByteRental_Logo.png";

const Hero = () => {
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
                    <div style={{
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "#2563eb",
                        cursor: "pointer",
                        userSelect: "none"
                    }}>
                        Login
                        <div style={{
                            position: "absolute",
                            top: "100%",
                            right: 0,
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "0.5rem",
                            marginTop: "0.5rem",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            display: "none"
                        }}
                            className="dropdown-content"
                        >
                            <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>User Login</div>
                            <div style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Admin Login</div>
                        </div>
                    </div>
                </div>
            </nav>

            <div style={{ position: "relative", zIndex: 1 }}>
                {/* <img
                    src={logo}
                    alt="Byte Rental Hub Logo"
                    style={{ width: "100px", margin: "0 auto 20px" }}
                /> */}
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                    Welcome to Byte Rental Hub
                </h1>
                <p style={{ fontSize: "1.2rem", color: "#d1d5db", marginBottom: "2rem" }}>
                    Rent high-performance laptops for work, gaming, or study.
                </p>
                {/* <button style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    fontSize: "1rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer"
                }}>
                    Explore Rentals
                </button> */}

                <p style={{ fontSize: "1.2rem", color: "#d1d5db", marginBottom: "2rem" }}>
                    ByteRental was built with a mission to make tech access easy, affordable, and reliable. Whether you're a student, developer, freelancer, or business professional—we’ve got the right device for you, when you need it.
                </p>
            </div>

            <style>{`
        .dropdown-content {
          display: none;
        }
        div:hover > .dropdown-content {
          display: block;
        }
      `}</style>
        </section>
    );
};

export default Hero;
