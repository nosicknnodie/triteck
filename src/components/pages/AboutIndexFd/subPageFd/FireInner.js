import React, { Fragment } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardVideo,
  MDBBtn,
} from "mdbreact";
import "./subPageFd.css";
import * as contentDesign from "../../../../common/form/contentDesign.js";

const FireInner = () => {
  const MAIN_COLOR = "#2A99EA";
  const GRAY_COLOR = "#565656";

  return (
    <>
      <section id="pageTitleSection">
        <title1 style={{ color: MAIN_COLOR }} className="mb-1">
          Fire Ladder Vehicle Manipulation Simulator
        </title1>
      </section>

  <section id="wideImgInGrayBgSection">
  <MDBContainer>
    <MDBRow className="mainContent">
      <MDBCol md="1"></MDBCol>
      <MDBCol md="12">
        {contentDesign.addImgView(
          "/img/aboutIndex/fire/fire1.png"
        )}
      </MDBCol>
      <MDBCol md="1"></MDBCol>
    </MDBRow>
    <MDBRow className="mainContent">
      <MDBCol md="1"></MDBCol>
      <MDBCol md="12">
        {contentDesign.addImgView(
          "/img/aboutIndex/fire/fire2.png"
        )}
      </MDBCol>
      <MDBCol md="1"></MDBCol>
    </MDBRow>
    <MDBRow className="mainContent">
      <MDBCol md="1"></MDBCol>
      <MDBCol md="12">
        {contentDesign.addImgView(
          "/img/aboutIndex/fire/fire3.png"
        )}
      </MDBCol>
      <MDBCol md="1"></MDBCol>
    </MDBRow>
    <MDBRow className="mainContent">
      <MDBCol md="1"></MDBCol>
      <MDBCol md="12">
        {contentDesign.addImgView(
          "/img/aboutIndex/fire/fire4.png"
        )}
      </MDBCol>
      <MDBCol md="1"></MDBCol>
    </MDBRow>
    <MDBRow className="mainContent">
      <MDBCol md="1"></MDBCol>
      <MDBCol md="12">
        <MDBCardVideo
                src='https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4'
                ratio='16by9'    
        />
      </MDBCol>
      <MDBCol md="1"></MDBCol>
    </MDBRow>
  </MDBContainer>
  </section>  

      {/* --------------application area--------------- */}
      <section id="wideImgInGrayBgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol md="1"></MDBCol>
              <MDBCol md="11" className="titleLeftImg">
                <img src="/img/aboutIndex/kstar/kstarLogo3.png" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mainContent">
            <MDBRow sm="12" className="mb-2">
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/kstar/vr.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5> 가시화 / 시각화</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/kstar/Digital.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>디지털트윈</h5>
              </MDBCol>
            </MDBRow>

            <MDBRow sm="12" className="mainContentText">
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/kstar/system.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>시스템 최적화</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/kstar/Experiment.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>실험분석/응용/관리</h5>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

      {/* --------------net work--------------- */}

      <section id="bar">
        <MDBContainer className="mainContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <hr className="line" style={{ color: MAIN_COLOR }} />
              </MDBCol>
              <MDBCol>
                <sectionTitle style={{ color: MAIN_COLOR }}>
                  Net Work
                </sectionTitle>
              </MDBCol>
              <MDBCol>
                <hr className="line" style={{ color: MAIN_COLOR }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mt-5">
            <MDBRow xl="12">
              <MDBCol xl="2 mb-1"></MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/KFE.png" />
              </MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Sft.png" />
              </MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Smu.png" />
              </MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Pacom.png" />
              </MDBCol>
              <MDBCol xl="2"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

      {/* --------------contact us--------------- */}
      <MDBContainer>
        <MDBRow className="mt-5 mb-5" center>
          <Fragment>
            <MDBBtn
              color="primary"
              outline
              rounded
              href="/pages/ContactFd/contact"
            >
              CONTACT US!
            </MDBBtn>
          </Fragment>
        </MDBRow>
      </MDBContainer>

  </>
  );
};

export default FireInner;
