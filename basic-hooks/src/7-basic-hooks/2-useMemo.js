import React, { useEffect, useMemo, useRef, useState } from "react";

const App = (props) => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  //함수가 실행된 결과값을 리액트가 기억을한다.
  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);
  //배열값이 하나라도 변경되면 함수가 실행된다. 값이 변경되지않으면 이전에 실행해서 저장한 값을 재활용한다. 의존성 배열이다(두번째는 )

  return (
    <>
      <p>{`value is ${value}`}</p>

      <button
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1/v2수정
      </button>
      <p>{`v3 is ${v3}`}</p>
      <button onClick={() => setV3(Math.random())}>v3 수정</button>
    </>
  );
};

function runExpensiveJob(v1, v2) {
  console.log(`런콜`);
  return v1 + v2;
}

export default App;
