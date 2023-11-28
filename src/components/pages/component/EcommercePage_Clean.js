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
import "./EcommercePage_Clean.scss";
import { useTranslation } from "react-i18next";

const EcommercePage_Clean = () => {
  const { t } = useTranslation(["clean"]);
  return (
    <>
      <section id="cleanProjects" className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5 animate__animated animate__fadeInUp">
          Clean Energy
        </h2>
        <h6 className="w-responsive mx-auto mb-5">
          Hit Cyclone Combustor . Hit Cyclone Combustor Of Batch Type . Mixed
          Fuel Cyclone Combustor
        </h6>

        <p className="cleanTitle w-responsive mx-auto mb-5">{t("P01")}</p>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="colTitle text-right" sm="2">
              {t("P02")}
            </MDBCol>
            <MDBCol sm="10">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="containTable mt-5 pr-5 ml-5">
          <MDBTable>
            <MDBTableBody>
              <tr>
                <td
                  style={{ fontWeight: "800" }}
                  className="text-left green-text"
                >
                  {t("P03")}
                </td>
                <td className="text-left">
                  {t("P04")
                    .split("\n")
                    .map((v, i) => (
                      <div key={i}>{v}</div>
                    ))}
                </td>
              </tr>
              <tr>
                <td
                  style={{ fontWeight: "800" }}
                  className="text-left green-text"
                >
                  {t("P05")}
                </td>
                <td className="text-left">{t("P06")}</td>
              </tr>
              <tr>
                <td
                  style={{ fontWeight: "800" }}
                  className="text-left green-text"
                >
                  {t("P07")}
                </td>
                <td className="text-left">
                  {t("P08")
                    .split("\n")
                    .map((v, i) => (
                      <div key={i}>{v}</div>
                    ))}
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

        {/* <MDBContainer className="containTableMobile">
          <MDBCol className="my-2 font-weight-bold green-text">
            {t("P03")}
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
        </MDBContainer> */}

        <MDBContainer>
          <MDBRow>
            <MDBCol className="colTitle text-right" sm="2">
              {t("P09")}
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
              href="#cleanProject_2"
            >
              {t("P10")}
            </MDBBtn>
          </MDBCol>
          <MDBCol xl="4">
            <MDBBtn
              className="btn2 pt-2 pb-2"
              rounded
              size="xl"
              color="success"
              href="#cleanProject_3"
            >
              {t("P11")}
            </MDBBtn>
          </MDBCol>
          <MDBCol xl="4">
            <MDBBtn
              className="btn3 pt-2 pb-2"
              rounded
              size="xl"
              color="success"
              href="#cleanProject_4"
            >
              {t("P12")}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="cleanProject_2">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol className="colTitle text-center" sm="4">
              {t("P13")}
            </MDBCol>
            <MDBCol sm="8">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5"></p>

          <MDBRow>
            <MDBCol lg="5" className="text-lg-right">
              <img
                className="img-fluid"
                src="/img/fieldPage/clean energy/clean_1.png"
                alt=""
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol size="1"></MDBCol>
                <MDBCol xl="10" md="11" size="10"></MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1"></MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold text-lg-left mb-3">
                    {t("P14")}
                  </h5>
                  <p className="grey-text">{t("P15")}</p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1"></MDBCol>
                <MDBCol xl="10" md="11" size="10"></MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="cleanProject_3">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol sm="8">
              <hr className="cleanHrSize" />
            </MDBCol>
            <MDBCol className="colTitle text-center" sm="4">
              {t("P16")}
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol lg="6" className="text-lg-center mt-5">
              <img
                className="img-fluid"
                src="/img/fieldPage/clean energy/clean_2.png"
                alt=""
              />
              <p className="font-weight-bold">{t("P17")}</p>
            </MDBCol>

            <MDBCol lg="6" className="text-lg-center mt-5">
              <img
                className="img-fluid"
                src="/img/fieldPage/clean energy/clean_3.png"
                alt=""
              />
              <p className="font-weight-bold">{t("P18")}</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="cleanProject_4">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol className="colTitle text-center" sm="4">
              {t("P19")}
            </MDBCol>
            <MDBCol sm="8">
              <hr className="cleanHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol lg="12" className="text-lg-center">
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

export default EcommercePage_Clean;
