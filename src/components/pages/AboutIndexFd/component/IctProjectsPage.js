import React, { Fragment } from "react";
import {
  MDBCardText,
  MDBCardVideo,
  MDBCardGroup,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBCardBody,
  // MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBCard,
} from "mdbreact";
import "../../../../common/form/contentDesign.css";
import * as contentDesign from "../../../../common/form/contentDesign.js";

const IctProjectsPage = () => {
  const MAIN_COLOR = "#F7966D";
  const GRAY_COLOR = "#565656";
  return (
    <>
      {/* --------------title--------------- */}
      <section id="pageTitleSection">
        <title1 style={{ color: MAIN_COLOR }} className="mb-1">
          ICT기반 원전해체
        </title1>
        <br />
        <title4 style={{ color: GRAY_COLOR }}>
          ICT기반 원자력 안전혁신기술 개발사업
        </title4>
      </section>
      <section id="bar">
        <MDBContainer>
          <hr className="line" style={{ borderColor: MAIN_COLOR }} />
          {/* <p>
            원자력시설 및 설비의 해체를 가상 현실 하에서 수행하여 실증 실험과
            같은 효과를 거둘수있는 <br />
            ICT 기반 원격해체 모듈을 통합하여 가상 Simulation 시스템 개발
          </p> */}
        </MDBContainer>
      </section>

      {/* --------------overview--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="titleContainer">
              <img src="/img/aboutIndex/dlpp/ictLogo.png" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="desc">
              <p>
                원자력시설 및 설비의 해체를 가상 현실 하에서 수행하여 실증
                실험과 같은 효과를 거둘수있는 <br />
                ICT 기반 원격해체 모듈을 통합하여 가상 Simulation 시스템 개발
              </p>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              {contentDesign.addImgView(
                "/img/aboutIndex/dlpp/ict-overview.png",
              )}
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------technology--------------- */}
      <section id="wideImgInGrayBgSection">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="titleContainer">
              <img src="/img/aboutIndex/dlpp/ictLogo2.png" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="desc">
              <p>
                원전해체 공정기술 및 원격원전 해체를 위한 필요 로봇기술,
                <br />
                5G 통신기술을 통한 실시간 원격해체 공정기술,
                <br /> AI 기술을 통한 최적의 원격해체 공적 시나리오 도출 및
                기술,
                <br />
                가상 해체환경 개발 기술
              </p>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              {contentDesign.addImgRoundedView(
                "/img/aboutIndex/dlpp/ict-technology.jpg",
              )}
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------effects--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="titleContainer">
              <img src="/img/aboutIndex/dlpp/ictLogo3.png" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="desc">
              <p>
                복잡한 원전 해체 절차를 가상현실로 모사하여 다양한 해체 공정
                시나리오를 적용하여
                <br /> 해체 절차 및 장비 문제점 등을 분석/평가
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mainContent">
            <MDBContainer>
              <MDBRow>
                {contentDesign.addVideoInCol([
                  {
                    videoTitle: "Haptic 연동 RVI 절단시뮬레이션",
                    videoPath:
                      "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/ict-project-demo-haptic.mp4",
                    videoRatio: "16by9",
                    videoDesc: [
                      "작업자의 숙련도를 높여 해체 공정 시스템 최적화 (ALARA) 해체",
                      "공정 시스템에 사용되는 장비 에뮬레이션 모델을 통해 해체",
                      "공정에 대한 모의실험으로 해체 공정 전략을 구축에 대한 안전성 및 신뢰성 평가 기여",
                    ],
                  },
                  {
                    videoTitle: "RVI Decommissioning Simulation System",
                    videoPath:
                      "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/ict-project-demo-bexco.mp4",
                    videoRatio: "16by9",
                    videoDesc: [
                      "원격해체 시스템 아키텍처 기획 및 설계",
                      "실시간 동적 Mesh 절단 알고리즘 연구 및 라이브러리 적용",
                      "3D 공간 그리드를 사용한 자동 절단 경로 설정 방법론 개발",
                      "원전시설과 해체장비를 통합한 절단 시뮬레이션 시스템 개발",
                    ],
                  },
                ])}
              </MDBRow>
            </MDBContainer>
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
                <img src="/img/aboutIndex/dlpp/ictLogo4.png" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mainContent">
            <MDBRow sm="12" className="mb-2">
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/dlpp/Remote.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>원 격 제 어</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/dlpp/Digital.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>디지털트윈</h5>
              </MDBCol>
            </MDBRow>

            <MDBRow sm="12" className="mainContentText">
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/dlpp/system.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>시스템 최적화</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/dlpp/Experiment.png" />
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
              <MDBCol xl="1 mb-1"></MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Kimm-sm.jpg" />
              </MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Smu.png" />
              </MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Hanyang.png" />
              </MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Pusan.png" />
              </MDBCol>
              <MDBCol xl="2 mb-1">
                <img src="/img/network/Pacom.png" />
              </MDBCol>
              <MDBCol xl="1  mb-1"></MDBCol>
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

export default IctProjectsPage;
