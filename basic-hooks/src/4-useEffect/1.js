//의존성 배열을 다루기가 까다롭다. 대부분 입력안해도 되지만 종종 필요하다.
//잘못관리하면 쉽게 버그로 된다. 가능하면 입력하지말자.

const { useEffect } = require("react");

function Profile({ userId }) {
  const [user, setUser] = useState();

  useOnMouted(() => fetchUser(userId).then((data) => setUser(data)));
}

//useOnMounted라고해서 마운트 됐을때만 작동을 하는 훅을 하나 만들면 될 듯

function useOnMouted(effect) {
  useEffect(effect, []);
}

function fetchUser() {}
