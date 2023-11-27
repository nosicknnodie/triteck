import { MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';

function User({ user }) {
    return (
        <>
        <div>
             <h4>아이디 : {user.id}</h4>
             <h4>이메일 : ({user.email})</h4>
             <h4>학교번호 {user.number}</h4>
             <h4>이름은: {user.name}</h4>
              <h4>반은: {user.classRoom}</h4>  
           
        </div>
      

        </>
    )
};


function UserList() {
    const users =[
    {
        id: 1, 
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        number: 1, 
        name: '조한주',
        classRoom: '1반'
    },
    {
        id: 2, 
        username: 'tester',
        email: 'tester@example.com',
        number: 2, 
        name: '최호생',
        classRoom: '2반'
    },
    {
        id: 3, 
        username: 'Liz',
        email: 'Liz@gmail.com',
        number: 3, 
        name: '박성준',
        classRoom: '3반'
    },

];




    return(
        <div>
            {/* <div>
                <b>{users[0].username}</b><span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b><span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b><span>({users[0].email})</span>
            </div> */}
            <MDBContainer>
                <MDBRow className="p-5">
                <User user={users[0]}/>
                </MDBRow>
                <MDBRow className="p-5">
                <User user={users[1]}/>
                </MDBRow>

           
            </MDBContainer>
            
            
           

        </div>
    )
}

export default UserList;