/* eslint-disable jsx-a11y/alt-text */
import {
  // MDBIcon,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import { Fragment } from "react";
import "../../../../common/form/contentDesign.css";
import * as contentDesign from "../../../../common/form/contentDesign.js";
import { useTranslation } from "react-i18next";

const IctProjectsPage = () => {
  const { t } = useTranslation(["dlpp"]);
  const MAIN_COLOR = "#F7966D";
  const GRAY_COLOR = "#565656";
  return (
    <>
      {/* --------------title--------------- */}
      <section id="pageTitleSection">
        <title1 style={{ color: MAIN_COLOR }} className="mb-1">
          {t("P01")}
        </title1>
        <br />
        <title4 style={{ color: GRAY_COLOR }}>{t("P02")}</title4>
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
              {t("P03")
                .split("\n")
                .map((v, i) => (
                  <div key={i}>{v}</div>
                ))}
            </MDBCol>
          </MDBRow>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              {contentDesign.addImgView(
                "/img/aboutIndex/dlpp/ict-overview.png"
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
              {t("P04")
                .split("\n")
                .map((v, i) => (
                  <div key={i}>{v}</div>
                ))}
            </MDBCol>
          </MDBRow>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              {contentDesign.addImgRoundedView(
                "/img/aboutIndex/dlpp/ict-technology.jpg"
              )}
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------rvi--------------- */}
      <section id="wideImgInGrayBgSection">
        <MDBContainer>
          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="12">
              {contentDesign.addImgView("/img/aboutIndex/dlpp/Platform.png")}
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="12">
              {contentDesign.addImgView("/img/aboutIndex/dlpp/exhibition.png")}
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
              {t("P05")
                .split("\n")
                .map((v, i) => (
                  <div key={i}>{v}</div>
                ))}
            </MDBCol>
          </MDBRow>
          <MDBRow className="mainContent">
            <MDBContainer>
              <MDBRow>
                {contentDesign.addVideoInCol([
                  {
                    videoTitle: t("V01_T"),
                    videoPath:
                      "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/ict-project-demo-haptic.mp4",
                    videoRatio: "16by9",
                    videoDesc: t("V01_D").split("\n"),
                  },
                  {
                    videoTitle: t("V02_T"),
                    videoPath:
                      "https://tritech.s3.ap-northeast-2.amazonaws.com/videos/rvi-main-v1.mp4",
                    videoRatio: "16by9",
                    videoDesc: t("V02_D").split("\n"),
                  },
                ])}
              </MDBRow>
              <MDBRow>
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/JYHal68ZDNM"
                  title="초고난도 원전 해체!...실제 같은 시뮬레이터로 연습 / YTN"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
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
                <h5>{t("P06")}</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/dlpp/Digital.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>{t("P07")}</h5>
              </MDBCol>
            </MDBRow>

            <MDBRow sm="12" className="mainContentText">
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/dlpp/system.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>{t("P08")}</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/dlpp/Experiment.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>{t("P09")}</h5>
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
