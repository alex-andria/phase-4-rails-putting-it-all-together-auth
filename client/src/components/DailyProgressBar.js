import React, { useState, useEffect } from "react";
import '../ProgressBar.css';


function DailyProgressBar({width = 400}){
    const [value, setValue] = useState(0)
    const [percent, setPercent] = useState(0)
    const [dailyTaskComplete, setDailyTaskComplete] = useState(true)

    useEffect(() => {
        setValue(percent * width);
    });

    return(
        <>
        <div className="progress-div" style={{width: width}}>
            <div style={{width: `${value}px`}}className="progress"/>
        </div>

        <button 
            onClick={() => 
                value < 1 ? (setPercent(percent + 1), setDailyTaskComplete(false)) : <></>}
        >
        {dailyTaskComplete? <p>Complete Goal</p> : <p>Goal Completed</p>}
        </button>

        </>
    );
}

export default DailyProgressBar;