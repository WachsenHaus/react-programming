import React, { useEffect, useRef, useState } from "react";

const App = (props) => {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);
  //useEffect는 렌더링 된 후에 호출이된다.
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);

  const prevAge = prevAgeRef.current; //이전값을 가리키다가
  const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이변경
      </button>
    </div>
  );
};

export default App;
