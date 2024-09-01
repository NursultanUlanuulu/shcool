import React, { useState, useEffect } from 'react';
import * as vmsg from "vmsg";

const recorder = new vmsg.Recorder({
    wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
});

const Voice = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordings, setRecordings] = useState([]);

    useEffect(() => {
        const storedRecordings = localStorage.getItem('recordings');
        if (storedRecordings) {
            setRecordings(JSON.parse(storedRecordings));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('recordings', JSON.stringify(recordings));
    }, [recordings]);

    const record = async () => {
        setIsLoading(true);
        if (isRecording) {
            const blob = await recorder.stopRecording();
            setIsLoading(false);
            setIsRecording(false);
            setRecordings((prevRecordings) => [...prevRecordings, URL.createObjectURL(blob)]);
        } else {
            try {
                await recorder.initAudio();
                await recorder.initWorker();
                recorder.startRecording();
                setIsLoading(false);
                setIsRecording(true);
            } catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        }
    };

    const deleteRecording = (url) => {
        setRecordings((prevRecordings) => prevRecordings.filter((recordingUrl) => recordingUrl !== url));
    };

    return (
        <div style={{ marginTop: "80px",
        }}>
            <>
                <button style={{
                    margin: "10px 25px",
                    padding: "10px 20px",
                    background: "blue",
                    color: "white",
                    fontSize: "18px",
                    border: "1px solid black",
                    borderRadius: "10px"
                }} className='voice' onClick={record} disabled={isLoading}>
                    {isRecording ? "Stop" : "Record"}
                </button>
                <ul style={{
                    padding: "0",
                    color: "red",

                }}>
                    {recordings.map((url) => (
                        <li style={{
                         marginLeft:"20px",
                         marginTop:"20px",
                         display: "flex",
                         alignItems:"center",
                         justifyContent:"center",
                        }} key={url}>
                            <audio src={url} controls></audio>
                            <button style={{
                                color: "white",
                                background: "red",
                                border: "1px solid white",
                                borderRadius: "20px",
                                height:"40px",
                                textAlign:"center",
                                padding: "0 20px",
                                margin: "0 20px"
                            }} onClick={() => deleteRecording(url)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </>
        </div>
    );
};

export default Voice;
