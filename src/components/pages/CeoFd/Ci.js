import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import "./Ci.css";
import "../../../common/form/contentDesign.css";
import "../../../common/form/contentFont.css";
import TopImgContactedMobile from "../TopImgFd/TopImgContactedMobile";
import TopImgContactedWeb from "../TopImgFd/TopImgContactedWeb";
import Copyrights from "../../Footer";
// import * as contentDesign from "../../../common/form/contentDesign.js";

class Ci extends Component {
  render() {
    // const MAIN_COLOR = "#33B5E5";
    // const SUB_BAR_COLOR = "2A99EA";
    const GRAY_COLOR = "#565656";

    return (
      <div id="ci">
        <div className="topImgDesktopMode">
          <TopImgContactedWeb />
        </div>
        <div className="topImgMobileMode">
          <TopImgContactedMobile />
        </div>

        {/* --------------Ci설명--------------- */}
        <section id="pageTitleSection">
          <MDBContainer>
            <MDBContainer className="mainContent">
              <MDBRow>
                <MDBCol>
                  <title1 style={{ color: "black" }}>기관상징(CI)</title1>
                  <br />
                  <br />
                  {/* </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer className="mainContent">
              <MDBRow>
                <MDBCol className="desc"> */}
                  <p style={{ color: GRAY_COLOR }}>
                    트라이텍 업무영역의 대표 3축인 Virtual, Art, Clean을
                    상징하는 ‘T’의 로고 타입을 미래지향적이고
                    <br /> 속도감 있는 분위기로 해석하여 사업 로고를
                    구체화했습니다.
                    <br />
                    Peacock(청록) + Navy Blue(짙은 청색)의 그라데이션 컬러로
                    항상 변화하고 신뢰감 있는 분위기를 연출합니다.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
        </section>

        {/* --------------단일로고 이미지--------------- */}
        <section id="wideImgInGrayBgSection">
          <MDBContainer>
            <MDBRow className="mainContent">
              <MDBCol md="1"></MDBCol>
              <MDBCol md="10">
                <section id="singLogoImg">
                  <img
                    className="img-fluid"
                    src="/img/logo/tritech-logo-md.png"
                    alt=""
                  />
                </section>
              </MDBCol>
              <MDBCol md="1"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* --------------로고요소 설명 및 다운로드--------------- */}
        <section id="wideImgSection">
          <MDBContainer className="mainContent">
            <MDBRow>
              {/* <MDBCol md="1"></MDBCol>
              <MDBCol md="10"> */}
              <MDBCol>
                <img
                  className="img-fluid"
                  src="/img/logo/tritech-logo-ci-desc.png"
                  alt=""
                />
              </MDBCol>
              {/* <MDBCol md="1"></MDBCol> */}
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <br />
                <br />
                <br />
                <br />
                <p>
                  CI는 기본적으로 위 3타임으로 사용합니다. 임의로 혼용/변형하여
                  사용하지 마세요.
                </p>
                <br />
                <div>
                  <MDBBtn
                    color="indigo"
                    size="sm"
                    // href="/downloads/tritech-ci-download.zip"
                    href="https://tritech.s3.ap-northeast-2.amazonaws.com/tritech-ci-download.zip"
                    target="blank"
                  >
                    <MDBIcon far icon="clone" className="left" /> CI 다운로드
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Copyrights />
      </div>
    );
  }
}

export default Ci;
