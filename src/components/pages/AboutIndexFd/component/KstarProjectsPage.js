/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import {
  // MDBCardText,
  // MDBCardTitle,
  // MDBCardVideo,
  // MDBCardGroup,
  MDBRow,
  MDBCol,
  // MDBCardBody,
  // MDBIcon,
  MDBBtn,
  // MDBView,
  // MDBMask,
  MDBContainer,
  // MDBCard,
} from "mdbreact";
import "@/common/form/contentDesign.css";
import * as contentDesign from "@/common/form/contentDesign.js";
import "@/common/form/contentFont.css";
import { useTranslation } from "react-i18next";

const KstarProjectsPage = () => {
  const { t } = useTranslation(["kstar"]);
  const MAIN_COLOR = "#2A99EA";
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
          <MDBRow>
            <MDBCol md="12" className="titleContainer">
              <img src="/img/aboutIndex/kstar/kstarLogo.png" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="desc">
              <p>
                {t("P04")
                  .split("\n")
                  .map((v, i) => (
                    <div key={i}>{v}</div>
                  ))}
              </p>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              {contentDesign.addImgView(
                "/img/aboutIndex/kstar/kstar-overview.png"
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
              <img src="/img/aboutIndex/kstar/kstarLogo1.png" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="desc">
              <p>
                {t("P05")
                  .split("\n")
                  .map((v, i) => (
                    <div key={i}>{v}</div>
                  ))}
              </p>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              {contentDesign.addImgView(
                "/img/aboutIndex/kstar/kstar-technology.png"
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
              <img src="/img/aboutIndex/kstar/kstarLogo2.png" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="desc">
              <p>{t("P06")}</p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mainContent">
            <MDBContainer>
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
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------img program--------------- */}
      <section id="wideImgInGrayBgSection">
        {/* <title2 style={{ color: "#848484" }}>
          Digital Twin Virtual K STAR
        </title2> */}
        <p className="titleGrayText">Digital Twin Virtual K STAR</p>
        <MDBContainer>
          <MDBRow className="mainContent">
            <MDBContainer>
              <MDBRow className="lineBreak">
                {contentDesign.addImgInTwoCol(
                  "/img/aboutIndex/kstar/kstar-program-",
                  "jpg",
                  0
                )}
              </MDBRow>

              <MDBRow>
                {contentDesign.addImgInTwoCol(
                  "/img/aboutIndex/kstar/kstar-program-",
                  "jpg",
                  2
                )}
              </MDBRow>
            </MDBContainer>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------img showRoom--------------- */}
      <section id="wideImgSection">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="titleContainer">
              <img src="/img/aboutIndex/kstar/kstar-logo-showroom.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mainContent">
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              {contentDesign.addImgRoundedView(
                "/img/aboutIndex/kstar/kstar-showroom.jpg"
              )}
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
                <h5> {t("P07")}</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/kstar/Digital.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>{t("P08")}</h5>
              </MDBCol>
            </MDBRow>

            <MDBRow sm="12" className="mainContentText">
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/kstar/system.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>{t("P09")}</h5>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="1">
                <img src="/img/aboutIndex/kstar/Experiment.png" />
              </MDBCol>
              <MDBCol sm="4" className="mainContentText">
                <h5>{t("P10")}</h5>
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

export default KstarProjectsPage;
