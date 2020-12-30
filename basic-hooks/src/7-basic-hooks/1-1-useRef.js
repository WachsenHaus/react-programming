import React, { useEffect, useRef } from "react";

const App = (props) => {
  const timerIdRef = useRef(-1);
  //ref는 돔요소를 참조할때만 사용할수있는건아니다.

  useEffect(() => {
    timerIdRef.current = setTimeout(() => {}, 1000);
  });

  useEffect(() => {
    if (timerIdRef.current >= 0) {
      clearTimeout(timerIdRef.current);
    }
  });
};

export default App;
