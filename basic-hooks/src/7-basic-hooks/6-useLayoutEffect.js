import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
//부수효과 함수를 동기로 호출한다
//특별한 이유가없다면 useEffect훅을 사용하고
// 언제 uselayout effect를 사용하나 렌더링 직후 돔요소의 값을 읽어오는 경우, 조건에 따라서 컴포넌트를 다시 랜더링 하고싶은경우
const App = (props) => {
  //상태값을 변경할수있는 dispatch 함수가 반환이 된다.
  const [width, setWidth] = useState(200);
  //useLayoutEffect는 브라우저가 화면을 그리기 전에 이 코드가 실행된다.
  useLayoutEffect(() => {
    if (width > 500) {
      setWidth(500);
    }
  }, [width]);
  return (
    <div>
      <div style={{ width, heigth: 100, backgroundColor: "green" }} test></div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500이상
      </button>
    </div>
  );
};

export default App;
