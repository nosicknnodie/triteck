/* eslint-disable jsx-a11y/alt-text */
import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
} from "mdbreact";
import { Fragment } from "react";
import "./EcommercePage_Field.scss";
import { useTranslation } from "react-i18next";

const EcommercePage_Field = () => {
  const { t } = useTranslation(["field"]);
  return (
    <>
      <section id="fieldProjects" className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5 animate__animated animate__fadeInUp">
          Virtual Simulation
        </h2>
        <h6 className="w-responsive mx-auto mb-5">
          Virtual Reality . Augmented Reality . eXtended Reality . Mixed Reality
          . Metaverse
        </h6>

        <p className="fieldTitle w-responsive mx-auto mb-5"> {t("P01")}</p>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="colTitle" sm="2">
              {t("P02")}
            </MDBCol>
            <MDBCol sm="10">
              <hr className="FieldHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBRow className="rowFieldProjects mt-5 mb-5 ">
          <MDBCol className="colFieldProjects mt-1 pb-5 dark-text">
            <MDBContainer className="containTable pr-5 ml-5">
              <MDBTable>
                <MDBTableBody className="">
                  <tr>
                    <td
                      style={{ fontWeight: "800" }}
                      className="text-left blue-text"
                    >
                      {t("P03")}
                    </td>
                    <td className="text-left">{t("P04")}</td>
                  </tr>
                  <tr>
                    <td
                      style={{ fontWeight: "800" }}
                      className="text-left blue-text"
                    >
                      {t("P05")}
                    </td>
                    <td className="text-left">{t("P06")}</td>
                  </tr>
                  <tr>
                    <td
                      style={{ fontWeight: "800" }}
                      className="text-left blue-text"
                    >
                      {t("P07")}
                    </td>
                    <td className="text-left">{t("P08")}</td>
                  </tr>
                  <tr>
                    <td
                      style={{ fontWeight: "800" }}
                      className="text-left blue-text"
                    >
                      {t("P09")}
                    </td>
                    <td className="text-left">{t("P10")}</td>
                  </tr>

                  <tr>
                    <td
                      style={{ fontWeight: "800" }}
                      className="text-left blue-text"
                    >
                      {t("P11")}
                    </td>
                    <td className="text-left">{t("P12")}</td>
                  </tr>

                  <tr>
                    <td
                      style={{ fontWeight: "800" }}
                      className="text-right green-text"
                    ></td>
                    <td className="text-left"> </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBContainer>

            <MDBContainer className="containTableMobile">
              <MDBCol className="my-2 font-weight-bold">{t("P03")}</MDBCol>
              <p>{t("P04")}</p>
              <hr style={{ borderColor: "gray" }} />

              <MDBCol className="my-2 font-weight-bold">{t("P05")}</MDBCol>
              <p>{t("P06")}</p>
              <hr style={{ borderColor: "gray" }} />

              <MDBCol className="my-2 font-weight-bold">{t("P07")}</MDBCol>
              <p>{t("P08")}</p>
              <hr style={{ borderColor: "gray" }} />

              <MDBCol className="my-2 font-weight-bold"> {t("P09")}</MDBCol>
              <p>{t("P10")}</p>
              <hr style={{ borderColor: "gray" }} />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="fieldSectionID">
        <MDBContainer>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="colTitle" sm="2">
                {t("P13")}
              </MDBCol>
              <MDBCol sm="10">
                <hr className="FieldHrSize" />
              </MDBCol>
            </MDBRow>

            <MDBRow className="btnTitle mt-3">
              <MDBCol xl="3">
                <MDBBtn
                  className="btn1 pt-2 pb-2"
                  rounded
                  size="xl"
                  color="primary"
                  href="#fireTitle"
                >
                  {t("P14")}
                </MDBBtn>
              </MDBCol>
              <MDBCol xl="3">
                <MDBBtn
                  className="btn2 pt-2 pb-2"
                  rounded
                  size="xl"
                  color="primary"
                  href="#vrTitle"
                >
                  {t("P15")}
                </MDBBtn>
              </MDBCol>
              <MDBCol xl="3">
                <MDBBtn
                  className="btn3 pt-2 pb-2"
                  rounded
                  size="xl"
                  color="primary"
                  href="#simulTitle"
                >
                  {t("P16")}
                </MDBBtn>
              </MDBCol>
              <MDBCol xl="3">
                <MDBBtn
                  className="btn4 pt-2 pb-2"
                  rounded
                  size="xl"
                  color="primary"
                  href="#sportsTitle"
                >
                  {t("P17")}
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <section id="fireTitle">
            <MDBContainer className="mt-5">
              <MDBRow>
                <MDBCol className="colTitle" sm="2">
                  {t("P14")}
                </MDBCol>
                <MDBCol sm="10">
                  <hr className="FieldHrSize" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>

            <MDBContainer>
              <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">
                <MDBCol xl="7">
                  <MDBRow className="blue-text font-weight-bold my-5">
                    {t("P18")}
                  </MDBRow>
                  <MDBRow className="wordBreack font-weight-bold text-left">
                    {t("P19")
                      .split("\n")
                      .map((v, i) => (
                        <div key={i}>{v}</div>
                      ))}
                  </MDBRow>
                </MDBCol>
                <MDBCol className="colImage" xl="5">
                  <MDBCard className="my-5">
                    <img
                      className="rgba-white-slight"
                      src="/img/fieldPage/vrtual simulation/fire_1.png"
                    />
                  </MDBCard>
                </MDBCol>
              </MDBRow>

              <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">
                <MDBCol className="colImage" xl="5">
                  <MDBCard className="my-5">
                    <img
                      className="rgba-white-slight"
                      src="/img/fieldPage/vrtual simulation/VirtualSimulation1.png"
                    />
                  </MDBCard>
                </MDBCol>
                <MDBCol xl="7">
                  <MDBRow className="wordBreack blue-text font-weight-bold my-5">
                    {t("P20")}
                  </MDBRow>
                  <MDBRow className="wordBreack font-weight-bold text-left">
                    {t("P21")}
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <section id="vrTitle">
            <MDBContainer className="mt-5">
              <MDBRow>
                <MDBCol sm="10">
                  <hr className="FieldHrSize" />
                </MDBCol>
                <MDBCol className="colTitle" sm="2">
                  {t("P22")}
                </MDBCol>
              </MDBRow>
            </MDBContainer>

            <MDBContainer>
              <MDBRow className="wordBreack rowText1 font-weight-bold pl-3 pr-3 mb-5 mt-5">
                {t("P23")}
              </MDBRow>

              <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">
                <MDBCol className="colImage" xl="12">
                  <MDBCard className="my-5">
                    <img
                      className="rgba-white-slight"
                      src="/img/fieldPage/vrtual simulation/vr_1.png"
                    />
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <section id="simulTitle">
            <MDBContainer className="mt-5">
              <MDBRow>
                <MDBCol className="colTitle" sm="3">
                  {t("P24")}
                </MDBCol>
                <MDBCol sm="9">
                  <hr className="FieldHrSize" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>

            <MDBContainer>
              <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">
                <MDBCol xl="6">
                  <MDBRow className="wordBreack blue-text font-weight-bold my-5">
                    {t("P25")}
                  </MDBRow>
                  <MDBRow className="wordBreack font-weight-bold text-left">
                    {t("P26")}
                  </MDBRow>
                </MDBCol>
                <MDBCol className="colImage" xl="6">
                  <MDBCard className="my-5">
                    <img
                      className="rgba-white-slight"
                      src="/img/fieldPage/vrtual simulation/simul.png"
                    />
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <section id="sportsTitle">
            <MDBContainer className="mt-5">
              <MDBRow>
                <MDBCol sm="10">
                  <hr className="FieldHrSize" />
                </MDBCol>
                <MDBCol className="colTitle text-right" sm="2">
                  {t("P27")}
                </MDBCol>
              </MDBRow>
            </MDBContainer>

            <MDBContainer>
              <MDBRow className="wordBreack rowText1 font-weight-bold pl-3 pr-3 mb-5 mt-5 text-center">
                {t("P28")}
              </MDBRow>

              <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">
                <MDBCol className="colImage" xl="6">
                  <MDBCard className="my-5">
                    <img
                      className="rgba-white-slight"
                      src="/img/fieldPage/vrtual simulation/VirtualSimulation5.png"
                    />
                  </MDBCard>
                  <p className="text-center" style={{ fontWeight: "500" }}>
                    {t("P29")}
                  </p>
                </MDBCol>

                <MDBCol className="colIct mt-5 pt-5 font-weight-bold " xl="6">
                  {t("P30")
                    .split("\n")
                    .map((v, i) => (
                      <p key={i}>{v}</p>
                    ))}
                </MDBCol>
                {/* <MDBCol className="colImage" xl="6">
        <MDBCard className="my-5">
        <img className="rgba-white-slight" src="/img/fieldPage/vrtual simulation/Thesis.png"/>
        </MDBCard>
        <p className="text-center">
        <a
           href="http://www.jkais99.org/journal/Vol20No04/vol20no04p75.pdf"
           target="_blank"
           style={{color:'blue', fontWeight:"600"}}>논문보기</a>
           </p>
        </MDBCol> */}
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBContainer>
      </section>

      <section id="fieldSection5Id">
        <MDBContainer className="mt-5">
          <MDBRow className="text-center">
            {/* <MDBCol className="colSectionImg5">
      <img src="/img/network/KFE.png"/>
    </MDBCol>
    <MDBCol className="colSectionImg5">
      <img src="/img/network/Smu.png"/>
    </MDBCol>
    <MDBCol  className="colSectionImg5">
      <img src="/img/network/Sft.png"/>
    </MDBCol>
    <MDBCol  className="colSectionImg5">
      <img src="/img/network/Vrm.png"/>
    </MDBCol>
    <MDBCol  className="colSectionImg5">
      <img src="/img/network/Pacom.png"/>
    </MDBCol> */}
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

    // <section className="text-center my-5">

    //   <MDBRow>

    //     <MDBCol sm="4" className="mb-lg-0 mb-4">
    //       <MDBCard collection className="z-depth-1-half">
    //         <div className="view zoom">
    //           <img
    //             src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/Field/VR_AR.png"
    //             className="img-fluid"
    //             alt=""
    //           />
    //           <div className="stripe dark">

    //               <MDBNavLink to="/pages_1/field">
    //               <p>
    //                 VR/AR <MDBIcon icon="angle-right" />
    //               </p>

    //               </MDBNavLink>

    //           </div>
    //         </div>
    //       </MDBCard>
    //     </MDBCol>
    //     <MDBCol sm="4" className="mb-lg-0 mb-4">
    //       <MDBCard collection className="z-depth-1-half">
    //         <div className="view zoom">
    //           <img
    //             src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/Field/ART+Technology.png"
    //             className="img-fluid"
    //             alt=""
    //           />
    //           <div className="stripe dark">
    //           <MDBNavLink to="/pages_1/Rsa">
    //               <p>
    //               ART Technology <MDBIcon icon="angle-right" />
    //               </p>

    //               </MDBNavLink>

    //           </div>
    //         </div>
    //       </MDBCard>
    //     </MDBCol>
    //     <MDBCol sm="4" className="mb-lg-0 mb-4">
    //       <MDBCard collection className="z-depth-1-half">
    //         <div className="view zoom">
    //           <img
    //             src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/Field/Clean+Energy.png"
    //             className="img-fluid"
    //             alt=""
    //           />
    //           <div className="stripe dark">

    //             <MDBNavLink to="/pages_1/cleanEnergy">
    //               <p>
    //               Clean Energy <MDBIcon icon="angle-right" />
    //               </p>

    //               </MDBNavLink>
    //           </div>
    //         </div>
    //       </MDBCard>
    //     </MDBCol>

    //   </MDBRow>
    // </section>
  );
};

export default EcommercePage_Field;
