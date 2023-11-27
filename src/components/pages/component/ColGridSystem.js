import React from 'react';

import './ColGridSystem.css'

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBMask,
    MDBIcon,
    MDBView,
    MDBFooter,
    MDBCard,
    MDBCardBody,
    MDBBtn
  
  }
  from 'mdbreact';

function ColGridSystem () {

    return(
        <section>
            <MDBContainer>

        <MDBRow className="counterRow text-white text-center bg-primary">
        <MDBCol class="col-4">.col-4</MDBCol>
        <MDBCol class="col-4">.col-4</MDBCol>
        <MDBCol class="col-4">.col-4</MDBCol>
      </MDBRow>
 
 
 <MDBRow className="counterRow text-white text-center bg-secondary">
   <MDBCol class="col-sm-4">.col-sm-4</MDBCol>
   <MDBCol class="col-sm-4">.col-sm-4</MDBCol>
   <MDBCol class="col-sm-4">.col-sm-4</MDBCol>
 </MDBRow>
 
 <MDBRow className="counterRow text-white text-center bg-success">
   <MDBCol class="col-md-4">.col-md-4</MDBCol>
   <MDBCol class="col-md-4">.col-md-4</MDBCol>
   <MDBCol class="col-md-4">.col-md-4</MDBCol>
 </MDBRow>
 
 <MDBRow className="counterRow text-white text-center bg-danger">
   <MDBCol class="col-lg-4">.col-lg-4</MDBCol>
   <MDBCol class="col-lg-4">.col-lg-4</MDBCol>
   <MDBCol class="col-lg-4">.col-lg-4</MDBCol>
 </MDBRow>
 
 <MDBRow className="counterRow text-white text-center bg-warning">
   <MDBCol class="col-xl-4">.col-xl-4</MDBCol>
   <MDBCol class="col-xl-4">.col-xl-4</MDBCol>
   <MDBCol class="col-xl-4">.col-xl-4</MDBCol>
 </MDBRow>
 </MDBContainer>
 </section>

    )
}

export default ColGridSystem;