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
import { useTranslation } from "react-i18next";

const IctProjectsPage = () => {
  const { t } = useTranslation(["dlpp"]);
  const MAIN_COLOR = "#F7966D";
  const SUB_BAR_COLOR = "F4B86E";
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
                  {t("P03")
                    .split("\n")
                    .map((v, i) => (
                      <div key={i}>{v}</div>
                    ))}
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
                  {t("P04")
                    .split("\n")
                    .map((v, i) => (
                      <div key={i}>{v}</div>
                    ))}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
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
                  {t("P05")
                    .split("\n")
                    .map((v, i) => (
                      <div key={i}>{v}</div>
                    ))}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mainContent">
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
                    "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/ict-project-demo-bexco.mp4",
                  videoRatio: "16by9",
                  videoDesc: t("V02_D").split("\n"),
                },
              ])}
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
              <h6>{t("P06")}</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>{t("P07")}</h6>
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
              <h6>{t("P08")}</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>{t("P09")}</h6>
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
