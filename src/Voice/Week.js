import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "../components/Modal.css"

import Gimn from '../gimn/gimn';

const Week = () => {
    return (
        <div className="week">

            <div className="days1">

                <Link to={"/monday1714"}><h1> Понедельник</h1></Link>
                <Link to={"/tuesday2815"}><h1>Вторник</h1></Link>
                <Link to={"/wednesday3916"}><h1> Среда</h1></Link>
                <Link to={"/thursday4817"}><h1> Четверг</h1></Link>
                <Link to={"/friday5718"}><h1> Пятница</h1></Link>
                <Link to={"/saturday5616"}><h1> Суббота</h1></Link>
                <Link to={"/sunday5515"}><h1>Воскресенье</h1></Link>
                </div>
          
               
           
            <Gimn/>
        </div>
    );
};

export default Week;
