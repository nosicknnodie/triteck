import React, { useState, useContext, useReducer } from "react";
import "./AboutIndex.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBFooter,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

import Copyrights from "../../Footer";
import KstarCompPage from "./component/KstarCompPage";
import { store } from "@/common/Store";
// import TopImgPageFieldPage from '../FieldPageFd/component/TopImgPageFieldPage';
// import TopImgPageFieldPageMobile from '../FieldPageFd/component/TopImgPageFieldPageMobile';
import TopImgPageFieldPage from "../../pages/TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../pages/TopImgFd/TopImgPageFieldPageMobile";

const AboutIndex = () => {
  const globalState = useContext(store);
  const { state } = globalState;
  const { level } = state;

  return (
    <div id="AboutIndex">
      <div className="aboutWeb">{/* <TopImgPageFieldPage /> */}</div>
      <div className="aboutMobile">{/* <TopImgPageFieldPageMobile /> */}</div>
      {/* <TopImgPageAboutIndexLink /> */}

      <MDBContainer className="mainContainer">
        <MDBRow>
          <MDBCol className="colCounterComponent col-lg-12 col-md-12 mt-4">
            <section id="aboutCounterComponent">
              <MDBContainer className="rowCounterComponent">
                <MDBRow className="align-items-center justify-content-center">
                  <MDBContainer className="topLinkPageWeb mt-5">
                    <MDBRow>
                      <MDBCol>{/* <TopLinkPage/> */}</MDBCol>
                    </MDBRow>
                  </MDBContainer>

                  <MDBContainer className="topLinkPageMobile mt-5">
                    <MDBRow>
                      <MDBCol>{/* <TopLinkPageMobile/> */}</MDBCol>
                    </MDBRow>
                    <hr />
                  </MDBContainer>
                  {level.step === 0 && (
                    <MDBContainer>
                      <MDBRow>
                        <KstarCompPage />
                      </MDBRow>
                    </MDBContainer>
                  )}

                  {level.step === 1 && (
                    <MDBContainer>
                      <MDBRow>{/* <KstarCompPage /> */}</MDBRow>
                    </MDBContainer>
                  )}
                </MDBRow>
              </MDBContainer>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* <Copyrights /> */}
    </div>
  );
};

export default AboutIndex;
