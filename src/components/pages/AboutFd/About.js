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
import LightboxWidget from "../AboutFd/components/LightboxWidget";
import { NavLink } from "react-router-dom";

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
                    TRITECH{" "}
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
                            <p>Metaverse</p>
                            <strong>Simulation</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation mb-5">
                            현실과 비현실이 모두 공존할 수 있는 폭넓은 분야 구현
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
                            <p>VR / AR / MR / XR </p>
                            <strong>DigitalTwin</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation mb-5">
                            현실세계의 기계.장비.사물 등을 컴퓨터 속 가상세계에
                            구현 시험 . 훈련. 분석. 평가 3차원 가상 실험
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
                                src="/img/about/concept-img-3.jpg"
                              ></img>
                            </MDBCol>
                            <p>Recycle</p>
                            <strong>Clean Energy</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation cardTextClean">
                            저 NOx 화 “고온 다단 싸이크론 연소기술” 개발 연소용
                            공기의 흐름 - 싸이크론 회전식 폐기물(고체, 액체 및
                            기체) 연소장치로 다양하게 응용
                          </MDBCardText>
                          <NavLink
                            tag="button"
                            to="/pages/AboutIndexFd/subPageFd/clean"
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
                                src="/img/about/concept-img-4.jpg"
                              ></img>
                            </MDBCol>
                            <p>Fusion</p>
                            <strong>Art Technology</strong>
                          </MDBCardTitle>
                          <MDBCardText className="textSimulation mb-5">
                            디지털 기술과 예술의 결합 아트테크놀로지 디지털
                            미디어 특징으로 새로운 예술 구현 여러 분야 융합하여
                            색다른 예술 창조
                          </MDBCardText>
                          <NavLink
                            tag="button"
                            to="/pages/FieldPageFd/subPageFd/Rsa"
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
