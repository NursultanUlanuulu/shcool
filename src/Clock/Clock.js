// import React, { useState, useEffect } from 'react';

// const Clock = () => {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(new Date());
//         }, 1000);

//         return () => {
//             clearInterval(timer);
//         };
//     }, []);
//     const deg = 6;
//     const hh = time.getHours() * deg;
//     const mm = time.getMinutes() * deg;
//     const ss = time.getSeconds() * deg;

//     return (
//         <div className="clock" style={{
//         display:"flex",
//         alignItems:"center",
//         justifyContent:"center",
//         }}>
//             {/* <div className="hour" style={{ color: "blue" }}>
//                 <div className="hr" style={{ transform: `rotateZ(${hh + mm / 12}deg)`}}></div>
//             </div>
//             <div className="min" style={{ color: "blue" }}>
//                 <div className="mn" style={{ transform: `rotateZ(${mm}deg)` }}></div>
//             </div>
//             <div className="sec" style={{ color: "blue" }}>
//                 <div className="sc" style={{ transform: `rotateZ(${ss}deg)` }}></div>
//             </div> */}
//         </div>
//     );
// };

// export default Clock;
