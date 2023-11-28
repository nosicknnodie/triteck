/* eslint-disable jsx-a11y/alt-text */
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Fragment } from "react";
// import "./KstarProjectsPageMobile.css";
// import "../../../../common/form/contentDesignMobile.css";
import * as contentDesign from "@/common/form/contentDesign.js";
import "@/common/form/contentDesignMobile.css";
import "@/common/form/contentFont.css";

const KstarProjectsPage = () => {
  const MAIN_COLOR = "#2A99EA";
  const SUB_BAR_COLOR = "2A99EA";
  const GRAY_COLOR = "#565656";

  return (
    <>
      {/* --------------title--------------- */}
      <section id="pageTitleSection">
        <title1 style={{ color: MAIN_COLOR }} className="mb-1">
          디지털 트윈 핵융합
        </title1>
        <br />
        <title4 style={{ color: GRAY_COLOR }}>
          디지털트윈 기반의 핵융합에너지 시설운용
        </title4>
      </section>

      <section id="bar">
        <MDBContainer>
          <hr className="line" style={{ borderColor: MAIN_COLOR }} />
          <p>디지털 콘텐츠산업 육성사업 지원성과 우수프로젝트 선정</p>
        </MDBContainer>
      </section>

      {/* --------------overview--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol className="titleIcon">
                <img src="/img/aboutIndex/kstar/kstar-logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <spacingEngText style={{ color: GRAY_COLOR }}>
                  DigitalTwin
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
                  미래핵융합 발전소 디지털트윈을 위한 KSTAR 핵융합 주 장치
                  <br />
                  가상화 감시 정보 시각화를 통한 가상 핵융합 VR 플랫폼 구현
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mainContent">
              <MDBCol>
                {contentDesign.addImgView(
                  "/img/aboutIndex/kstar/kstar-overview.png"
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
                <img src="/img/aboutIndex/kstar/kstar-logo.png" />
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
                {contentDesign.addImgView(
                  "/img/aboutIndex/kstar/kstar-technology.png"
                )}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="desc">
                <p>
                  <br />
                  <ul className="ul">
                    <li>
                      {" "}
                      XR기술을 활용한 KSTAR 핵융합 장치 가상화 및 디스플레이
                      시스템 개발
                    </li>
                    <li>XR기반 KSTAR 핵융합 장치 감시정보 시각화</li>
                    <li>
                      {" "}
                      XR기반 핵융합 물리엔진 구현을 통한 가상 핵융합실험 및
                      공동연구 VR플랫폼 구현
                    </li>
                    <li>
                      디지털 트윈 기반 핵융합 VR플랫폼 교육/훈련 디스플레이
                      시스템
                    </li>
                  </ul>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

      {/* --------------2차사업--------------- */}
      <section id="wideImgSection">
        {/* <title2 style={{ color: "#848484" }}>
          Digital Twin Virtual K STAR
        </title2> */}
        <title1 style={{ color: MAIN_COLOR }} className="mb-1">2차 사업</title1>
        <MDBContainer>
          <MDBRow className="mainContent">
            <MDBContainer>
              <MDBRow className="mainContent">
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">
                  {contentDesign.addImgView(
                    "/img/aboutIndex/kstar/kstar-program-4.jpg"
                  )}
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>

              <MDBRow className="mainContent">
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">
                  {contentDesign.addImgView(
                    "/img/aboutIndex/kstar/kstar-program-5.jpg"
                  )}
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>

              <MDBRow className="mainContent">
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">
                  {contentDesign.addImgView(
                    "/img/aboutIndex/kstar/kstar-program-6.jpg"
                  )}
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>    
            </MDBContainer>          
          </MDBRow>
        </MDBContainer>
      </section>      

      {/* --------------effects--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol className="titleIcon">
                <img src="/img/aboutIndex/kstar/kstar-logo.png" />
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
                  고온 고밀도 핵융합 플라즈마의 장시간 유지 기술 개발 미래 ITER
                  , K-DEMO 건설 및 운영 기술 개발
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mainContent">
            <MDBRow>
              {contentDesign.addVideoInCol([
                {
                  videoTitle: "초전도 핵융합 장치 건설 및 운전기술 확보",
                  videoPath:
                    "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4",
                  videoRatio: "16by9",
                },
                {
                  videoTitle: "디지털트윈 핵융합에너지 시설운용 개발결과",
                  videoPath:
                    "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar-project-result.mp4",
                  videoRatio: "16by9",
                },
              ])}
            </MDBRow>
            <MDBRow>
              {contentDesign.addVideoInCol([
                {
                  videoTitle: "금요일에 과학터치 핵융합에너지 가상 실험",
                  videoPath: "https://www.youtube.com/embed/GSc_YIHcc3Y",
                  videoRatio: "16by9",
                },
                {
                  videoTitle: "2022 KoVAC META Connect Beginning",
                  videoPath: "https://www.youtube.com/embed/xZsykUuA9Lo",
                  videoRatio: "16by9",
                },
              ])}
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>

       {/* --------------img --------------- */}
       <section id="wideImgSection">
        <MDBContainer>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="12">
                  {contentDesign.addImgView(
                     "/img/aboutIndex/kstar/Advanced.png"
                  )}
                </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>     

      {/* --------------img showRoom--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBContainer className="titleContainer">
            <MDBRow>
              <MDBCol className="titleIcon">
                <img src="/img/aboutIndex/kstar/kstar-logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <spacingEngText style={{ color: GRAY_COLOR }}>
                  디지털 콘텐츠산업 우수 프로젝트 선정
                </spacingEngText>
                <br />
                <title2Light style={{ color: MAIN_COLOR }}>
                  NIPA KoVAC XR - 쇼룸 전시기업
                </title2Light>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <hr className="line" style={{ borderColor: SUB_BAR_COLOR }} />

          <MDBContainer>
            <MDBRow className="mainContent">
              <MDBCol>
                {contentDesign.addImgRoundedView(
                  "/img/aboutIndex/kstar/kstar-showroom.jpg"
                )}
              </MDBCol>
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
                <img src="/img/aboutIndex/kstar/kstar-logo.png" />
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
              <img src="/img/aboutIndex/kstar/vr.png" />
            </MDBCol>
            <MDBCol>
              <img src="/img/aboutIndex/kstar/Digital.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-5">
            <MDBCol className="text-center mt-3">
              <h6>가시화 / 시각화</h6>
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
                <img src="/img/network/KFE.png" />
              </MDBCol>
              <MDBCol>
                <img src="/img/network/Sft.png" />
              </MDBCol>
              <MDBCol>
                <img src="/img/network/Smu.png" />
              </MDBCol>
              <MDBCol>
                <img src="/img/network/Pacom.png" />
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

export default KstarProjectsPage;
