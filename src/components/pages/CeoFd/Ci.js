import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import "./Ci.css";
import "../../../common/form/contentDesign.css";
import "../../../common/form/contentFont.css";
import TopImgContactedMobile from "../TopImgFd/TopImgContactedMobile";
import TopImgContactedWeb from "../TopImgFd/TopImgContactedWeb";
import Copyrights from "../../Footer";
import { useTranslation } from "react-i18next";

const Ci = () => {
  const { t } = useTranslation(["ci"]);
  const GRAY_COLOR = "#565656";

  return (
    <>
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
                  <title1 style={{ color: "black" }}>{t("P01")}(CI)</title1>
                  <br />
                  <br />
                  {/* </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer className="mainContent">
              <MDBRow>
                <MDBCol className="desc"> */}
                  <div style={{ color: GRAY_COLOR }}>
                    {t("P02")
                      .split("\n")
                      .map((v, i) => (
                        <div key={i}>{v}</div>
                      ))}
                  </div>
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
                <p>{t("P03")}</p>
                <br />
                <div>
                  <MDBBtn
                    color="indigo"
                    size="sm"
                    // href="/downloads/tritech-ci-download.zip"
                    href="https://tritech.s3.ap-northeast-2.amazonaws.com/tritech-ci-download.zip"
                    target="blank"
                  >
                    <MDBIcon far icon="clone" className="left" /> {t("P04")}
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Copyrights />
      </div>
    </>
  );
};

export default Ci;
