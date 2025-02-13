import { useState } from "react";
import * as Sentry from "@sentry/nextjs"

type TrackedClicksProps = {
    onClick: () => void;
    children: ReactNode;
  };

const TrackedClicks = ({ onClick, children }: TrackedClicksProps) => {
  const [clickCount, setClickCount] = useState<number>(0);
  console.log(clickCount);

  const handleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 20) {
        console.log("🔴COOKIE HAS GENERATED 20 FORTUNES🔴");
        Sentry.captureException(new Error("Element clicked 20 times"));
        // Sentry logging will go here
      }
      return newCount;
    });

    onClick(); // Call the original button's onClick handler
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default TrackedClicks;
