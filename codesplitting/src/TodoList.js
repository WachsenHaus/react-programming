import React, { useState } from 'react';

export default function TodoList(){
    const [todos,setTodos] = useState([]); //할일 목록을 관리할 상탯값을 정의
    const onClick = () => { //할 일 추가 버튼을 클릭하면 호출되는 이벤트 처리 함수.
        import('./todo.js').then(({todos}) => { //onClick함수가 호출되면 비동기로 Todo모듈을 가져온다. 동적 임포트는 프로미스를 반환하기 때문에 then메소드를 이용해서 이후 동작을 정의 할 수 있다. 
            const position = todos.length + 1;
            const newTodo = <Todo key={position} title={`할 일 ${position}`}/> //4.비동기로 가져온 todo컴포넌트를 이용해서 새로운 할 일을 만든다.
            setTodos([...todos,newTodo]);
        });
    };
    return(
        <div>
            <button onClick={onClick}>할 일 추가</button>
            {todos}   {/*5. 상탯값에 저장된 할 일 목록을 모두 출력한다.  */}
        </div>
    );
}
