import React, { useState } from 'react';

const Love: React.FC = () => {
    const [clickCount, setClickCount] = useState<number>(0);
    const [headingText, setHeadingText] = useState<string>('Do you love me?😊');
    const [subheadingText, setSubheadingText] = useState<string>('Please say yes!');
    const [imageSrc, setImageSrc] = useState<string>(
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmNzZTFsMWlmNWNqYjVuN2IxaTA0aGp3ZG13ZGc3MDh3aHdkMzFuZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif'
    );

    const imageUrls: string[] = [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZsMDB1dGI5N2djNjk4OHE4bDRudzd6YmIzZ3IyY2oxaGczZTZwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gDfteqLchLcRTtjAD7/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTltY3oxb2hxa3g1bmQ1cmthYm5lcnBpMWM1ZWdpbXhtaWFobTRjOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M90mJvfWfd5mbUuULX/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWg4Y3Frc3locThqN3Z0OTUzN2dyZHQxY3F3Ym92bzFnN3RycHE5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eiRpSPB8OSGVcbkOIJ/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG54c3J1cXNybThtb2VycGpmbW5paHppcDB0Z2Njd2xxMjN3MXJoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6gDZ9unSrDk3EuR2/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnVzZ3U1N2JodG1rMTU5dHVhOHYzM3liaDF3eDR1eGJ1N3YweWgyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9X8UlqKhaSPz4n7BkW/giphy.gif',
    ];

    const handleNoClick = (): void => {
        setClickCount(prevCount => prevCount + 1);
        if (clickCount < 4) {
            setHeadingText('Soch l0 acche se?');
            setSubheadingText('Click "yes".');
            setImageSrc(imageUrls[clickCount]);
        }
        if (clickCount === 4) {
            setHeadingText('How about now?');
            setSubheadingText('Please click "Yes" now.');
            const noButton = document.getElementById('noButton') as HTMLButtonElement;
            const yesButton = document.getElementById('yesButton') as HTMLButtonElement;
            if (noButton && yesButton) {
                noButton.style.display = 'none';
                yesButton.style.display = 'inline-block';
            }
        }
    };

    const handleYesClick = (): void => {
        setHeadingText('Hehe I knew it!');
        setSubheadingText('I love you');
        setImageSrc('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGM3MW92Zms4a3ZtamxibnZidHB1d3FoMWVzdmE3bzhxZWppaWN2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bA5cblwksWXDOwSzUI/giphy.gif');
        const yesButton = document.getElementById('yesButton') as HTMLButtonElement;
        const noButton = document.getElementById('noButton') as HTMLButtonElement;
        if (yesButton && noButton) {
            yesButton.disabled = true;
            noButton.disabled = true;
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
        }
    };

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <h2>{subheadingText}</h2>
            <button id="yesButton" onClick={handleYesClick}>Yes</button>
            <button id="noButton" onClick={handleNoClick}>No</button>
            <img id="image" src={imageSrc} alt="Placeholder" />
        </div>
    );
};

export default Love;
