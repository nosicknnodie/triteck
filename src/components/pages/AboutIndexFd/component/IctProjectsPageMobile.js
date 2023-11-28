/* eslint-disable jsx-a11y/alt-text */
import {
  // MDBCardBody,
  // MDBCardGroup,
  MDBBtn,
  MDBCol,
  // MDBView,
  // MDBMask,
  MDBContainer,
  // MDBCardText,
  // MDBCardTitle,
  // MDBCardVideo,
  MDBRow,
} from "mdbreact";
import { Fragment } from "react";
import * as contentDesign from "../../../../common/form/contentDesign.js";
import "../../../../common/form/contentDesignMobile.css";

const IctProjectsPage = () => {
  const MAIN_COLOR = "#F7966D";
  const SUB_BAR_COLOR = "F4B86E";
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
        </MDBContainer>
      </section>

      {/* --------------overview--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol className="titleIcon">
                <img src="/img/aboutIndex/dlpp/dlpp_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <spacingEngText style={{ color: GRAY_COLOR }}>
                  Decommissioning Simulation
                </spacingEngText>
                <br />
                <title2Light style={{ color: MAIN_COLOR }}>
                  OVERVIEW
                </title2Light>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr className="line" style={{ borderColor: SUB_BAR_COLOR }} />
          <MDBContainer>
            <MDBRow>
              <MDBCol className="desc">
                <p>
                  원자력시설 및 설비의 해체를 가상 현실 하에서 수행하여 실증
                  실험과 같은 효과를 거둘수있는 <br />
                  ICT 기반 원격해체 모듈을 통합하여 가상 Simulation 시스템 개발
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mainContent">
              <MDBCol>
                {contentDesign.addImgView(
                  "/img/aboutIndex/dlpp/ict-overview.png"
                )}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

      {/* --------------technology--------------- */}
      <section id="wideImgInGrayBgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol className="titleIcon">
                <img src="/img/aboutIndex/dlpp/dlpp_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <spacingEngText style={{ color: GRAY_COLOR }}>
                  Development
                </spacingEngText>
                <br />
                <title2Light style={{ color: MAIN_COLOR }}>
                  TECHNOLOGY
                </title2Light>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr className="line" style={{ borderColor: SUB_BAR_COLOR }} />
          <MDBContainer>
            <MDBRow className="mainContent">
              <MDBCol>
                {contentDesign.addImgRoundedView(
                  "/img/aboutIndex/dlpp/ict-technology.jpg"
                )}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="desc">
                <p>
                  <br />
                  자체 원전해체 공정기술 및 원격원전 해체를 위한 필요 로봇기술,
                  <br />
                  5G 통신기술을 통한 실시간 원격해체 공정기술,
                  <br />
                  AI 기술을 통한 최적의 원격해체 공적 시나리오 도출 및 기술,
                  <br />
                  가상 해체환경 개발 기술
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

     {/* --------------rvi--------------- */}
     <section id="wideImgInGrayBgSection">
        <MDBContainer>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="12">
              {contentDesign.addImgView(
                "/img/aboutIndex/dlpp/Platform.png"
              )}
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="12">
              {contentDesign.addImgView(
                "/img/aboutIndex/dlpp/exhibition.png"
              )}
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------effects--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol className="titleIcon">
                <img src="/img/aboutIndex/dlpp/dlpp_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <spacingEngText style={{ color: GRAY_COLOR }}>
                  Expectancy
                </spacingEngText>
                <br />
                <title2Light style={{ color: MAIN_COLOR }}>EFFECTS</title2Light>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <hr className="line" style={{ borderColor: SUB_BAR_COLOR }} />

          <MDBContainer>
            <MDBRow>
              <MDBCol className="desc">
                <p>
                  복잡한 원전 해체 절차를 가상현실로 모사하여 다양한 해체 공정
                  시나리오를 적용하여
                  <br /> 해체 절차 및 장비 문제점 등을 분석/평가
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mainContent">
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
            <MDBRow>
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/JYHal68ZDNM" title="초고난도 원전 해체!...실제 같은 시뮬레이터로 연습 / YTN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

      {/* --------------Area--------------- */}
      <section id="wideImgInGrayBgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol className="titleIcon">
                <img src="/img/aboutIndex/dlpp/dlpp_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <spacingEngText style={{ color: GRAY_COLOR }}>
                  Application
                </spacingEngText>
                <br />
                <title2Light style={{ color: MAIN_COLOR }}>AREA</title2Light>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr className="line" style={{ borderColor: SUB_BAR_COLOR }} />
        </MDBContainer>

        <MDBContainer className="mainContent">
          <MDBRow>
            <MDBCol>
              <img src="/img/aboutIndex/dlpp/Remote.png" />
            </MDBCol>
            <MDBCol>
              <img src="/img/aboutIndex/dlpp/Digital.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-5">
            <MDBCol className="text-center mt-3">
              <h6>원 격 제 어</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>디 지 털 트 윈</h6>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <img src="/img/aboutIndex/dlpp/system.png" />
            </MDBCol>
            <MDBCol>
              <img src="/img/aboutIndex/dlpp/Experiment.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol className="text-center mt-3">
              <h6>시스템 최적화</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>실험분석 / 응용 / 관리</h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* ============================================= */}
      {/* ============================================= */}
      {/* ============================================= */}

      {/* --------------net work--------------- */}

      <section id="bar">
        <MDBContainer className="mainContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <hr className="line" style={{ color: MAIN_COLOR }} />
              </MDBCol>
              <MDBCol>
                <title2 style={{ color: MAIN_COLOR }}>Net Work</title2>
              </MDBCol>
              <MDBCol>
                <hr className="line" style={{ color: MAIN_COLOR }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mt-3">
            <MDBRow className="text-center">
              <MDBCol>
                <img src="/img/aboutIndex/dlpp/Kimm.png" />
              </MDBCol>
              <MDBCol>
                <img src="/img/aboutIndex/dlpp/Smu.png" />
              </MDBCol>
              <MDBCol>
                <img src="/img/aboutIndex/dlpp/Hanyang.png" />
              </MDBCol>
              <MDBCol>
                <img src="/img/aboutIndex/dlpp/Pusan.png" />
              </MDBCol>
              <MDBCol>
                <img src="/img/aboutIndex/dlpp/Pacom.png" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

      {/* --------------contact us--------------- */}
      <MDBContainer>
        <MDBRow className="mt-5 mb-5 pb-5" center>
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
