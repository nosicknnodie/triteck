import React from 'react';
import { Link } from 'react-scroll';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBFooter,
  MDBCard, 
  MDBCardBody,
  MDBCardImage,
   MDBCardTitle,
  MDBCardText,
  MDBTooltip, 
  MDBCardFooter, 
  MDBIcon, 
  MDBBtn ,
  MDBNavLink

}

from 'mdbreact';



const AboutIndexLink = () => {
      return (
        <div>
           <MDBCol  className="colSideList col-md-1" >
        <section id="idSideList" >
        
     <MDBContainer className="mt-4 ">
       <MDBRow  style={{height:'20px', width:'900px', color:'white'}}>
     
         <MDBCol 
         className="align-item-center justify-content-center text-align-center col-md-3"
         style={{color:'white', fontWeight: 500}} >
         <Link className="liCounterLink" activeClass="active" to="rowCounterComponent" spy={true} smooth={true} duration={700}>
          연구실적 
          </Link>
         </MDBCol>
         
         <MDBCol className="topPageLink col-md-9" >
           
           <MDBRow>
          
         <Link className="liCounterLink" activeClass="active" to="rowCounterComponent" spy={true} smooth={true} duration={700}>
           <MDBCol className="linkText" style={{color:"black"}}>원전해체</MDBCol>
          </Link>
           <Link className="liCounterLink" activeClass="active" to="rowInputSample" spy={true} smooth={true} duration={700}>
           <MDBCol className="linkText" style={{color:"black"}}>핵융합</MDBCol>
          </Link>
          <Link className="liCounterLink" activeClass="active" to="rowInputSample2" spy={true} smooth={true} duration={700}>
          <MDBCol className="linkText" style={{color:"black"}}>클린에너지</MDBCol>
          </Link>     
          <Link className="liCounterLink" activeClass="active" to="rowUserList" spy={true} smooth={true} duration={700}>
          <MDBCol className="linkText" style={{color:"black"}}>바우처사업</MDBCol>
          </Link>
          <Link className="liCounterLink" activeClass="active" to="rowCreateUser" spy={true} smooth={true} duration={700}>
         <MDBCol className="linkText" style={{color:"black"}}>그 외 사업</MDBCol>
          </Link>
      

          </MDBRow>
        
 
        
        
       
         </MDBCol>
       </MDBRow>
     
       
       </MDBContainer>
          </section>
       </MDBCol>
        </div>
      );
    }
  
  
  export default AboutIndexLink;
  