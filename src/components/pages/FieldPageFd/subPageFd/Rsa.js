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
  // MDBTooltip,
  // MDBCardFooter,
  // MDBIcon,
  // MDBBtn,
  // MDBMask,
} from "mdbreact";
import "./Rsa.css";
import Copyrights from "../../../Footer";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import EcommercePage_Rsa from "../../component/EcommercePage_Rsa";
class Rsa extends React.Component {
  render() {
    return (
      <div id="Rsa">
        <div className="rsaWeb">
          <TopImgPageFieldPage />
        </div>
        <div className="rsaMobile">
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
          <EcommercePage_Rsa />
        </MDBContainer>

        <MDBContainer>{/* <JumbotronPage_Rsa/> */}</MDBContainer>

        <MDBFooter className="pt-3 mt-5 text-center text-md-left">
          <Copyrights />
        </MDBFooter>
      </div>
    );
  }
}

export default Rsa;
