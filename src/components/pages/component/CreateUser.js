import { MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';

function CreateUser({ username, email, number, myname, classRoom, onChange, onCreate}) { 
// onChange : inPut 값이 바뀌었을때 처리해 주는 함수.
// onCreate : 버튼을 눌렀을때 새로운 항목을 등록 해 주는 함수.
return(

<div>
 <MDBContainer>
     <MDBRow className="ml-5">
    <input
    name="username"
    placeholder="계정명"
    onChange={onChange}
    value={username}
    />

   <input
    name="email"
    placeholder="이메일"
    onChange={onChange}
    value={email}
    />

    
   <input
    name="number"
    placeholder="번호"
    onChange={onChange}
    value={number}
    />

    
   <input
    name="myname"
    placeholder="이름"
    onChange={onChange}
    value={myname}
    />

<input
    name="classRoom"
    placeholder="학교"
    onChange={onChange}
    value={classRoom}
    />


    <button onClick={onCreate}>등록</button>
    </MDBRow>
    </MDBContainer>

    </div>
)

};

export default CreateUser;