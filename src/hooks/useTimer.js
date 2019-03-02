import { useRef, useEffect, useState} from 'react';

function useTimer() {
    const timer = useRef(null);
    const [time, setTime] = useState(0);

    useEffect(() => {
        timer.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(timer.current);
        }
    }, []);

    return time;
};

export default useTimer;