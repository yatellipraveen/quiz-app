import { useEffect, useState } from "react";

export function QuestionTImer({setUserAnswer}) {
  const [remainingTime, setRemainingTime] = useState(10000);
  useEffect(() => {
    let interval = setInterval(() => {
        if(remainingTime <= 0){
            setUserAnswer(null);
            clearInterval(interval);
        }
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <>
      <progress max={10000} value={remainingTime}></progress>
    </>
  );
}
