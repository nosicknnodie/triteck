/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";
import Copyrights from "../../../Footer";
import EcommercePageMobile_Clean from "../../component/EcommercePageMobile_Clean";
import EcommercePage_Clean from "../../component/EcommercePage_Clean";
import "./CleanEnergy.css";
// import TopImgPageFieldPage from '../../TopImgFd/TopImgPageFieldPage';
// import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";

class CleanEnergy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
    };
  }

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    return (
      <div id="CleanEnergy">
        <div className="CleanEnergyWeb">
          <TopImgPageFieldPage />
        </div>
        <div className="CleanEnergyMobile">
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

        <MDBContainer className="ecommerceWeb">
          <EcommercePage_Clean />
        </MDBContainer>

        <MDBContainer className="ecommerceMobile">
          <EcommercePageMobile_Clean />
        </MDBContainer>

        <MDBContainer>{/* <JumbotronPage_CleanEnergy/> */}</MDBContainer>

        <MDBFooter className="pt-3 mt-5 text-center text-md-left">
          <Copyrights />
        </MDBFooter>
      </div>
    );
  }
}

export default CleanEnergy;
