/* eslint-disable react/jsx-pascal-case */
import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBView,
  MDBFooter,
  // MDBCard,
  // MDBCardBody,
  // MDBCardImage,
  // MDBCardTitle,
  // MDBCardText,
  // MDBCardFooter,
  // MDBIcon,
  // MDBBtn,
  // MDBMask,
} from "mdbreact";
import "./Field.css";
import EcommercePage_Field from "../../component/EcommercePage_Field";
import Copyrights from "../../../Footer";
// import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
// import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";

class Field extends React.Component {
  render() {
    return (
      <div id="Field">
        <div className="fieldWeb">
          <TopImgPageFieldPage />
        </div>
        <div className="fieldMobile">
          <TopImgPageFieldPageMobile />
        </div>

        <MDBContainer className="topLinkPageWeb mt-5">
          <MDBRow>
            <MDBCol>{/* <TopLinkPage/> */}</MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="topLinkPageMobile mt-5">
          <MDBRow>
            <MDBCol>{/* <TopLinkPageMobile/> */}</MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <EcommercePage_Field />
        </MDBContainer>

        <MDBContainer>{/* <JumbotronPage_Field/> */}</MDBContainer>

        <MDBFooter className="pt-3 mt-5 text-center text-md-left">
          <Copyrights />
        </MDBFooter>
      </div>
    );
  }
}

export default Field;
