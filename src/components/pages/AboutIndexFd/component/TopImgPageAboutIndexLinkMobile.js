import React from "react";

import './TopImgPageAboutIndexLinkMobile.css';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBAnimation,
  MDBCard, 
  MDBCardBody,
  MDBInput,
  MDBIcon, 
  MDBBtn,
  MDBMask
  
}

from 'mdbreact';

const TopImgPageAboutIndexLinkMobile = () => {
  
     return (
         <>
 <section id='TopImgPageAboutIndexLinkMobile'>
   <MDBView>
     <MDBRow>
       <MDBCol>
       <MDBMask className='d-flex justify-content-center align-items-center gradient' />
         <MDBContainer>
           <MDBRow className="containTopBg">
             <MDBCol className="rowIconRot mt-5 pt-5" md="6">
             <MDBAnimation
               
               delay='.3s'
               className='white-text text-center text-md-left col-md-12 mt-xl-5 mb-5 animate__animated animate__fadeInRightBig'
             >             
                 <h1 className='h1-responsive font-weight-bold'>
                 TriTech
               </h1>    
               
               <MDBBtn className="btnMobile" color="blue" outline rounded href="/pages/AboutIndexFd/aboutIndex">연구실적</MDBBtn>  
                         
             </MDBAnimation>
             </MDBCol>

             <MDBCol md="6">
               
             </MDBCol>
           </MDBRow>
         </MDBContainer>  
       </MDBCol>
     </MDBRow>
   </MDBView>
  
         </section>

         </>
    
    );
  }


export default TopImgPageAboutIndexLinkMobile;
