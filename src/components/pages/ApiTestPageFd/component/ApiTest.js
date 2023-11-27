import React, { useState, useEffect} from "react";
import axios from 'axios';
import { MDBBtn, MDBCol, MDBContainer } from "mdbreact";

const ApiTest = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try{
            setUsers(null);
            setError(null);
            setLoading(true);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'
            );
            setUsers(response.data);
        }catch (e) {
            setError(e);
        }
        setLoading(false);
    };

useEffect (() => {

  fetchUsers();
}, []);

if (loading) return <div>로딩중...</div>
if (error) return <div>에러가 발생 했습니다.</div>
if (!users) return null;

    return(
        <MDBContainer>
        <MDBCol>
         <ul>
        {users.map(user => (
        <li key={user.id}>
        {user.username} ({user.name})
        </li>
        ))}
    </ul>
    </MDBCol>
    <MDBCol>
        <MDBBtn onClick={fetchUsers}>
            다시 불러오기
        </MDBBtn>
    </MDBCol>
    </MDBContainer>
    );
  }


export default ApiTest;
