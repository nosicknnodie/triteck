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
import { useTranslation } from "react-i18next";

const EcommercePageMobile_Clean = () => {
  const { t } = useTranslation(["clean"]);
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

        <MDBContainer className="containTable mt-5">
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

        <MDBContainer className="containTableMobile">
          <MDBCol className="my-2 font-weight-bold green-text">
            {" "}
            {t("P03")}
          </MDBCol>
          <MDBCol>
            {t("P04")
              .split("\n")
              .map((v, i) => (
                <div key={i}>{v}</div>
              ))}
          </MDBCol>
          <hr style={{ borderColor: "gray" }} />

          <MDBCol className="my-2 font-weight-bold green-text">
            {" "}
            {t("P05")}
          </MDBCol>
          <MDBCol>{t("P06")}</MDBCol>
          <hr style={{ borderColor: "gray" }} />

          <MDBCol className="my-2 font-weight-bold green-text">
            {t("P07")}
          </MDBCol>
          <MDBCol>
            {t("P08")
              .split("\n")
              .map((v, i) => (
                <div key={i}>
                  {v}
                  {i + 1 !== t("P08").split("\n").length && (
                    <hr style={{ borderColor: "gray" }} />
                  )}
                </div>
              ))}
          </MDBCol>
          <hr style={{ borderColor: "gray" }} />
        </MDBContainer>

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
              href="#cleanProjectMobile_2"
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
              href="#cleanProjectMobile_3"
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
              href="#cleanProjectMobile_4"
            >
              {t("P12")}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="cleanProjectMobile_2">
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
          <h6 className="h6-responsive font-weight-bold text-center my-5">
            {t("P14")}
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
              {t("P16")}
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
              <p className="font-weight-bold">{t("P17")}</p>
            </MDBCol>

            <MDBCol lg="6" className="text-center mt-5">
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

      <section id="cleanProjectMobile_4">
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
