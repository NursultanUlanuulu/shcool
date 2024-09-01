import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Week from '../Voice/Week';
import Monday from '../components/Monday';
import Tuesday from '../components/Thuesday'; 
import Wednesday from '../components/Wednesday';
import Thursday from '../components/Thursday';
import Friday from '../components/Friday';
import Saturday from '../components/Saturday';
import Sunday from '../components/Sunday';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import VideoBg from '../global/VideoBg'; 

  const AdminPage = ({ isAuthenticated, logout }) => {
    const storedDisableAudioDays = JSON.parse(localStorage.getItem('disableAudioDays')) || {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    };
  
    const [disableAudioDays, setDisableAudioDays] = useState(storedDisableAudioDays);
  
    useEffect(() => {
      localStorage.setItem('disableAudioDays', JSON.stringify(disableAudioDays));
    }, [disableAudioDays]);
  

  return (
    <>
      <div className="weekend">
        <div className="main-page">
          <Link to="/VideoBg0312">
            <button style={{
              display: 'flex',
              padding: "10px 30px",
            }} className="text">
              <span>
                <HiChevronDoubleLeft />
              </span>
              <h1>Главная страница</h1>
            </button>
          </Link>
          <div style={{}} className="dark">
            <div>
              <Week />
            </div>
            <div>
              <Routes>
                <Route path="/VideoBg0312" element={<VideoBg />} />
                <Route path="/monday1714" element={<Monday disableAudioDays={disableAudioDays} setDisableAudioDays={setDisableAudioDays} />} />
                <Route path="/tuesday2815" element={<Tuesday disableAudioDays={disableAudioDays} setDisableAudioDays={setDisableAudioDays} />} />
                <Route path="/wednesday3916" element={<Wednesday disableAudioDays={disableAudioDays} setDisableAudioDays={setDisableAudioDays} />} />
                <Route path="/thursday4817" element={<Thursday disableAudioDays={disableAudioDays} setDisableAudioDays={setDisableAudioDays} />} />
                <Route path="/friday5718" element={<Friday disableAudioDays={disableAudioDays} setDisableAudioDays={setDisableAudioDays} />} />
                <Route path="/saturday5616" element={<Saturday disableAudioDays={disableAudioDays} setDisableAudioDays={setDisableAudioDays} />} />
                <Route path="/sunday5515" element={<Sunday disableAudioDays={disableAudioDays} setDisableAudioDays={setDisableAudioDays} />} />
              </Routes>
            </div>
            <div 
              className='image_change'    
              style={{
                  borderRadius: "50%",
                  width: "250px",
                  height: "250px",
                }}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
