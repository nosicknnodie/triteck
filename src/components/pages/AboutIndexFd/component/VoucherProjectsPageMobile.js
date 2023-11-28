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
import "../../../../common/form/contentFont.css";
import "./VoucherProjectsPageMobile.css";

const VoucherProjectsPage = () => {
  return (
    <>
      <section id="voucherProjects" className="text-center my-5">
        <MDBContainer>{/* <TopLinkPageMobile/> */}</MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5">AR SIMULATION</h2>
        <p className="w-responsive mx-auto mb-5">
          비대면 비즈니스 디지털혁신 기술개발사업
        </p>
        <MDBContainer>
          <hr className="voucherHrSize" />
        </MDBContainer>

        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt mt-3">AR Web Service</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="colTextpt2 text-center">OVERVIEW</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>

      <section id="voucherSectionID">
        <MDBContainer>
          <MDBRow className="rowText1Mb pl-2 pr-2 mb-5">
            고객 주문 후 바로 제작하여 시공할 수 있도록 정밀도를 향상시킨 비대면
            인테리어 발주 AR앱 개발 시공사의 고효울 업무 수행을 지원하여 대내외
            차별화되는 사업 경쟁력 향상을 도모
          </MDBRow>

          <MDBRow className="text-center">
            <MDBCol sm="6" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <MDBCard>
                  <img
                    src="/img/aboutIndex/voucher/voucher_3.png"
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

      <section id="voucherSection2Id">
        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
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
          <hr className="voucherHrSize" />
          <MDBCol sm="6" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <MDBCard>
                <img
                  src="/img/aboutIndex/voucher/voucher_2.png"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBCard>
            </MDBView>
          </MDBCol>
        </MDBContainer>

        <MDBRow className="text-center mt-5">
          <MDBCardBody className="pb-0">
            <MDBCol className="colVoucherProjectMb mt-1 pb-5 dark-text">
              개발 및 사업화의 전문성을 갖춘 기관∙인력의 정밀한 가상 인테리어
              종합 서비스 환경구축 차별성을 가진 가상 발주∙시공 AR앱을
              사업화하여 인테리어 산업화의 다각화 도모
            </MDBCol>
          </MDBCardBody>
        </MDBRow>
      </section>

      <section id="voucherSection3Id">
        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
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
          <hr className="voucherHrSize" />
          <MDBCol sm="6" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth" waves>
              <MDBCard>
                <img
                  src="/img/aboutIndex/voucher/door.png"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBCard>
            </MDBView>
          </MDBCol>
        </MDBContainer>

        <MDBRow className="text-center mt-5">
          <MDBContainer>
            <MDBTable bordered className="mt-5">
              <MDBTableHead>
                <tr>
                  <th style={{ fontWeight: "800" }}>기술 혁신</th>
                  <td>국내최초 비대면 정밀시공 AR 앱 개발</td>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th style={{ fontWeight: "800" }}>구조 혁신</th>
                  <td>프로세스 간소화를 통한 편의성</td>
                </tr>
                <tr>
                  <th style={{ fontWeight: "800" }}>상품고도화</th>
                  <td>해외시장 진출</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBContainer>
        </MDBRow>
      </section>

      <section id="voucherSection4Id">
        <MDBRow className="rowVoucherProjectsMobile mt-5 mb-5">
          <MDBCol>
            <MDBRow>
              <MDBCol md="12" className="text-center mt-4">
                <img src="/img/aboutIndex/voucher/voucher_logo_m.png" />
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
          <hr className="voucherHrSize" />
        </MDBContainer>

        <MDBContainer className="containSection4Mb">
          <MDBRow className="mb-1 text-center">
            <MDBCol className="colArea">
              <img src="/img/aboutIndex/voucher/Precision.png" />
            </MDBCol>
            <MDBCol>
              <img src="/img/aboutIndex/voucher/Augmentation.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-5">
            <MDBCol className="text-center mt-3">
              <h6>가상 / 정밀시공</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>증강현실기술</h6>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-1 text-center">
            <MDBCol className="colArea">
              <img src="/img/aboutIndex/voucher/client.png" />
            </MDBCol>
            <MDBCol>
              <img src="/img/aboutIndex/voucher/Nonface.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-5">
            <MDBCol className="text-center mt-3">
              <h6>고객만족증대</h6>
            </MDBCol>
            <MDBCol className="text-center mt-3">
              <h6>비대면 간편구매</h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* --------------net work--------------- */}
      <section id="bar">
        <MDBContainer className="mainContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <hr className="line" style={{ color: "#AA6496" }} />
              </MDBCol>
              <MDBCol>
                <title2 style={{ color: "#AA6496" }}>Net Work</title2>
              </MDBCol>
              <MDBCol>
                <hr className="line" style={{ color: "#AA6496" }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* <section id="voucherSection5IdMb">
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
</MDBContainer> */}

          <MDBContainer className="mt-5">
            <MDBRow className="text-center">
              <MDBCol className="colSectionImg5">
                <img src="/img/network/jh.png" />
              </MDBCol>
              <MDBCol className="colSectionImg5">
                <img src="/img/network/Smu.png" />
              </MDBCol>
              <MDBCol className="colSectionImg5">
                <img src="/img/network/globe.png" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>
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

export default VoucherProjectsPage;
