/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  MDBContainer,
  // NavLink,
  MDBRow,
  MDBCol,
  // MDBIcon,
  MDBView,
  MDBCardBody,
  // MDBFooter,
  MDBCard,
  MDBCardTitle,
  // MDBCardImage,
  MDBCardText,
  MDBAnimation,
  // MDBCarouselItem,
  // MDBAvatar,
  // MDBTestimonial,
  // MDBCarousel,
  // MDBCarouselInner,
  MDBMask,
  // MDBBtn,
  // MDBInput,
  // MDBBox,
} from "mdbreact";
import "./About.css";
import Copyrights from "../../Footer";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const GRAY_COLOR = "#565656";
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const { t } = useTranslation(["about"]);
  return (
    <>
      <div id="about">
        <section id="about_1">
          <MDBView>
            <MDBMask className="gradient">
              <video className="video-intro" muted loop autoPlay>
                <source
                  src="https://tritech.s3.ap-northeast-2.amazonaws.com/videos/tritech-concept.mp4"
                  type="video/mp4"
                />
              </video>
            </MDBMask>{" "}
            <MDBContainer
              className="d-flex justify-content-center align-items-center px-md-3 px-sm-0"
              style={{ height: "100vh", width: "100%" }}
            >
              <MDBRow>
                <MDBCol
                  md="12"
                  className="display-3 mb-4 white-text text-center"
                ></MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBView>
        </section>

        <MDBContainer className="topLinkPageWeb mt-5"></MDBContainer>

        <MDBContainer style={{ marginBottom: 50 }}>
          <section id="work">
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <p>
                  <h2 className="main-text_1 text-center my-5 font-weight-bold">
                    TRITECH
                    <span className="text-light-dark font-weight-light"></span>
                  </h2>
                </p>

                <p
                  className="textSimulation text-center text-muted mb-5"
                  style={{ color: GRAY_COLOR }}
                >
                  {t("P01")}
                  <br />
                  {t("P02")}
                </p>

                <MDBRow id="categories">
                  <MDBCol md="1"></MDBCol>
                  <MDBCol md="5">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard className="my-3 white lighten-4">
                        <MDBCardBody className="cardBodyBg1 text-center pt-5 pb-5">
                          <MDBCardTitle className="cardTitleIcon">
                            <MDBCol>
                              <img
                                className="cardImgSize mb-5"
                                src="/img/about/concept-img-1.jpg"
                              ></img>
                            </MDBCol>
                            <strong>Modeling & Simulation</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation mb-5">
                            {t("P03")}
                            <br />
                            {t("P04")}
                          </MDBCardText>
                          <NavLink
                            tag="button"
                            to="/pages/FieldPageFd/subPageFd/Field"
                            color="mdb-color"
                            className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            onClick={handleScrollToTop}
                          >
                            More
                          </NavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="5">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard className="my-3 white lighten-4">
                        <MDBCardBody className="cardBodyBg2 text-center pt-5 pb-5">
                          <MDBCardTitle className="cardTitleIcon">
                            <MDBCol>
                              <img
                                className="cardImgSize mb-5"
                                src="/img/about/concept-img-2.jpg"
                              ></img>
                            </MDBCol>
                            <strong>DigitalTwin</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation mb-5">
                            {t("P05")}
                            <br />
                            {t("P06")}
                          </MDBCardText>
                          <NavLink
                            tag="button"
                            to="/pages/AboutIndexFd/subPageFd/kstar"
                            color="mdb-color"
                            className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            onClick={handleScrollToTop}
                          >
                            More
                          </NavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="1"></MDBCol>
                </MDBRow>

                <MDBRow id="categories">
                  <MDBCol md="1"></MDBCol>
                  <MDBCol md="5">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard className="my-3 white lighten-4">
                        <MDBCardBody className="cardBodyBg3 text-center pt-5 pb-5">
                          <MDBCardTitle className="cardTitleIcon">
                            <MDBCol>
                              <img
                                className="cardImgSize mb-5"
                                src="/img/about/concept-img-6.jpg"
                              ></img>
                            </MDBCol>
                            <strong>Metaverse</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation cardTextClean">
                            {t("P07")}
                            <br />
                            {t("P08")}
                          </MDBCardText>
                          <NavLink
                            tag="button"
                            to="/pages/AboutIndexFd/subPageFd/Voucher"
                            color="mdb-color"
                            className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            onClick={handleScrollToTop}
                          >
                            More
                          </NavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="5">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard className="my-3 white lighten-4">
                        <MDBCardBody className="cardBodyBg4 text-center pt-5">
                          <MDBCardTitle className="cardTitleIcon">
                            <MDBCol>
                              <img
                                className="cardImgSize mb-5"
                                src="/img/about/concept-img-5.jpg"
                              ></img>
                            </MDBCol>
                            <strong>ICT</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation mb-5">
                            {t("P09")}
                          </MDBCardText>
                          <NavLink
                            tag="button"
                            to="/pages/AboutIndexFd/subPageFd/dlpp"
                            color="mdb-color"
                            className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                            onClick={handleScrollToTop}
                          >
                            More
                          </NavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="1"></MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <Copyrights />
      </div>
    </>
  );
};
// class About extends React.Component {
//   render() {
//     const GRAY_COLOR = "#565656";

// }

export default About;
