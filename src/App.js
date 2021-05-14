import React, {useRef, useState} from 'react';
// import Hello from './Hello';
// import './App.css';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser'

function App() {
  // const name = 'react'
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24, // 기본 단위 px
  //   padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  // }
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // setUsers([...users, user]); spread 연산자 이용
    setUsers(users.concat(user)); // concat 이용
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    // <div>
    //   <Hello />
    //   <div style={style}>{name}</div>
    //   <div className="gray-box"></div>
    // </div>
    // <Wrapper>
    //   <Hello name='react' color='red' isSpecial/>
    //   <Hello color='pink'/>
    // </Wrapper>
    // <Counter/>
    // <InputSample/>
    <>
      <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
