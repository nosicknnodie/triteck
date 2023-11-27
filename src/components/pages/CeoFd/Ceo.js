import React, { Component, Fragment } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBMask,
  // MDBIcon,
  MDBView,
  MDBStep,
  MDBCard,
  MDBCardBody,
  MDBStepper,
  MDBBtn,
  MDBTypography,
  MDBBox,
} from "mdbreact";

import "./Ceo.css";
import Copyrights from "../../Footer";
import TopImgCompanyMobile from "../TopImgFd/TopImgContactedMobile";
import TopImgCompanyWeb from "../TopImgFd/TopImgContactedWeb";

class Ceo extends Component {
  render() {
    // const GRAY_COLOR = "#565656";
    const LIGHT_GRAY_COLOR = "#565656";

    return (
      <div id="Ceo">
        <div className="ceoWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="ceoMobile">
          <TopImgCompanyMobile />
        </div>

        <section id="about_tritech">
          <MDBContainer className="topLinkPageWeb mt-5">
            <MDBRow>
              <MDBCol>{/* <TopLinkPage/> */}</MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="topLinkPageMobile mt-5">
            <MDBRow>
              <MDBCol>{/* <TopLinkPageMobile/> */}</MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer>
            {/* <MDBRow className="rowTextRd text-center"> */}
            <p style={{ color: LIGHT_GRAY_COLOR }} className=" text-center">
              (주)트라이텍은 R&D(Reearch and Devlopment) 분야에서 국내 최고의
              기술력과 사업수행실적을 보유한 연구소로
              <br />
              VR.AR기반 Simulation, ART Technology, 친환경 폐기물 처리기술에
              대한 솔루션 및 서비스를 제공합니다.
            </p>
            <br />
            <br />
            {/* </MDBRow> */}
          </MDBContainer>
        </section>

        <section id="Ceo2">
          <MDBCardBody className="cardBodyBg">
            <MDBContainer>
              <MDBRow>
                <MDBCol className="about_top_mobile my-5 px-5 pb-5">
                  <h2 className="font-weight-bold text-center my-5 ">CSO</h2>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol lg="3" md="12">
                  <MDBView hover waves>
                    <img
                      className="img-fluid"
                      src="/img/ceo/ceo.jpg"
                      alt="기재석 교수"
                    />
                  </MDBView>
                  <p className="mt-3 text-left text-lg-center pl-md-4 pl-lg-0">
                    CSO 기 재석{" "}
                  </p>
                </MDBCol>

                <MDBCol lg="9" md="12" className="TitleText">
                  <MDBTypography blockquote bqColor="info">
                    <MDBBox tag="p" mb={0} className="bq-title">
                      <h3 className="font-weight-bold">CSO</h3>

                      <h5 className="my-1">
                        <b>Chif Strategy Officer</b>
                      </h5>
                    </MDBBox>
                    <p className="wordBreackb pt-0">
                      (주)트라이텍은 VR.AR기반 시뮬레이터 , ART Technology ,
                      친환경 폐기물 처리기술 3개의 핵심 기반으로
                      미래과학기술분야를 선도하는 R&D 기업입니다. 당사는
                      차별화된 기술력을 바탕으로 다수의 프로젝트를 성공적으로
                      수행해 오고 있으며 다양한 분야의 그룹들과 믿음있는 협력을
                      바탕으로 국내의 각종 토탈 솔루션 제공 및 기술지원을
                      하고있습니다. 앞으로도 (주)트라이텍은 다수의 프로젝트에서
                      얻은 기술력을 바탕으로 차원 높은 성과를 이루어 내도록
                      최선의 노력을 다하겠습니다 앞으로도 첨단기술기업으로
                      도약하기 위해 끊임없는 개발과 최상의 성과를 창출하기위해
                      노력할 것을 약속드립니다.
                    </p>
                  </MDBTypography>

                  <MDBRow>
                    <MDBCol
                      lg="12"
                      md="10"
                      size="10"
                      style={{ textAlign: "left", marginTop: "" }}
                    >
                      <h6 className="mb-3">
                        {" "}
                        <b>CSO(주요경력)</b>
                      </h6>
                      <p className="wordBreack">
                        국립삼척대학교 : 산업공학과부교수 (가상현실 Lab. 운영)
                      </p>
                      <p className="wordBreack">
                        ㈜케이씨이아이 : 연구소장 (국방 VR Simulator 사업책임)
                        <br />
                      </p>

                      <p className="wordBreack">
                        광운대햑교 : 연구교수 (전자과 BK21 연구교수)
                      </p>
                      <p className="wordBreack">
                        인천대학교 : 초빙교수 (산학협력전담)
                      </p>
                      <p className="wordBreack">
                        상명대학교 : 일반대학원 스포츠 ICT융합학과 교수
                      </p>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol lg="12">
                      <h6 className="mb-3">
                        <b>CSO(학력)</b>
                      </h6>
                      <p className="wordBreack ">한양대학교 산업공학 석.박사</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </section>

        <section id="about_us">
          <MDBContainer className="mt-5 mb-5 pt-5 pb-5">
            <MDBCard className="about_top ">
              <MDBRow className="mt-5">
                <MDBCol md="4">
                  <MDBCard testimonial>
                    <MDBRow className="text-center">
                      <MDBCol className="colImgSize">
                        <img src="/img/ceo/vrIcon.png" alt="temp" />
                      </MDBCol>
                    </MDBRow>

                    <MDBCardBody className="cardBodySh">
                      <h6 className="card-title">VR.AR기반 시뮬레이터</h6>
                      <hr />
                      <p className="wordBreack">
                        SE(System Engineering)와 R&D융합기술 개발을 통해
                        SBD(Simulation Based Development)실현{" "}
                      </p>
                      <p className="bold-text">혁신 제품 및 시험 솔루션 개발</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard testimonial>
                    <MDBRow className="text-center">
                      <MDBCol className="colImgSize3">
                        <img src="/img/ceo/ARTIcon.png" alt="temp" />
                      </MDBCol>
                    </MDBRow>
                    <MDBCardBody className="cardBodySh">
                      <h6 className="card-title">ART Technology</h6>
                      <hr />
                      <p className="wordBreack">
                        '예술상의기술'인 ART Technology는 공연 전시등 에서
                        첨단기술을 활용 융합하여 다양하고 창의적인 효과 구현{" "}
                      </p>
                      <p className="bold-text wordBreack">
                        VR.AR 기반 기술로 자유로운 작품 표현
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard testimonial>
                    <MDBRow className="text-center">
                      <MDBCol className="colImgSize2">
                        <img src="/img/ceo/clean.png" alt="temp" />
                      </MDBCol>
                    </MDBRow>

                    <MDBCardBody className="cardBodySh">
                      <h6 className="card-title">친환경 폐기물 처리기술</h6>
                      <hr />
                      <p className="wordBreack">
                        열분해 연소기술 및 다단연소와 배기가스 재순환설비 등을
                        복합적으로 적용 폐기물 연소장치로 다양하게 응용
                      </p>
                      <p className="bold-text">
                        NOx 화 "고온다단 싸이크론 연소기술"
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
        </section>

        <section id="organization">
          <MDBCardBody className="containOrgan">
            <MDBContainer className=" mt-5 pt-5 mb-5 pb-5">
              <MDBRow>
                <MDBCol className="col-12 col-xl-7 pr-5 pl-5 pr-xl-0 pl-xl-5">
                  <h6 className="organizationH6 text-center">조직도</h6>
                  <div className="d-flex justify-content-center align-items-center mt-5">
                    <img
                      // className="img-fluid"
                      src="/img/ceo/chart-md.png"
                      alt=""
                      // style={{ width: "700px" }}
                    />
                  </div>
                </MDBCol>

                <MDBCol className="col-12 col-xl-5 pt-5 pt-xl-0 mt-5 mt-xl-0">
                  <h6 className="organizationH6 text-center pl-xl-0 ml-xl-0">
                    연 혁
                  </h6>
                  <MDBStepper vertical className="stepper pl-5 pt-0 pt-1">
                    <MDBStep className="completed">
                      <a href="#!">
                        <span className="label">2020년도</span>
                      </a>
                      <div className="step-content grey lighten-5">
                        <p>
                          <spen className="font-weight-bold blue-text">
                            01월.
                          </spen>{" "}
                          상명대 미래혁신융합기술연구소
                        </p>
                        <p>
                          <spen className="font-weight-bold blue-text">
                            01월.
                          </spen>{" "}
                          원전시설 원격해체 가상 시뮬레이터 개발
                        </p>
                        <p>
                          <spen className="font-weight-bold blue-text">
                            04월.
                          </spen>{" "}
                          디지털트윈 기반의 핵융합에너지 시설운용
                        </p>
                      </div>
                    </MDBStep>
                    <MDBStep className="completed">
                      <a href="#!">
                        <span className="label">2021년도</span>
                      </a>
                      <div className="step-content grey lighten-5">
                        <p>
                          <spen className="font-weight-bold blue-text">
                            01월.
                          </spen>{" "}
                          (주)트라이텍 설립
                        </p>
                        <p>
                          <spen className="font-weight-bold blue-text">
                            04월.
                          </spen>{" "}
                          3D애니메이션 비대면스튜디오 플랫폼 개발
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          : Westo계약
                        </p>
                      </div>
                    </MDBStep>
                    <MDBStep className="active">
                      <a href="#!">
                        <span className="label">2022년도</span>
                      </a>
                      <div className="step-content grey lighten-5">
                        <p>
                          <spen className="font-weight-bold blue-text">
                            04월.
                          </spen>{" "}
                          Virtual Kstar 실험 및 시뮬레이터시스템
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          : 핵융합연구소 계약
                        </p>
                        <p>
                          <spen className="font-weight-bold blue-text">
                            05월.
                          </spen>{" "}
                          소방사다리차 조법운용 : VR미디어계약
                        </p>
                        <p>
                          <spen className="font-weight-bold blue-text">
                            05월.
                          </spen>{" "}
                          메타버스환경의 디지털트윈 플랫폼 서비스 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          : 초기창업지원
                        </p>
                        <p>
                          <spen className="font-weight-bold blue-text">
                            07월.
                          </spen>{" "}
                          원전해체 디지털트윈 시스템 : KIMM계약
                        </p>
                      </div>
                    </MDBStep>
                  </MDBStepper>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </section>

        <section id="organizationMobile">
          <MDBCardBody className="containOrgan">
            <MDBContainer className=" mt-5 pt-5 mb-5 pb-5">
              <MDBRow center>
                <h6 className="organizationH6">조직도</h6>
              </MDBRow>

              <MDBRow center>
                <img
                  className="img-fluid"
                  src="/img/ceo/chart-sm.png"
                  alt=""
                  // style={{ width: "400px" }}
                />
              </MDBRow>

              <MDBStepper vertical className="mt-5 pt-5">
                <p className="font-weight-bold">
                  <spen className="ml-3 mr-4">연</spen> 혁
                  {/* <spen className="mr-5">연</spen> 혁 */}
                </p>
                <MDBStep className="completed">
                  <a href="#!">
                    <span className="label">2020년도</span>
                  </a>
                  <div className="step-content grey lighten-5">
                    <p>
                      <spen className="font-weight-bold blue-text">01월.</spen>{" "}
                      상명대 미래혁신융합기술연구소
                    </p>
                    <p>
                      <spen className="font-weight-bold blue-text">01월.</spen>{" "}
                      원전시설 원격해체 가상 시뮬레이터 개발
                    </p>
                    <p>
                      <spen className="font-weight-bold blue-text">04월.</spen>{" "}
                      디지털트윈 기반의 핵융합에너지 시설운용
                    </p>
                  </div>
                </MDBStep>
                <MDBStep className="completed">
                  <a href="#!">
                    <span className="label">2021년도</span>
                  </a>
                  <div className="step-content grey lighten-5">
                    <p>
                      <spen className="font-weight-bold blue-text">01월.</spen>{" "}
                      (주)트라이텍 설립
                    </p>
                    <p>
                      <spen className="font-weight-bold blue-text">04월.</spen>{" "}
                      3D애니메이션 비대면스튜디오 플랫폼 개발 <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      : Westo계약
                    </p>
                  </div>
                </MDBStep>
                <MDBStep className="active">
                  <a href="#!">
                    <span className="label">2022년도</span>
                  </a>
                  <div className="step-content grey lighten-5">
                    <p>
                      <spen className="font-weight-bold blue-text">04월.</spen>{" "}
                      Virtual Kstar 실험 및 시뮬레이터시스템
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      : 핵융합연구소 계약
                    </p>
                    <p>
                      <spen className="font-weight-bold blue-text">05월.</spen>{" "}
                      소방사다리차 조법운용 : VR미디어계약
                    </p>
                    <p>
                      <spen className="font-weight-bold blue-text">05월.</spen>{" "}
                      메타버스환경의 디지털트윈 플랫폼 서비스 <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      : 초기창업지원
                    </p>
                    <p>
                      <spen className="font-weight-bold blue-text">07월.</spen>{" "}
                      원전해체 디지털트윈 시스템 : KIMM계약
                    </p>
                  </div>
                </MDBStep>
              </MDBStepper>
            </MDBContainer>
          </MDBCardBody>
        </section>

        <section id="Partners">
          <MDBCardBody className="bodyPartners">
            <MDBContainer lg="12" className=" mt-5 pt-5 mb-5 pb-5">
              <MDBRow center>
                <h6>CLIENTS & PARTNERS</h6>
              </MDBRow>
              <MDBRow center>
                <h6>Internal</h6>
                {/* <p className="bodyPartnersP">Internal</p> */}
              </MDBRow>

              <MDBRow center>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/Sft.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/Kimm.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/Hanyang.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/Pusan.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/globe.png" alt="temp" />
                </MDBCol>
              </MDBRow>

              <MDBRow center>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/jh.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/KFE.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/Pacom.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/Smu.png" alt="temp" />
                </MDBCol>
                <MDBCol className="colPartnersImg pt-3 pb-3 text-center">
                  <img src="/img/network/Vrm.png" alt="temp" />
                </MDBCol>
              </MDBRow>

              {/* <MDBRow className="mt-5" center>
                <h6>foreign parts</h6>
              </MDBRow> */}
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
            </MDBContainer>
          </MDBCardBody>
        </section>

        <Copyrights />
      </div>
    );
  }
}

export default Ceo;
