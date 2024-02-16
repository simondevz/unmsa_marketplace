import { millisecondsToMinutes, millisecondsToSeconds } from "date-fns";
import { useEffect, useState } from "react";

export default function Timer({
  timeRecord,
  setTimeRecord,
  startMinutes,
}: {
  startMinutes: number;
  setTimeRecord: React.Dispatch<React.SetStateAction<string>>;
  timeRecord: string;
}) {
  const [time, setTime] = useState(startMinutes * 60 * 1000);
  useEffect(() => {
    const ticker = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 1000;
        setTimeRecord(
          `${millisecondsToMinutes(time)} : ${millisecondsToSeconds(time) % 60}`
        );
        return newTime;
      });
    }, 1000);
    return () => clearInterval(ticker);
  });

  return <>{timeRecord}</>;
}
