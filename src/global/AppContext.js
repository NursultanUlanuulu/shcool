import React, { createContext, useContext, useRef, useState, useEffect } from "react";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Thuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [selectedAudio, setSelectedAudio] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [activeInput, setActiveInput] = useState(null);
  const [disableAudio, setDisableAudio] = useState(
    localStorage.getItem("disableAudio") === "true"
  );
  const audioRef = useRef(null);

  const [mondayInputs, setMondayInputs] = useState(
    JSON.parse(localStorage.getItem("mondayInputs")) || []
  );
  const [thuesdayInputs, setThuesdayInputs] = useState(
    JSON.parse(localStorage.getItem("thuesdayInputs")) || []
  );
  const [wednesdayInputs, setWednesdayInputs] = useState(
    JSON.parse(localStorage.getItem("wednesdayInputs")) || []
  );
  const [thursdayInputs, setThursdayInputs] = useState(
    JSON.parse(localStorage.getItem("thursdayInputs")) || []
  );
  const [fridayInputs, setFridayInputs] = useState(
    JSON.parse(localStorage.getItem("fridayInputs")) || []
  );
  const [saturdayInputs, setSaturdayInputs] = useState(
    JSON.parse(localStorage.getItem("saturdayInputs")) || []
  );
  const [sundayInputs, setSundayInputs] = useState(
    JSON.parse(localStorage.getItem("sundayInputs")) || []
  );
 
  // Создайте аналогичные состояния для других дней недели

  const [disableAudioDays, setDisableAudioDays] = useState(() => {
    const storedDisableAudioDays = localStorage.getItem("disableAudioDays");
    if (storedDisableAudioDays) {
      return JSON.parse(storedDisableAudioDays);
    } else {
      return {
        monday: false,
        thuesday: false,
        // Добавьте аналогичные ключи для остальных дней недели
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      };
    }
  })
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");

  useEffect(() => {
    setCurrentDayOfWeek(daysOfWeek[new Date().getDay()]);
  }, []);


  useEffect(() => {
    const storedAudio = localStorage.getItem("selectedAudio");
    if (storedAudio) {
      setSelectedAudio(storedAudio);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedAudio", selectedAudio);
  }, [selectedAudio]);

  useEffect(() => {
    localStorage.setItem("disableAudio", disableAudio);
  }, [disableAudio]);

  const handleSelectChange = (event) => {
    setSelectedAudio(event.target.value);
    handleStopAudio();
  };

  const handlePlayAudio = (audioFile) => {
    audioRef.current.src = audioFile;
    audioRef.current.play();
  };

  const handleStopAudio = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleInputFocus = (index) => {
    if (!disableAudio) {
      setActiveInput(index);
      if (!disableAudio && selectedAudio) {
        handleStopAudio();
      }
    }
  };

   const handleCheckboxChange = (day) => {
    setDisableAudioDays((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day],
    }));
    localStorage.setItem("disableAudioDays", JSON.stringify(disableAudioDays)); // Сохраняем в localStorage
  };

  useEffect(() => {
    localStorage.setItem("disableAudioDays", JSON.stringify(disableAudioDays));
  }, [disableAudioDays]);
  
  useEffect(() => {
    const storedDisableAudioDays = localStorage.getItem("disableAudioDays");
    if (storedDisableAudioDays) {
      setDisableAudioDays(JSON.parse(storedDisableAudioDays));
    }
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const dayOfWeek = daysOfWeek[now.getDay()];
      if (dayOfWeek) {
        const formattedTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setCurrentTime(formattedTime);
      } else {
        const formattedTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setCurrentTime(formattedTime); 
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  // Функция для обновления инпутов понедельника
  const handleMondayInputChange = (index, event) => {
    const newInputs = [...mondayInputs];
    newInputs[index] = event.target.value;
    setMondayInputs(newInputs);
    localStorage.setItem("mondayInputs", JSON.stringify(newInputs));
  };
  const handleThuesdayInputChange = (index, event) => {
    const newInputs = [...thuesdayInputs];
    newInputs[index] = event.target.value;
    setThuesdayInputs(newInputs);
    localStorage.setItem("thuesdayInputs", JSON.stringify(newInputs));
  };
  const handleWednesdayInputChange = (index, event) => {
    const newInputs = [...wednesdayInputs];
    newInputs[index] = event.target.value;
    setWednesdayInputs(newInputs);
    localStorage.setItem("wednesdayInputs", JSON.stringify(newInputs));
  };
  const handleThursdayInputChange = (index, event) => {
    const newInputs = [...thursdayInputs];
    newInputs[index] = event.target.value;
    setThursdayInputs(newInputs);
    localStorage.setItem("thursdayInputs", JSON.stringify(newInputs));
  };
  const handleFridayInputChange = (index, event) => {
    const newInputs = [...fridayInputs];
    newInputs[index] = event.target.value;
    setFridayInputs(newInputs);
    localStorage.setItem("fridayInputs", JSON.stringify(newInputs));
  };
  const handleSaturdayInputChange = (index, event) => {
    const newInputs = [...saturdayInputs];
    newInputs[index] = event.target.value;
    setSaturdayInputs(newInputs);
    localStorage.setItem("saturdayInputs", JSON.stringify(newInputs));
  };
  const handleSundayInputChange = (index, event) => {
    const newInputs = [...sundayInputs];
    newInputs[index] = event.target.value;
    setSundayInputs(newInputs);
    localStorage.setItem("sundayInputs", JSON.stringify(newInputs));
  };

  // ...



  const handleDisableAudioChange = (day) => {
    setDisableAudioDays((prevDays) => {
      const updatedDays = {
        ...prevDays,
        [day]: !prevDays[day],
      };
      localStorage.setItem("disableAudioDays", JSON.stringify(updatedDays));
      return updatedDays;
    });
  };

  // Возвращаем состояния и функции для каждого дня недели в контекст
  return (
    <AppContext.Provider
      value={{
        selectedAudio,
        currentTime,
        activeInput,
        disableAudio,
        audioRef,
        handleSelectChange,
        handleStopAudio,
        handleInputFocus,
        setActiveInput,
        handleCheckboxChange,
        handleMondayInputChange,
        handleThuesdayInputChange,
        handleWednesdayInputChange,
        handleThursdayInputChange,
        handleFridayInputChange,
        handleSaturdayInputChange,
        handleSundayInputChange,
        disableAudioDays,
        handleDisableAudioChange,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
