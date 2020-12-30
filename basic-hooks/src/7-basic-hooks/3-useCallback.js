import React, { useEffect, useMemo, useRef, useState } from "react";

export default  App = (props) => {
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [v1,setV1] = useState(0);


  return (
    <div>
        <p>{`name is ${name}`}</p>
        <p>{`age is ${age}`}</p>
        <UserEdit
            onSave={()=> saveToServer(name,age)}
            setName={setName}
            setAge={setAge}
        />
        <p>{`v1: ${v1}`}</p>
        <button onClick={()=>{
            setV1(Math.random())
        }}>v1 수정</button>
    </div>
  );
};
const saveToServer = (name,age) => {

}

const UserEdit = React.memo(function ({onSave,setName,setAge}){
    console.log('useredit render');
    return null;
}
