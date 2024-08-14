import { useEffect, useRef } from "react";

//capturePhase = false: eventlistener captures event in bobbling phase.
export function useOutsideClick(handler, capturePhase = true) {
  //close modal window when user clicks outside
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      // add third arg 'true' so as not to listen to events on the bubbling phase
      document.addEventListener("click", handleClick, capturePhase);

      return () =>
        document.removeEventListener("click", handleClick, capturePhase);
    },
    [handler, capturePhase]
  );
  return ref;
}
