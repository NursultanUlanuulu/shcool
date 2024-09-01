import TextToSpeech from './TextToSpeech';
import Anxiety from "../anxiety/Anxiety";
import React from "react";

const BlogPost = () => {
    const text = " "
    return (
        <div className='container'>
            <h1 style={{
              color:"white",
              fontWeight:"400",
              fontSize:"36px",
              textAlign:"start",
              margin:"30px 0 0 0 ",
            }}>Голосовой ввывод</h1>
            <TextToSpeech text={text} />
            <p>{text}</p>
        </div>
    );
};

export default BlogPost;