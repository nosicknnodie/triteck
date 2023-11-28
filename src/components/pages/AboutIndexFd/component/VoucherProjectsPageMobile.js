/* eslint-disable jsx-a11y/alt-text */
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBView,
} from "mdbreact";
import { Fragment } from "react";
import "../../../../common/form/contentFont.css";
import "./VoucherProjectsPageMobile.css";
import { useTranslation } from "react-i18next";

const VoucherProjectsPage = () => {
  const { t } = useTranslation(["voucher"]);
  return (
    <>
      <section id="voucherProjects" className="text-center my-5">
        <MDBContainer>{/* <TopLinkPageMobile/> */}</MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5">AR SIMULATION</h2>
        <p className="w-responsive mx-auto mb-5">{t("P01")}</p>
        <MDBContainer>
          <hr className="voucherHrSize" />
        </MDBContainer>

        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt mt-3">AR Web Service</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">OVERVIEW</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="voucherSectionID">
        <MDBContainer>
          <MDBRow className="rowText1Mb pl-2 pr-2 mb-5">{t("P02")}</MDBRow>

          <MDBRow className="text-center">
            <MDBCol sm="6" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <MDBCard>
                  <img
                    src="/img/aboutIndex/voucher/voucher_3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBCard>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="voucherSection2Id">
        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt text-center pl-4 mt-3">
                Development
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">TECHNOLOGY</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <hr className="voucherHrSize" />
          <MDBCol sm="6" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <MDBCard>
                <img
                  src="/img/aboutIndex/voucher/voucher_2.png"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBCard>
            </MDBView>
          </MDBCol>
        </MDBContainer>

        <MDBRow className="text-center mt-5">
          <MDBCardBody className="pb-0">
            <MDBCol className="colVoucherProjectMb mt-1 pb-5 dark-text">
              {t("P03")}
            </MDBCol>
          </MDBCardBody>
        </MDBRow>
      </section>

      <section id="voucherSection3Id">
        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt text-center mt-3">Expectancy</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">EFFECTS</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <hr className="voucherHrSize" />
          <MDBCol sm="6" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth" waves>
              <MDBCard>
                <img
                  src="/img/aboutIndex/voucher/door.png"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBCard>
            </MDBView>
          </MDBCol>
        </MDBContainer>

        <MDBRow className="text-center mt-5">
          <MDBContainer>
            <MDBTable bordered className="mt-5">
              {t("P04")
                .split("\n")
                .map((v, i) => {
                  const l = v.split(":");
                  const t = l[0];
                  const c = l[1];
                  return (
                    <MDBTableBody key={i}>
                      <th style={{ fontWeight: "800" }}>{t}</th>
                      <td>{c}</td>
                    </MDBTableBody>
                  );
                })}
            </MDBTable>
          </MDBContainer>
        </MDBRow>
      </section>

      <section id="voucherSection4Id">
        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt text-center mt-3">
                Application
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">AREA</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <hr className="voucherHrSize" />
        </MDBContainer>

        <MDBContainer className="containSection4Mb">
          <MDBRow className="mb-1 text-center">
            <MDBCol className="colArea">
              <img src="/img/aboutIndex/voucher/Precision.png" />
            </MDBCol>
            <MDBCol>
              <img src="/img/aboutIndex/voucher/Augmentation.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-5">
            <MDBCol className="text-center mt-3">
              <h6>{t("P05")}</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>{t("P06")}</h6>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1 text-center">
            <MDBCol className="colArea">
              <img src="/img/aboutIndex/voucher/client.png" />
            </MDBCol>
            <MDBCol>
              <img src="/img/aboutIndex/voucher/Nonface.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-5">
            <MDBCol className="text-center mt-3">
              <h6>{t("P09")}</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>{t("P08")}</h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------net work--------------- */}
      <section id="bar">
        <MDBContainer className="mainContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <hr className="line" style={{ color: "#AA6496" }} />
              </MDBCol>
              <MDBCol>
                <title2 style={{ color: "#AA6496" }}>Net Work</title2>
              </MDBCol>
              <MDBCol>
                <hr className="line" style={{ color: "#AA6496" }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* <section id="voucherSection5IdMb">
<MDBContainer>
<MDBRow>
<MDBCol className="colSection5">
    <hr/>
</MDBCol>
<MDBCol className="colSection5">
    Net Work
</MDBCol>
<MDBCol className="colSection5">
    <hr/>
</MDBCol>
</MDBRow>
</MDBContainer> */}

          <MDBContainer className="mt-5">
            <MDBRow className="text-center">
              <MDBCol className="colSectionImg5">
                <img src="/img/network/jh.png" />
              </MDBCol>
              <MDBCol className="colSectionImg5">
                <img src="/img/network/Smu.png" />
              </MDBCol>
              <MDBCol className="colSectionImg5">
                <img src="/img/network/globe.png" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>
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
    </>
  );
};

export default VoucherProjectsPage;
