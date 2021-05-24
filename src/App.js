import React, {useRef, useState, useMemo, useCallback, useReducer} from 'react';
import Hello from './Hello';
// import './App.css';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser'
// import useInputs from './hooks/useInputs';
import produce from 'immer'
import Counter from './Counter';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs: {
  //   username: '',
  //   email:''
  // },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}

function reducer(state, action) {
  switch (action.type){
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs:{
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
    case 'CREATE_USER':
      // return {
      //   inputs: initialState.inputs,
      //   users: state.users.concat(action.user)
      // };
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id ? { ...user, active: !user.active } : user
      //   )
      // };
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // };
      return produce(state, draft =>{
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state ;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  // const name = 'react'
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24, // 기본 단위 px
  //   padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  // }
  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: ''
  // });
  // const { username, email } = inputs;
  // const onChange = e => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   });
  // };
  // const onChange = useCallback(
  //   e => {
  //     const { name, value } = e.target;
  //     setInputs({
  //       ...inputs,
  //       [name]: value
  //     });
  //   },
  //   [inputs]
  // );
  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   setInputs(inputs => ({
  //     ...inputs,
  //     [name]: value
  //   }));
  // }, []);
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: 'velopert',
  //     email: 'public.velopert@gmail.com',
  //     active:true
  //   },
  //   {
  //     id: 2,
  //     username: 'tester',
  //     email: 'tester@example.com',
  //     active:false
  //   },
  //   {
  //     id: 3,
  //     username: 'liz',
  //     email: 'liz@example.com',
  //     active:false
  //   }
  // ]);

  // const nextId = useRef(4);
  // const onCreate = () => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email
  //   };
  //   // setUsers([...users, user]); spread 연산자 이용
  //   setUsers(users.concat(user)); // concat 이용
  //   setInputs({
  //     username: '',
  //     email: ''
  //   });
  //   nextId.current += 1;
  // };
  // const onCreate = useCallback(() => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email
  //   };
  //   setUsers(users => users.concat(user));

  //   setInputs({
  //     username: '',
  //     email: ''
  //   });
  //   nextId.current += 1;
  // }, [username, email]);

  // const onRemove = id => {
  //   // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //   // = user.id 가 id 인 것을 제거함
  //   setUsers(users.filter(user => user.id !== id));
  // };
  // const onRemove = useCallback(
  //   id => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
    //   setUsers(users.filter(user => user.id !== id));
    // },
    // [users]
  //   []
  // );

  // const onToggle = id => {
  //   setUsers(
  //     users.map(user =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // };
  // const onToggle = useCallback(
  //   id => {
  //     setUsers(
  //       users.map(user =>
  //         user.id === id ? { ...user, active: !user.active } : user
  //       )
  //     );
  //   },
  //   [users]
  // );
  // const onToggle = useCallback(id => {
  //   setUsers(users =>
  //     users.map(user =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // }, []);
  // const count = useMemo(() => countActiveUsers(users), [users]);

  // const [{ username, email }, onChange, onReset] = useInputs({
  //   username: '',
  //   email: ''
  // });

  const [state, dispatch] = useReducer(reducer, initialState);
  // const nextId = useRef(4);

  const {users} = state;
  // const {username,email} = state.inputs;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type:'CHANGE_INPUT',
  //     name,
  //     value
  //   });
  // },[]);

  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   onReset();
  //   nextId.current += 1;
  // }, [username, email, onReset]);

  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   });
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   });
  // }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
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
      {/* <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> */}
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
          // username={username}
          // email={email}
          // onChange={onChange}
          // onCreate={onCreate}
          />
        <UserList users={users}
          // onToggle={onToggle}
          // onRemove={onRemove}
          />
        <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
    </>
  );
}

export default App;
