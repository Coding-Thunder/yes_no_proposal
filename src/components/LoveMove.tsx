import { useState } from 'react';

const LoveMove: React.FC = () => {
    const [headingText, setHeadingText] = useState("Do you Love me?😊");
    const [imageSrc, setImageSrc] = useState("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJ0b2Ztdjh6MXNlMTVzZXZuaGd4bG9vYnhyMXV3aDM0MWZ3OHRoNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif");
    const [showButtons, setShowButtons] = useState(true);

    const moveButton = (button: any) => {
        const newX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
        const newY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
        button.style.position = 'absolute';
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    };

    const handleYesClick = () => {
        setHeadingText("Hehe, I knew it!😊");
        setImageSrc("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE0aWZlaDM3bnlqamZma3drcGU1MzVzc3FwMmt2c3E1bDQyYnA2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bA5cblwksWXDOwSzUI/giphy.gif");
        setShowButtons(false);
    };

    const handleNoClick = () => {
        setHeadingText("Sorry that you didn't like the image!");
        setImageSrc("https://via.placeholder.com/150");
    };
    return (
        <div className="container">
            <h1 id="heading">{headingText}</h1>
            <img id="image" src={imageSrc} alt="Response GIF" />
            {showButtons && (
                <div>
                    <button id="yesButton" onClick={handleYesClick}>Yes</button>
                    <button
                        id="noButton"
                        onMouseOver={(e) => moveButton(e.target)}
                        onClick={handleNoClick}
                    >
                        No
                    </button>
                </div>
            )}
        </div>
    )
}

export default LoveMove