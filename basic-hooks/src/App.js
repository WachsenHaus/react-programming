import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const App = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);
  const onSave = useCallback(() => saveToServer(name, age), [name, age]);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit onSave={onSave} setName={setName} setAge={setAge} />
      <p>{`v1: ${v1}`}</p>
      <button
        onClick={() => {
          setV1(Math.random());
        }}
      >
        v1 수정
      </button>
    </div>
  );
};
const saveToServer = (name, age) => {};

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  //onsave가 새로운 함수로 만들어 젼달되기 때문에 react.memo를 했음에도 계속 아래 콘솔로그가 출력된다
  console.log("useredit render");
  return null;
});

export default App;
