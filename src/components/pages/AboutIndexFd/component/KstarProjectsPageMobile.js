/* eslint-disable jsx-a11y/alt-text */
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Fragment } from "react";
// import "./KstarProjectsPageMobile.css";
// import "../../../../common/form/contentDesignMobile.css";
import * as contentDesign from "@/common/form/contentDesign.js";
import "@/common/form/contentDesignMobile.css";
import "@/common/form/contentFont.css";
import { useTranslation } from "react-i18next";

const KstarProjectsPage = () => {
  const { t } = useTranslation(["kstar"]);
  const MAIN_COLOR = "#2A99EA";
  const SUB_BAR_COLOR = "2A99EA";
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
          <p>{t("P03")}</p>
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
                {t("P04")
                  .split("\n")
                  .map((v, i) => (
                    <div key={i}>{v}</div>
                  ))}
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
                <br />
                <ul className="ul">
                  {t("P05")
                    .split("\n")
                    .map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                </ul>
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
        <title1 style={{ color: MAIN_COLOR }} className="mb-1">
          {t("P13")}
        </title1>
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
                <p>{t("P06")}</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="mainContent">
            <MDBRow>
              {contentDesign.addVideoInCol([
                {
                  videoTitle: t("T01_T"),
                  videoPath:
                    "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4",
                  videoRatio: "16by9",
                },
                {
                  videoTitle: t("T02_T"),
                  videoPath:
                    "https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar-project-result.mp4",
                  videoRatio: "16by9",
                },
              ])}
            </MDBRow>
            <MDBRow>
              {contentDesign.addVideoInCol([
                {
                  videoTitle: t("T03_T"),
                  videoPath: "https://www.youtube.com/embed/GSc_YIHcc3Y",
                  videoRatio: "16by9",
                },
                {
                  videoTitle: t("T04_T"),
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
              {contentDesign.addImgView("/img/aboutIndex/kstar/Advanced.png")}
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
                  {t("P11")}
                </spacingEngText>
                <br />
                <title2Light style={{ color: MAIN_COLOR }}>
                  {t("P12")}
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
              <h6>{t("P07")}</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>{t("P08")}</h6>
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
              <h6>{t("P09")}</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>{t("P10")}</h6>
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
