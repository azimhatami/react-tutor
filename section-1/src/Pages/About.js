import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    
    const navigate = useNavigate()

    return (
        <div>
            <h2>About page</h2>
            <button onClick={() => {navigate('/')}}>Go to Home page</button>
        </div>
    )
};

export default About;