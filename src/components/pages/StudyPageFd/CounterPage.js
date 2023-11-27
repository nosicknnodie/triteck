import React, { useRef, useState } from "react";
import { Link } from 'react-scroll';
import './CounterPage.css';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation
}

from 'mdbreact';

import './CounterPage.css';
import CounterComponent from "./component/CounterComponent";
import InputSample from "./component/InputSample";
import InputSample2 from "./component/InputSample2";
import UserList from "./component/UserList"
import ColGridSystem from "./component/ColGridSystem";
import CreateUser from "./component/CreateUser";
import TopImgPage from "../component/TopImgPage";
import UserListPro from "./component/UserListPro";
import UserListProUseRef from "./component/UserListProUseRef";

function CounterPage () {

  // input 에서 사용할 상태를 설정
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
    number:'',
    myname:'',
    classRoom:'',


  });

  //  username, email 을 input 에서 밖으로 꺼낸다. (추출)
  const { username, email, number,myname, classRoom  } = inputs;

  //
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
       // name 이 가르키는 곳은 CreateUser.js 의 name 이다. (ex: name = "username" or name = "email") 둘중 어느것도 name이 될 수 있다.
    })
  };


  //UserListProUseRef 에 Props 로 연결 되어 있음.  users 배열 선언
  // 컴포넌트 상태 관리로 형식으로 변경하여 데이터를 추출
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        number: 10,
        myname: '조한주',
        classRoom: '대인고등학교'
    },
    // {
    //     id: 2,
    //     username: 'tester',
    //     email: 'tester@example.com',
    //     number: 14,
    //     name: '최호생',
    //     classRoom: '2반'
    // },
    // {
    //     id: 3,
    //     username: 'Liz',
    //     email: 'Liz@gmail.com',
    //     number: 23,
    //     name: '박성준',
    //     classRoom: '3반'
    // },

]);



//    const users =[
//     {
//         id: 1,
//         username: 'velopert',
//         email: 'public.velopert@gmail.com',
//         number: 10,
//         name: '조한주',
//         classRoom: '1반'
//     },
//     {
//         id: 2,
//         username: 'tester',
//         email: 'tester@example.com',
//         number: 14,
//         name: '최호생',
//         classRoom: '2반'
//     },
//     {
//         id: 3,
//         username: 'Liz',
//         email: 'Liz@gmail.com',
//         number: 23,
//         name: '박성준',
//         classRoom: '3반'
//     },

// ];

 const nextId = useRef(2); // useRef 는 특정 Dom을 선택하기 위해 사용될 수도 있지만,  변수를 계속 기억하고 싶을때 - 컴포넌트가 리렌더링 되도 useRef 변수는 기억된다.
  // useRef를 사용한 이유는 4 라는 값이 바뀌기 위해서 컴포넌트 전부가 리 렌더링 될 필요가 없기 때문에 변수로 관리하는것이 좋음 (useState로 관리해도 상관은 없음)

 const onCreate = () => {
   // 새로운 user 객체를 만든 후 , setUsers(배열)를 호출할때는 ([...users, user]) 형식을 사용한다.
   // ...users 기존 배열 복사 후 복사된 새로운 배열을 만들고 그뒤에 user를 삽입 하면 새 항목이 추가된다.

   const user = { // 요것이 새 항목임 (데이터를 추가 할때 사용됨)
     id: nextId.current,
     username,
     email,
     number,
     myname,
     classRoom,
   };

   // 요것이 복사된 새 배열, 기존 배열 항목은 건드리지 않으면서 새 항목을 추가시킴 ( 추가방법 1)
  //  setUsers([...users, user])


  // 또 다른 방법으로 새 배열 생성 하는 법!!!
  setUsers(users.concat(user)); // 기존 users + 새 user 항목을 더한다 (concat)으로. (추가방법 2)


   setInputs({
     username:'',
     email:'',
     number:'',
     myname:'',
     classRoom:'',
   });

   // onCreate 가 호출될때 4 가 된다.
   console.log(nextId.current); // 현재 상태 값!


    //nextId.current += 1; 설정값! -> 이후 값은 바뀌게 된다.  하지만 값이 바뀌더라도 컴포넌트는 리렌더링 되지 않는다.
    // 그 다음 생성시에는 useRef(4) 값에 + 1을 시키는 코드를 입력한다 (아래)
    nextId.current += 1; // +1 이 더해져서 다음값은 5가 된다.
 }
     return (
      <>
      <TopImgPage/>

   <MDBContainer className="mainContainer">

   <MDBRow className="rowUserListProUseRef">
         <MDBAnimation reveal type='fadeInUp'>
           <MDBCol>
           <CreateUser
           username={username}
           email={email}
           number={number}
           myname={myname}
           classRoom={classRoom}
           onChange={onChange}
           onCreate={onCreate}
           />
           </MDBCol>
          <MDBCol>
        <UserListProUseRef users={users}/>
        </MDBCol>
        </MDBAnimation>
        </MDBRow>


   <MDBAnimation reveal type='fadeInUp'>
     <MDBRow>

       <MDBCol className="colCounterComponent col-lg-10 col-md-12">
       <section id="idCounterComponent">
         <MDBRow className="rowCounterComponent">

         <CounterComponent/>

         </MDBRow>

         <MDBRow className="rowInputSample">
         <MDBAnimation reveal type='fadeInUp'>
         <InputSample/>
         </MDBAnimation>
         </MDBRow>
         <MDBRow className="rowInputSample2">
         <MDBAnimation reveal type='fadeInUp'>
         <InputSample2/>
         </MDBAnimation>
        </MDBRow>

        <MDBRow className="rowUserList">

         <UserList/>

        </MDBRow>

        <MDBRow className="rowUserListPro">
         <MDBAnimation reveal type='fadeInUp'>

        <UserListPro/>

        </MDBAnimation>
        </MDBRow>



        <MDBRow className="rowColGridSystem">
        <ColGridSystem/>
        </MDBRow>
        </section>

       </MDBCol>

       <MDBCol  className="colSideList col-md-2" >
        <section id="idSideList" >

          <MDBRow className="rowSideList">

         <ul style={{paddingLeft:30}}>
         <MDBCol className="advertisement">
        Study List
       </MDBCol>
         <Link className="liCounterLink" activeClass="active" to="rowCounterComponent" spy={true} smooth={true} duration={700}>
           <li>Counter</li>
         </Link>
         <Link className="liCounterLink" activeClass="active" to="rowInputSample" spy={true} smooth={true} duration={700}>
           <li>Input</li>
         </Link>
         <Link className="liCounterLink" activeClass="active" to="rowInputSample2" spy={true} smooth={true} duration={700}>
           <li>Input2</li>
         </Link>
         <Link className="liCounterLink" activeClass="active" to="rowUserList" spy={true} smooth={true} duration={700}>
           <li>UserList</li>
           </Link>
         <Link className="liCounterLink" activeClass="active" to="rowUserListPro" spy={true} smooth={true} duration={700}>
           <li>UserListPro</li>
         </Link>
         <Link className="liCounterLink" activeClass="active" to="rowUserListProUseRef" spy={true} smooth={true} duration={700}>
           <li>UserListProUseRef</li>
         </Link>
        <Link className="liCounterLink" activeClass="active" to="rowColGridSystem" spy={true} smooth={true} duration={700}>
        <li>GridSystem</li>
        </Link>

         </ul>
       </MDBRow>
          </section>
       </MDBCol>




     </MDBRow>
     </MDBAnimation>


   </MDBContainer>



      </>
    );
   };

export default CounterPage;
