
import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBLink } from "mdbreact";
import { useQuery } from '@apollo/react-hooks';
import { GET_FIELDS} from '../../../../common/GraphQL';
import FieldCompPageItem from './FieldCompPageItem';
import './FieldCompPage.css';

const FieldCompPage = (uuid) => {
  const { loading, error, data } = useQuery(GET_FIELDS, { variables: {uuid: uuid}})
    if (loading) return <p>로딩...</p>
    if (error) {
        return (
            <div>{error.message}</div>
        )
    };

    const { fields } = data;

  return (
      <section id="kstarCard">
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody className="kstarCardBody">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          연구분야
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
           Tchnology
       {/* AR.VR  / ART Technology / Clean Energy */}
        </p>
        <MDBRow>
           
           { fields.map((fcpi) =>{
             return(
               <>
             <MDBRow className="mt-0 mb-0">
               
               <FieldCompPageItem fcpi = {fcpi}/>
               
              </MDBRow>
           
               </>
             )
           })

           }
   
         </MDBRow>
      
      </MDBCardBody>
    </MDBCard>
    </section>
  );
}

export default FieldCompPage;