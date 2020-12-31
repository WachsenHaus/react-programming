const { memo } = require("react");

//jsx코드에서 if 조건문을 무분별하게 사용하면 jsx코드는 금방 복잡해진다
const v1 = "ab" && 0 && 2; //v1 ===0
const v2 = "ab" && 2 && 3; // v2 ===3
const v3 = "ab" || 0; //v3 === 'ab'
const v4 = "" || 0 || 3; //v4 === 3
function Greeting({ isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isLogin && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
    </div>
  );
}

//boolean형으로 완전한 변환을 해주자
//null이 아니라고 명시를 해주자 이유는 빈문자열인 경우는 빈문자열만 출력이 되기 때문이다.  cash도 0인경우 표시해주고싶을떄.null이 아니면 해야함. 
  <div>
      {!!cash != null <p>{cash}원 보유중</p>}
      {memo != null && <p>{200 - memo.length}자 입력 가능</p>}
      </div>
