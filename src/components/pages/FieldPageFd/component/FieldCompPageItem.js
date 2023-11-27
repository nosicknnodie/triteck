
import React, { useState, useReducer, useContext, Fragment } from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBLink } from "mdbreact";
import { store } from '../../../../common/Store';
import './FieldCompPageItem.css';
const FieldCompPageItem = ({fcpi}) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const { kor, eng, file, content, Project, link, alt } = fcpi;
  //var path  = "images/champions/model/";
  let path  = "/img/FieldIndex/field/";
  let src = path+file;

  const onSelectCommunityPublic = (name) => {
    dispatch({
        type: "CHANGE_LEVEL",
        level: {
            step: 1,
        }
    })


}
  return (
<section id="fieldId">
    <MDBCard className="fieldCardBody">
      <MDBCardBody className="mt-0 mb-5">
                 
        <MDBRow>
          <MDBCol lg="6">
            <MDBView className="rounded mb-lg-0 mb-4" hover waves zoom>
              <img
                className="img-fluid"
                src={src}
                alt={alt}            
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="6">
            <a href="#!" className="grey-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon className="pr-2" />
               {Project}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{kor}</strong>
            </h3>
            <p>
          {content}
            </p>
           
        <MDBBtn rounded color="blue" style={{fontSize:"10px"}} href={link}>
          View More
        </MDBBtn>
         
        
          </MDBCol>
          
        </MDBRow>    
      </MDBCardBody>
      
    </MDBCard>

    
    </section>

  );
}

export default FieldCompPageItem;