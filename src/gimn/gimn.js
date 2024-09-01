import React, { useState, useEffect } from 'react';
import muz4 from "../music/гимн-кр.mp3";

const Gimn = () => {
  const [isNationalAnthemPlaying, setNationalAnthemPlaying] = useState(false);

  const playNationalAnthem = () => {
    try {
      setNationalAnthemPlaying(true);
      const audio = new Audio(muz4);

      audio.onplay = () => {
        console.log('Гимн воспроизведен');
      };

      audio.onerror = (error) => {
        console.error('Ошибка воспроизведения: ', error);
        setNationalAnthemPlaying(false);
      };

      audio.onended = () => {
        setNationalAnthemPlaying(false);
      };

      audio.play();
    } catch (error) {
      console.error('Ошибка воспроизведения: ', error);
      setNationalAnthemPlaying(false);
    }
  };

  const scheduleNationalAnthem = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); 

    if (dayOfWeek === 1 || dayOfWeek === 5) {
      const targetTime = new Date(currentDate);
      targetTime.setHours(8, 2, 0); 

      const timeUntilPlay = targetTime - currentDate;

      if (timeUntilPlay > 0) {
        setTimeout(() => {
          playNationalAnthem();
        }, timeUntilPlay);
      }
    }
  };

  useEffect(() => {
    scheduleNationalAnthem();
  }, []);

  return (
    <div>
      {isNationalAnthemPlaying ? (
        <p>Гимн воспроизводится...</p>
      ) : (
        <div>
          <p
            style={{
              fontSize: "36px",
              color: "white",
              marginLeft: "1040px",
              marginTop: "-550px",
              position: "absolute",
            }}
          >
            ..
          </p>
        </div>
      )}
    </div>
  );
};

export default Gimn;
