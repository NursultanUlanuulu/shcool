import React, { useState, useEffect } from 'react';
    import alertSound from "../music/zvuk-vozdushnaya-trevoga.mp3";

import  icons from "../assets/img/Remove-bg.ai_1689587547137.png"



    const Anxiety = () => {
        const [isAlerting, setAlerting] = useState(false);
        const [audio, setAudio] = useState(null);

        useEffect(() => {
            if (isAlerting) {
                playAlertSound();
            } else {
                stopAlertSound();
            }
        }, [isAlerting]);

        const handleClick = () => {
            setAlerting(!isAlerting);
        };

        const playAlertSound = () => {
            const audioElement = new Audio(alertSound);
            audioElement.loop = true; 
            setAudio(audioElement);
            audioElement.play();
        };

        const stopAlertSound = () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
                audio.loop = false; 
                setAudio(null);
            }
        };

        return (
            <div className="anxiety-btn">
                <button style={{ backgroundColor: 'transparent',border:"none" }}  onClick={handleClick} className={isAlerting ? 'alert-button rotate-animation' : ''}>
                    {isAlerting ? (
                        <img src={icons} alt="Тревога" />
                    ) : (
                        <img src={icons} alt="Нажми меня" />
                    )}
                </button>
            </div>
        );
    };

    export default Anxiety;
