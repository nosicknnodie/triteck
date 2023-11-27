import React, { Fragment } from "react";
import {
  MDBTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTableBody,
} from "mdbreact";
// import TopLinkPage from "./TopLinkPage";
import "./EcommercePageMobile_Clean.scss";

const EcommercePageMobile_Clean = () => {
  return (
    <>
      <section id="cleanMobileProjects" className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5 animate__animated animate__fadeInUp">
          Clean Energy
        </h2>
        <h6 className="w-responsive mx-auto mb-5">
          Hit Cyclone Combustor . Hit Cyclone Combustor Of Batch Type . Mixed
          Fuel Cyclone Combustor
        </h6>

        <p className="cleanTitle w-responsive mx-auto mb-5">
          내화벽돌을 사용하지 않고, 연소용 공기 의 흐름을 싸이크론 회전식으로
          변환시켜서 단열효과와 함께 흡수된 고온으로 연소를 지원하여, 고온의
          열을 손실이 없이 에너지로 변환시켜주며, 열분해 연소기술 및 다단연소와
          배기가스 재순환설비 등을 복합적으로 적용하는 저 NOx 화 “고온 다단
          싸이크론 연소기술”을 개발하여 폐기물(고체, 액체 및 기체) 연소장치로
          다양하게 응용
        </p>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="colTitle text-right" sm="2">
              개 발 범 위
            </MDBCol>
            <MDBCol sm="10">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="containTable mt-5">
          <MDBTable>
            <MDBTableBody>
              <tr>
                <td
                  style={{ fontWeight: "800" }}
                  className="text-left green-text"
                >
                  고온선회식연소로
                </td>
                <td className="text-left">
                  연속공급방식: 중기 및 온수생산방식, 지정폐기물 소각처리방식{" "}
                  <br />
                  <p></p> 배치방식 : 일괄투입 소각처리방식{" "}
                </td>
              </tr>
              <tr>
                <td
                  style={{ fontWeight: "800" }}
                  className="text-left green-text"
                >
                  연소해석{" "}
                </td>
                <td className="text-left">
                  공기 및 연소가스 흐름, 온도해석 성상에 따른 배기가스 분석 등
                </td>
              </tr>
              <tr>
                <td
                  style={{ fontWeight: "800" }}
                  className="text-left green-text"
                >
                  응용시스템{" "}
                </td>
                <td className="text-left">
                  난연성 폐기물(SRF, 의료폐기물, ASR 등) 연소 시스템,
                  탈취연소로, 폐액연소로, 바이오매스 연소장치, <br />
                  <p></p>
                  고형폐기물(농부산물, 축분, 슬러지 등) 연소장치, 해양쓰레기
                  에너지화, 친환경 동물화장시스템, <br />
                  <p></p>
                  온수생산 폐기물 연소시스템과 태양열 에너지 융합 시스템 각종
                  폐기물 전처리 연료화 공정 및 패키지 발전시스템 등
                </td>
              </tr>
              <tr>
                <td
                  style={{ fontWeight: "800" }}
                  className="text-right green-text pl-5"
                ></td>
                <td className="text-left"> </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>

        <MDBContainer className="containTableMobile">
          <MDBCol className="my-2 font-weight-bold green-text">
            {" "}
            고온 선회식 연소로
          </MDBCol>
          <MDBCol>
            <spen className="font-weight-bold">연속공급방식:</spen> 중기 및
            온수생산방식, 지정폐기물 소각처리방식 <br />{" "}
            <spen className="font-weight-bold">배치방식 :</spen> 일괄투입
            소각처리방식{" "}
          </MDBCol>
          <hr style={{ borderColor: "gray" }} />

          <MDBCol className="my-2 font-weight-bold green-text">
            {" "}
            연소해석
          </MDBCol>
          <MDBCol>
            공기 및 연소가스 흐름, 온도해석 성상에 따른 배기가스 분석 등
          </MDBCol>
          <hr style={{ borderColor: "gray" }} />

          <MDBCol className="my-2 font-weight-bold green-text">
            응용시스템
          </MDBCol>
          <MDBCol>
            난연성 폐기물(SRF, 의료폐기물, ASR 등) 연소 시스템, 탈취연소로,
            폐액연소로, 바이오매스 연소장치, <br />
            <hr style={{ borderColor: "gray" }} />
            고형폐기물(농부산물, 축분, 슬러지 등) 연소장치, 해양쓰레기 에너지화,
            친환경 동물화장시스템, <br />
            <hr style={{ borderColor: "gray" }} />
            온수생산 폐기물 연소시스템과 태양열 에너지 융합 시스템 각종 폐기물
            전처리 연료화 공정 및 패키지 발전시스템 등
          </MDBCol>
          <hr style={{ borderColor: "gray" }} />
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol className="colTitle text-right" sm="2">
              개 발 내 용
            </MDBCol>
            <MDBCol sm="10">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBRow className="btnTitle mt-3">
          <MDBCol xl="4">
            <MDBBtn
              className="btn1 pt-2 pb-2 "
              rounded
              size="xl"
              color="success"
              href="#cleanProjectMobile_2"
            >
              고온다단 싸이크론 연소로
            </MDBBtn>
          </MDBCol>
          <MDBCol xl="4">
            <MDBBtn
              className="btn2 pt-2 pb-2"
              rounded
              size="xl"
              color="success"
              href="#cleanProjectMobile_3"
            >
              연속공급방식
            </MDBBtn>
          </MDBCol>
          <MDBCol xl="4">
            <MDBBtn
              className="btn3 pt-2 pb-2"
              rounded
              size="xl"
              color="success"
              href="#cleanProjectMobile_4"
            >
              일괄투입방식
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="cleanProjectMobile_2">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol className="colTitle text-center" sm="4">
              고온 다단 싸이크론 연소로
            </MDBCol>
            <MDBCol sm="8">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <h6 className="h6-responsive font-weight-bold text-center my-5">
            고온 다단 연소에 의한 완전 연소 기술
          </h6>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5"></p>

          <MDBRow>
            <MDBCol lg="12" className="text-center">
              <img
                className="img-fluid"
                src="/img/fieldPage/clean energy/clean_1.png"
                alt=""
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="cleanProjectMobile_3">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol className="colTitle text-center" sm="4">
              연속 공급방식 연소기
            </MDBCol>
            <MDBCol sm="8">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol lg="6" className="text-center mt-5">
              <img
                className="img-fluid"
                src="/img/fieldPage/clean energy/clean_2.png"
                alt=""
              />
              <p className="font-weight-bold">증기 및 온수생산 방식</p>
            </MDBCol>

            <MDBCol lg="6" className="text-center mt-5">
              <img
                className="img-fluid"
                src="/img/fieldPage/clean energy/clean_3.png"
                alt=""
              />
              <p className="font-weight-bold">지정폐기물 소각처리방식</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="cleanProjectMobile_4">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol className="colTitle text-center" sm="4">
              일괄 투입식 연소기
            </MDBCol>
            <MDBCol sm="8">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol lg="12" className="text-center">
              <img
                className="img-fluid mt-5"
                src="/img/fieldPage/clean energy/clean_4.png"
                alt=""
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
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

export default EcommercePageMobile_Clean;
