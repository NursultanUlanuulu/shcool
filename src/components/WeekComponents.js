import React from 'react';

function WeekComponent() {
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return (
        <div style={{display:"flex"}}>
            {daysOfWeek.map((day, index) => (
                <div key={index} className="day-column">
                    <h2>{day}</h2>
                    <h3>Добро пожаловать в наш сайт MRSUN-CAll </h3>
                </div>
            ))}
        </div>
    );
}

export default WeekComponent;
