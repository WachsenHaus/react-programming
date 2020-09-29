import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function Container(){
    return React.createElement(
        'div',
        null,
        React.createElement('p',null,'버튼을 클릭해 주세요.'),
        //일반적으로 createElement를 사용하지않고 jsx문법을 사용한다. 이유는 훨씬 가독성이 좋기 때문이다.
        //하지만 매개변수를 설명해보겠다.
        //첫번째 매개변수는 문자열이나, 리액트 컴포넌트이다. p이면 html p태그가 생성된다.
        //두번째 매개변수는 props는 컴포넌트가 사용하는 데이터를 나타낸다. 돔 요소의 경우 style,classname등의 데이터가 사용될 수 있다.
        //세번째 매개변수는 children은 해당 컴포넌트가 감싸고 있는 내부의 컴포넌트를 가리킨다. 
        //ex createElement('p',null,'world');
       
        React.createElement(Button,{label:"좋아요"}),
        React.createElement(Button,{label:"싫어요"}),
    );
}
const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container),domContainer);