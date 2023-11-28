import React, { Fragment } from "react";
import {
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBMask,
} from "mdbreact";
// import TopLinkPage from "./TopLinkPage";
import "./EcommercePage_Rsa.scss";
import { useTranslation } from "react-i18next";

const EcommercePage_Rsa = () => {
  const { t } = useTranslation(["rsa"]);
  return (
    <>
      <section id="rsaProjects" className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5 animate__animated animate__fadeInUp">
          ART Technology
        </h2>
        <h6 className="w-responsive mx-auto mb-5">
          CG Technology . Web Technology . NetWork Technology . Kinetic
          Technology
        </h6>

        <p className="fieldTitle w-responsive mx-auto mb-5">{t("P01")}</p>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="colTitle" sm="2">
              {t("P02")}
            </MDBCol>
            <MDBCol sm="10">
              <hr className="rsaHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="rsaCard">
        <MDBRow className="d-flex justify-content-center text-center my-5">
          <MDBCol md="6" xl="5" className="mb-4 mt-5">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="/img/fieldPage/art technology/arttech.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 green-text">
                  {/* <MDBIcon fas icon="chart-line" className="pr-2" /> */}
                  {t("P03")}
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">{t("P04")}</p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4 mt-5">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="/img/fieldPage/art technology/web.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 blue-text">
                  {/* <MDBIcon icon="eye" className="pr-2" /> */}
                  {t("P05")}
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">{t("P06")}</p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/img/fieldPage/art technology/network.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 purple-text">
                  {/* <MDBIcon icon="camera" className="pr-2" /> */}
                  {t("P07")}
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">{t("P08")}</p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/img/fieldPage/art technology/projection.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="brown-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 indigo-text">
                  {/* <MDBIcon icon="phone" className="pr-2" /> */}
                  {t("P09")}
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">{t("P10")}</p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>

      <MDBRow className="mt-5" center>
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

export default EcommercePage_Rsa;
