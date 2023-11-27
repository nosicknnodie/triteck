import { MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';

function User({ user }) {
    return (
        <>
        <div>
             <h4>아이디 : {user.id}</h4>
             <h4>이메일 : ({user.email})</h4>
             <h4>학교번호 :  {user.number}</h4>
             <h4>이름은: {user.name}</h4>
              <h4>반은: {user.classRoom}</h4>  
           
        </div>
      

        </>
    )
};


function UserListPro() {
    const users =[
    {
        id: 1, 
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        number: 10, 
        name: '조한주',
        classRoom: '1반'
    },
    {
        id: 2, 
        username: 'tester',
        email: 'tester@example.com',
        number: 14, 
        name: '최호생',
        classRoom: '2반'
    },
    {
        id: 3, 
        username: 'Liz',
        email: 'Liz@gmail.com',
        number: 23, 
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
                <MDBRow className="p-5 text-justify">
               {
                   users.map(
                       user => (<User user={user} key={user.id} />) // key 가 존재 해야 지정된 값을 정확히 빼고 더할 수 있게 된다. 키가 없는경우 렌더링이 이상해 짐.. 
                   )
               }
                </MDBRow>
               

           
            </MDBContainer>
            
            
           

        </div>
    )
}

export default UserListPro;