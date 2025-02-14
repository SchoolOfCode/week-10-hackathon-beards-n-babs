// import { useEffect } from "react";
// import * as Sentry from "@sentry/nextjs";

// const TimeoutErrorComponent = () => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       Sentry.captureException(new Error("Operation timed out"));
//     }, 5000); // Simulate timeout after 5 seconds

//     return () => clearTimeout(timeout);
//   }, []);

//   return null;
// };

// export default TimeoutErrorComponent;
