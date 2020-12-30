import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";

export const ProfileDispatch = React.createContext(null);
const App = (props) => {
  //상태값을 변경할수있는 dispatch 함수가 반환이 된다.
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
};

const INITIAL_STATE = { name: "empty", age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    default:
      return state;
  }
}

export default App;
