/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import { Fragment } from "react";
import "../../../../common/form/contentDesign.css";
import "../../../../common/form/contentFont.css";
import "./VoucherProjectsPage.css";

const VoucherProjectsPage = () => {
  return (
    <>
      <section id="voucherProjects" className="text-center my-5">
        <MDBContainer>{/* <TopLinkPage/> */}</MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5">AR SIMULATION</h2>
        <p className="w-responsive mx-auto mb-5">
          비대면 비즈니스 디지털혁신 기술개발사업
        </p>
        <MDBContainer>
          <hr className="voucherHrSize" />
        </MDBContainer>
      </section>

      <section id="voucherSectionID">
        <MDBContainer>
          <MDBRow className="mb-5 pb-5">
            <MDBCol lg="5">
              <MDBView className="rounded  z-depth-2 mb-lg-0 mb-5" hover waves>
                <img
                  className="img-fluid"
                  src="/img/aboutIndex/voucher/voucher_3.png"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" className="text-left">
              {/* <a href="#!" className="green-text"> */}
              <img src="/img/aboutIndex/voucher/voucher_logo.png" />
              {/* </a> */}
              <h3 className="font-weight-bold mb-3 p-0">
                {/* <strong>Title of the news</strong> */}
              </h3>
              <p className="technology pl-0 pr-1 text-left">
                고객 주문 후 바로 제작하여 시공할 수 있도록 정밀도를 향상시킨
                비대면 인테리어 발주 AR앱 개발 시공사의 고효울 업무 수행을
                지원하여 대내외 차별화되는 사업 경쟁력 향상을 도모
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="voucherSection2Id">
        <MDBContainer>
          <MDBRow className=" mt-5 pt-5 mb-5 pb-5">
            <MDBCol lg="7" className="text-left">
              {/* <a href="#!" className="green-text"> */}
              <img src="/img/aboutIndex/voucher/voucher_logo1.png" />
              {/* </a> */}
              <h3 className="font-weight-bold mb-3 p-0">
                {/* <strong>Title of the news</strong> */}
              </h3>
              <p className="technology pl-1 pr-4 text-left">
                개발 및 사업화의 전문성을 갖춘 기관∙인력의 정밀한 가상 인테리어
                종합 서비스 환경구축
                <br />
                <br />
                차별성을 가진 가상 발주∙시공 AR앱을 사업화하여 인테리어 산업화의
                다각화 도모
              </p>
            </MDBCol>

            <MDBCol lg="5">
              <MDBView className="rounded  z-depth-2 mb-lg-0 mb-5" hover waves>
                <img
                  className="img-fluid"
                  src="/img/aboutIndex/voucher/voucher_2.png"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <MDBContainer>
        {/* --------------video--------------- */}

        <MDBRow className=" mt-5 pt-5 mb-5 pb-5">
          {/* <MDBCol lg="5">
        <SectionContainer header=''>
        <MDBCardGroup>
          <MDBCard>
            <MDBCardVideo
              src='https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4'
              ratio='16by9'
              
            />
            <MDBCardBody>
              <MDBCardTitle tag='h5'>  초전도 핵융합 장치 건설 및 운전기술 확보</MDBCardTitle>
              <MDBCardText>

              </MDBCardText>
              <MDBBtn color='primary' size='md'>
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCardGroup>
      </SectionContainer>

        
          </MDBCol> */}
          <MDBCol lg="5">
            <MDBView className="rounded  z-depth mb-lg-0 mb-5" hover waves>
              <img
                className="img-fluid"
                src="/img/aboutIndex/voucher/door.png"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>

          <MDBCol lg="7" className="text-left mt-4">
            <img
              src="/img/aboutIndex/voucher/voucher_logo2.png"
              className="pt-3"
            />

            <h3 className="font-weight-bold mb-3 p-0"></h3>
            <p className="letter pr-1 text-left">
              <spen className="font-weight-bold">기 술 혁 신 :</spen> 국내최초
              비대면 정밀시공 AR 앱 개발
              <br />
              <spen className="font-weight-bold">구 조 혁 신 :</spen> 프로세스
              간소화를 통한 편의성
              <br />
              <spen className="font-weight-bold">상품고도화 :</spen> 해외시장
              진출
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <section id="voucherSection4Id">
        <MDBRow className="rowvoucherProjectsWeb mt-5 mb-5">
          <MDBCol className="mt-5">
            <MDBRow>
              <MDBContainer>
                <MDBCol md="12" className="text-left mt-4 pl-5 ml-5">
                  <img src="/img/aboutIndex/voucher/voucher_logo3.png" />
                </MDBCol>
              </MDBContainer>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBContainer className="containSection4">
          <MDBRow sm="12" className="text-center">
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1" className="colArea">
              <img src="/img/aboutIndex/voucher/Precision.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>가상 / 정밀시공</h5>
            </MDBCol>
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1">
              <img src="/img/aboutIndex/voucher/Augmentation.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>증강현실기술</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="containSection4 pb-5">
          <MDBRow sm="12" className="text-center">
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1" className="colArea">
              <img src="/img/aboutIndex/voucher/client.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>시스템 최적화</h5>
            </MDBCol>
            <MDBCol sm="1"></MDBCol>
            <MDBCol sm="1">
              <img src="/img/aboutIndex/voucher/Nonface.png" />
            </MDBCol>
            <MDBCol sm="4">
              <h5>비대면 간편구매</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="bar">
        <MDBContainer className="mainContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <hr className="line" style={{ color: "#D080B7" }} />
              </MDBCol>
              <MDBCol>
                <sectionTitle style={{ color: "#D080B7" }}>
                  Net Work
                </sectionTitle>
              </MDBCol>
              <MDBCol>
                <hr className="line" style={{ color: "#D080B7" }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
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
