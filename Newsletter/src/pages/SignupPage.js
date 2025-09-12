import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./SignupPage.css"
import gamedev1 from "../assets/gamedev1.jpg"
import gamedev2 from "../assets/gamedev2.jpg"
import gamedev3 from "../assets/gamedev3.jpg"
import gamedev4 from "../assets/gamedev4.jpg"

const images = [gamedev1, gamedev2, gamedev3, gamedev4];

function SignupPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

            try {
        const response = await fetch("https://nexatrux.com/backend/public/api/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email})
        });

        if (response.ok) {
            alert("Thank you for signing up!");
            setEmail("");
        } else {
            alert("Something went wrong. Please try again later.");
        }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occured. Please try again later.")
        }

    }


    return (
        <div className="signup-container">
            <div className="background-carousel" style={{ backgroundImage: `url(${images[currentImageIndex]})`}}></div>
            <div className="overlay"></div>

            <div className="signup-content">
                <h1>Subscribe to our newsletter</h1>
                <p>Get the latest updates straight to your inbox.</p>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input className="email" type="email" placeholder="Enter your Email" value={email} onChange={handleChange} required/>

                    <div className="password-wrapper">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" required/>
                        <button type="button" onClick={togglePassword} className="password-toggle">
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20}/>}
                        </button>
                    </div>
                    <button type="submit" id="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage