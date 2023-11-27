import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import React from 'react';
import Users from './component/Users';


const ApiTestPage = () => {

    return(
        <MDBContainer className="mt-5 pt-5">
            <MDBRow>
                <MDBCol>
<Users/>


                </MDBCol>
            </MDBRow>
        </MDBContainer>



    )
}

export default ApiTestPage;
