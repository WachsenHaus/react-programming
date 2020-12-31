const { useEffect, useCallback } = require("react");

function Profile({ userId }) {
  const [user, setUser] = useState();
  //userid가 변경될때만 함수가 새로나온다.
  async const fetchAndSetUser(needDetail){
      const data = await fetchAndSetUser(userId,needDetail);
      setUser(data);
  }
  useEffect(() =>{
      //함수의 실행시점을 함수 내에서 조절할 수 있다. 
      if(!user || user.id !== userId){
          fetchAndSetUser(false);
      }
  })
  //속성값과 상태값을 사용하기 때문에 의존성배열에는 함수를 넣는다...
}
