import React from "react";
import PropTypes from "prop-types";

const Home = ({ audioFiles }) => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of the website.</p>
            <div>
                <h2>Listen to Our Audio Files</h2>
                {audioFiles.map((audio, index) => (
                    <div key={index}>
                        <h3>{audio.title}</h3>
                        <audio controls>
                            <source src={`http://127.0.0.1:8000${audio.file}`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Define prop types
Home.propTypes = {
    audioFiles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            file: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Home;
