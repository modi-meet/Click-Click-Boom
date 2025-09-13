import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti';
import './counter.css'

const Counter = ({count, setCount}) => { // recieving the props from App.jsx
    const [isCelebrating, setIsCelebrating] = useState(false); // hook for celebration
    
    // this runs everytime 'count' is changed
    useEffect(() => {
        if (count === 100 || count >= 115) {
            setIsCelebrating(true);
            
            const timer = setTimeout(() => setIsCelebrating(false), 7000);
            // cleanup function
            return () => clearTimeout(timer);
        }
    }, [count]);

    const getMessage = () => {
        if (count === 0) return "Let's get clicking!";
        if (count < 10) return "Warming up...";
        if (count < 25) return "You're on a roll!";
        if (count < 50) return "Impressive clicking speed!";
        if (count < 100) return `Almost there... keep going!`;
        if (count < 115) return "Okay, you've proven your point. You win!";
        return "SUPER CELEBRATION! 🎉";
    }; 

    const progress = Math.min((count / 100) * 100, 100);

    return (
        <div className='counter-card'>
            {isCelebrating && <Confetti style={{ pointerEvents: 'none' }}/>}

            <p id='para'>
                <span className="count-animation" key={count}>
                    {count}
                </span>
                Clicks
            </p>
            {/* paragraph will show dynamic messages */}
            <p className='message'>{getMessage()}</p>

            {/* The Progress Bar */}
            <div className="progress-bar-container">
                <div 
                    className="progress-bar" 
                    // width is set dynamically based on the count
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <button id='btn' onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    );
}

export default Counter