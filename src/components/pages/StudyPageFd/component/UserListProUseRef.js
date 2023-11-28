import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

function User({ user }) {
  return (
    <>
      <div>
        <MDBContainer>
          <MDBRow className="m-5">
            <MDBCol>
              <p>아이디 : {user.id}</p>
            </MDBCol>

            <MDBCol>
              <p>이메일 : {user.email}</p>
            </MDBCol>
            <MDBCol>
              <p>계정명 : {user.username}</p>
            </MDBCol>
            <MDBCol>
              <p>학번: {user.number}</p>
            </MDBCol>
            <MDBCol>
              <p>이름: {user.myname}</p>
            </MDBCol>
            <MDBCol>
              <p>학교 : ({user.classRoom})</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

function UserListProUseRef({ users }) {
  return (
    <div>
      <MDBContainer>
        <MDBRow className="p-5 text-justify">
          <MDBCol>
            {users.map(
              (user) => (
                <User user={user} key={user.id} />
              ) // key 가 존재 해야 지정된 값을 정확히 빼고 더할 수 있게 된다. 키가 없는경우 렌더링이 이상해 짐..
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default UserListProUseRef;
