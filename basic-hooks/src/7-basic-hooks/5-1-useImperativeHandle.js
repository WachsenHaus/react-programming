import React, { useImperativeHandle, useState } from "react";

function Profile(_, ref) {
  const [name, setName] = useState("mike");
  const [age, setAge] = useState(0);

  //자식요소에서 제공해준것을 부모요소에서 호출할 수 있다.
  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      {/*,,,*/}
    </div>
  );
}

export default Profile();
