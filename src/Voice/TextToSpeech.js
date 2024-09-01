
import React, { useState, useEffect } from "react";
import Anxiety from "../anxiety/Anxiety";

const TextToSpeech = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(new SpeechSynthesisUtterance(''));
    const [voice, setVoice] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();

        setVoice(voices[0]);

        return () => {
            synth.cancel();
        };
    }, []);

    const handleTextChange = (event) => {
        const newText = event.target.value;
        const newUtterance = new SpeechSynthesisUtterance(newText);
        setUtterance(newUtterance);
    };

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        } else {
            utterance.voice = voice;
            utterance.pitch = pitch;
            utterance.rate = rate;
            utterance.volume = volume;
            synth.speak(utterance);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    const handleVoiceChange = (event) => {
        const voices = window.speechSynthesis.getVoices();
        setVoice(voices.find((v) => v.name === event.target.value));
    };

    const handlePitchChange = (event) => {
        setPitch(parseFloat(event.target.value));
    };

    const handleRateChange = (event) => {
        setRate(parseFloat(event.target.value));
    };

    const handleVolumeChange = (event) => {
        setVolume(parseFloat(event.target.value));
    };

    return (
        <div className='container' >
          <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
              <label style={{
                  padding :"50px 0",
                  color: "white",
                  display:"flex",
                  fontSize: "22px",
                  marginLeft:"-20px"
              }}>
                  Языки:
                  <select style={{
                      background:"white",
                      padding:"6px 20px",
                      width:"300px",
                      border:"2px solid blue",
                      borderRadius:"10px",
                      margin:"0 10px",
                      boxShadow: "-16px 9px 39px -7px rgba(255, 255, 255, 0.36)",



                  }} value={voice?.name} onChange={handleVoiceChange}>
                      {window.speechSynthesis.getVoices().map((voice) => (
                          <option style={{
                              fontSize:"16px",
                              padding:"3px 0 ",

                          }} key={voice.name} value={voice.name}>
                              {voice.name}
                          </option>
                      ))}
                  </select>
              </label>
              <Anxiety/>

          </div>



<div style={{
  textAlign:"flex-start",
  display:"flex",
  marginLeft:"-20px"}}>
    <br />

            <label style={{
              color:"white",
              fontSize:"18px",
              margin:"5px 0 ",


            }}>
                Тон речи:
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={handlePitchChange}
                />
            </label>

            <br />

            <label style={{
              color:"white",
              fontSize:"18px",
              margin:"5px 25px "

            }}>
                Скорость речи:
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={handleRateChange}
                />
            </label>
            <br />
            <label style={{
              color:"white",
              fontSize:"18px",
              margin:"5px 0 "

            }}>
                Громкость:
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </label>

            <br />

</div>

          <div style={{

}} className="scroll" >
              <label style={{
              color:"white",
              fontSize:"18px",
              padding:"20px 0 ",
              display:"flex",
              alignItems:"flex-start",
              justifyContent:"flex-start",
              flexDirection:"column"

            }}>
                Свой текст:
                <textarea style={{
                  color:"black",
                  margin:"10px 20px",
                  fontSize:"18px",
                  border:"1px solid darkBlue",
                  borderRadius:"14px",
                  width:"365px",
                  height:"60px",
                  padding:"20px 20px",            

                
                }} value={utterance.text} onChange={handleTextChange} />
            </label>
               </div>


            <br />
            <div style={{
              marginLeft:"-30px",
            }}>
            <button style={{
              color:"white",
              background:"darkBlue",
              border :"1px solid white",
              borderRadius:"14px",
              padding:"5px 20px ",
              margin:"10px 10px"
            
            }} onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
            <button style={{
              color:"white",
              background:"darkBlue",
              border :"1px solid white",
              borderRadius:"14px",
              padding:"5px 20px ",
              margin:"10px 10px"
            
            }} onClick={handlePause}>Pause</button>
            <button style={{
              color:"white",
              background:"darkBlue",
              border :"1px solid white",
              borderRadius:"14px",
              padding:"5px 20px ",
              margin:"10px 10px"
            
            }} onClick={handleStop}>Stop</button>
            </div>
          
        </div>
    );
};

export default TextToSpeech;