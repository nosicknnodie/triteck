/* eslint-disable jsx-a11y/alt-text */
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBView,
} from "mdbreact";
import { Fragment } from "react";
import "./CleanProjectsPageMobile.css";
import { useTranslation } from "react-i18next";

const CleanProjectsPageMobile = () => {
  const { t } = useTranslation(["clean"]);
  return (
    <>
      <section id="cleanProjects" className="text-center my-5">
        <MDBContainer>{/* <TopLinkPageMobile/> */}</MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5">{t("A01")}</h2>
        <p className="w-responsive mx-auto mb-5">{t("A02")}</p>
        <MDBContainer>
          <hr className="CleanHrSize" />
        </MDBContainer>

        <MDBRow className="rowCleanProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center">
                <img src="/img/aboutIndex/clean/clean_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt mt-3">CleanEnergy</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">OVERVIEW</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="cleanSectionID">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="colCleanImg text-center">
              <img src="/img/aboutIndex/clean/clean_Combustor.png" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="rowText1Mb pl-3 pr-3 mb-5 mt-5">{t("A03")}</MDBRow>

          <MDBRow>
            <MDBCol className="colCleanImg text-center">
              <img src="/img/aboutIndex/clean/clean_Combustor2.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="text-center">
            <MDBCol sm="4" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <MDBCard>
                  <img
                    src="/img/aboutIndex/clean/clean_1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBCard>
              </MDBView>
            </MDBCol>
            <MDBCol sm="4" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <MDBCard>
                  <img
                    src="/img/aboutIndex/clean/clean_2.png"
                    alt=""
                    className="img-fluid"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBCard>
              </MDBView>
            </MDBCol>
            <MDBCol sm="4" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <MDBCard>
                  <img
                    src="/img/aboutIndex/clean/clean_3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBCard>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="cleanSection2Id">
        <MDBRow className="rowCleanProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/clean/clean_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt text-center pl-4 mt-3">
                Development
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">TECHNOLOGY</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <hr className="CleanHrSize" />
        </MDBContainer>

        <MDBRow sm="12" className="text-center mt-5">
          <MDBCardBody xl="12" className="pb-0">
            <MDBRow>
              <MDBCol className="ml-2 mr-2">{t("A04")}</MDBCol>
            </MDBRow>
            <MDBCol className="colCleanProjectsMb mt-1 pb-5 dark-text">
              <MDBTable bordered className="mt-5">
                <MDBTableBody>
                  {t("A05")
                    .split("\n")
                    .map((v, i) => {
                      const l = v.split(":");
                      const t = l[0];
                      const c = l[1];
                      return (
                        <tr key={i}>
                          <th style={{ fontWeight: "800" }}>{t}</th>
                          <td>{c}</td>
                        </tr>
                      );
                    })}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBCardBody>
        </MDBRow>
      </section>

      <section id="cleanSection3Id">
        <MDBRow className="rowCleanProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/clean/clean_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt text-center mt-3">Expectancy</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">EFFECTS</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <hr className="CleanHrSize" />
        </MDBContainer>

        <MDBRow className="text-center mt-5">
          <MDBCardBody className="pb-0">
            <MDBCol className="colCleanProjectsMb mt-5 pb-5 dark-text">
              {t("A06")}
            </MDBCol>
          </MDBCardBody>
        </MDBRow>
      </section>

      <section id="cleanSection4Id">
        <MDBRow className="rowCleanProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/clean/clean_logo.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt text-center mt-3">
                Application
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">AREA</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <hr className="CleanHrSize" />
        </MDBContainer>

        <MDBContainer className="containSection4Mb">
          <MDBRow className="mb-1 text-center">
            <MDBCol className="colArea">
              <img src="/img/aboutIndex/clean/clean_area.png" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* 

    <section id="cleanSection5IdMb">
<MDBContainer>
<MDBRow>
<MDBCol className="colSection5">
    <hr/>
</MDBCol>
<MDBCol className="colSection5">
    Net Work
</MDBCol>
<MDBCol className="colSection5">
    <hr/>
</MDBCol>
</MDBRow>
</MDBContainer>

<MDBContainer className="mt-5">
<MDBRow className='text-center'>
<MDBCol className="colSectionImg5">
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
    </MDBCol> 
</MDBRow>
</MDBContainer>
</section>
*/}
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

export default CleanProjectsPageMobile;
