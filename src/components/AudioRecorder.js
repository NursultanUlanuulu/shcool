import React, { useState, useRef } from "react";

function AudioRecorder() {
    const mediaRecorderRef = useRef(null);
    const audioRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = () => {
        const mediaStream = audioRef.current.captureStream();
        mediaRecorderRef.current = new MediaRecorder(mediaStream);

        const chunks = [];
        mediaRecorderRef.current.ondataavailable = (event) => {
            chunks.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(chunks, { type: "audio/wav" });
            const audioUrl = URL.createObjectURL(audioBlob);
            
            console.log("Audio URL:", audioUrl);
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    return (
        <div>
            <button disabled={isRecording} onClick={startRecording}>
                Start Recording
            </button>
            <button disabled={!isRecording} onClick={stopRecording}>
                Stop Recording
            </button>
            <audio ref={audioRef} controls />
        </div>
    );
}

export default AudioRecorder;