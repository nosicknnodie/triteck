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
import Test from "@/common/test";

const About = () => {
  const GRAY_COLOR = "#565656";
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
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
                  (주)트라이텍은 국내 최고의 기술력과 사업수행실적을 보유한
                  연구소로
                  <br />
                  VR.AR기반 Simulation, ART Technology, 친환경 폐기물 처리기술
                  솔루션 및 서비스를 제공합니다.
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
                            현실과 비현실이 모두 공존할 수 있는 폭넓은 분야 구현
                            <br />
                            설계. 생활. 예술. 게임 3차원 가상 세계
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
                            현실 세계에서 발생하는 실제 데이터를
                            <br />
                            디지털 환경에서 실시간으로 반영
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
                            가상 현실(VR), 증강 현실(AR), 3D 인터넷 등의
                            <br />
                            기술을 통해 현실과 가상 현실이 융합된 공간
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
                            정보의 효율적인 전달과 통신기술을 포함
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
