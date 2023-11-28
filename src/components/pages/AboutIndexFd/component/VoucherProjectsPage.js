/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import { Fragment } from "react";
import "../../../../common/form/contentDesign.css";
import "../../../../common/form/contentFont.css";
import "./VoucherProjectsPage.css";
import { useTranslation } from "react-i18next";

const VoucherProjectsPage = () => {
  const { t } = useTranslation(["voucher"]);
  return (
    <>
      <section id="voucherProjects" className="text-center my-5">
        <MDBContainer>{/* <TopLinkPage/> */}</MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5">AR SIMULATION</h2>
        <p className="w-responsive mx-auto mb-5">{t("P01")}</p>
        <MDBContainer>
          <hr className="voucherHrSize" />
        </MDBContainer>
      </section>

      <section id="voucherSectionID">
        <MDBContainer>
          <MDBRow className="mb-5 pb-5">
            <MDBCol lg="5">
              <MDBView className="rounded  z-depth-2 mb-lg-0 mb-5" hover waves>
                <img
                  className="img-fluid"
                  src="/img/aboutIndex/voucher/voucher_3.png"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" className="text-left">
              {/* <a href="#!" className="green-text"> */}
              <img src="/img/aboutIndex/voucher/voucher_logo.png" />
              {/* </a> */}
              <h3 className="font-weight-bold mb-3 p-0">
                {/* <strong>Title of the news</strong> */}
              </h3>
              <p className="technology pl-0 pr-1 text-left">{t("P02")}</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="voucherSection2Id">
        <MDBContainer>
          <MDBRow className=" mt-5 pt-5 mb-5 pb-5">
            <MDBCol lg="7" className="text-left">
              {/* <a href="#!" className="green-text"> */}
              <img src="/img/aboutIndex/voucher/voucher_logo1.png" />
              {/* </a> */}
              <h3 className="font-weight-bold mb-3 p-0">
                {/* <strong>Title of the news</strong> */}
              </h3>
              <p className="technology pl-1 pr-4 text-left">
                {t("P03")
                  .split("\n")
                  .map((v, i) => (
                    <div key={i}>{v}</div>
                  ))}
              </p>
            </MDBCol>

            <MDBCol lg="5">
              <MDBView className="rounded  z-depth-2 mb-lg-0 mb-5" hover waves>
                <img
                  className="img-fluid"
                  src="/img/aboutIndex/voucher/voucher_2.png"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <MDBContainer>
        {/* --------------video--------------- */}

        <MDBRow className=" mt-5 pt-5 mb-5 pb-5">
          {/* <MDBCol lg="5">
        <SectionContainer header=''>
        <MDBCardGroup>
          <MDBCard>
            <MDBCardVideo
              src='https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4'
              ratio='16by9'
              
            />
            <MDBCardBody>
              <MDBCardTitle tag='h5'>  초전도 핵융합 장치 건설 및 운전기술 확보</MDBCardTitle>
              <MDBCardText>

              </MDBCardText>
              <MDBBtn color='primary' size='md'>
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCardGroup>
      </SectionContainer>

        
          </MDBCol> */}
          <MDBCol lg="5">
            <MDBView className="rounded  z-depth mb-lg-0 mb-5" hover waves>
              <img
                className="img-fluid"
                src="/img/aboutIndex/voucher/door.png"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>

          <MDBCol lg="7" className="text-left mt-4">
            <img
              src="/img/aboutIndex/voucher/voucher_logo2.png"
              className="pt-3"
            />

            <h3 className="font-weight-bold mb-3 p-0"></h3>
            <p className="letter pr-1 text-left">
              {t("P04")
                .split("\n")
                .map((v, i) => {
                  const l = v.split(":");
                  const t = l[0];
                  const c = l[1];
                  return (
                    <div key={i}>
                      <spen className="font-weight-bold">{t}:</spen>
                      {c}
                    </div>
                  );
                })}
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <section id="voucherSection4Id">
        <MDBRow className="rowvoucherProjectsWeb mt-5 mb-5">
          <MDBCol className="mt-5">
            <MDBRow>
              <MDBContainer>
                <MDBCol md="12" className="text-left mt-4 pl-5 ml-5">
                  <img src="/img/aboutIndex/voucher/voucher_logo3.png" />
                </MDBCol>
              </MDBContainer>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBContainer className="containSection4">
          <MDBRow sm="12" className="text-center">
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1" className="colArea">
              <img src="/img/aboutIndex/voucher/Precision.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>{t("P05")}</h5>
            </MDBCol>
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1">
              <img src="/img/aboutIndex/voucher/Augmentation.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>{t("P06")}</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="containSection4 pb-5">
          <MDBRow sm="12" className="text-center">
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1" className="colArea">
              <img src="/img/aboutIndex/voucher/client.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>{t("P07")}</h5>
            </MDBCol>
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1">
              <img src="/img/aboutIndex/voucher/Nonface.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>{t("P08")}</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="bar">
        <MDBContainer className="mainContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <hr className="line" style={{ color: "#D080B7" }} />
              </MDBCol>
              <MDBCol>
                <sectionTitle style={{ color: "#D080B7" }}>
                  Net Work
                </sectionTitle>
              </MDBCol>
              <MDBCol>
                <hr className="line" style={{ color: "#D080B7" }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
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
