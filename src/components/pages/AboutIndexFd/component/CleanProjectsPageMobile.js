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

const CleanProjectsPageMobile = () => {
  return (
    <>
      <section id="cleanProjects" className="text-center my-5">
        <MDBContainer>{/* <TopLinkPageMobile/> */}</MDBContainer>
        <h2 className="h1-responsive font-weight-bold my-5">클린에너지</h2>
        <p className="w-responsive mx-auto mb-5">고온 다단 싸이크론 연소기술</p>
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
          <MDBRow className="rowText1Mb pl-3 pr-3 mb-5 mt-5">
            열분해 연소기술 및 다단연소와 배기가스 재순환설비 등을 복합적으로
            적용하는 저 NOx 화 “고온 다단 싸이크론 연소기술”을 개발하여
            폐기물(고체, 액체 및 기체) 연소장치로 다양하게 응용하고 있다.
          </MDBRow>

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
              <MDBCol className="ml-2 mr-2">
                높은 예열의 완전연소 구현으로 산업전반에 다양한 적용기술 -
                청정성, 경제성 확보
              </MDBCol>
            </MDBRow>
            <MDBCol className="colCleanProjectsMb mt-1 pb-5 dark-text">
              <MDBTable bordered className="mt-5">
                <MDBTableHead>
                  <tr>
                    <th style={{ fontWeight: "800" }}>
                      내화벽 / 수냉식 냉각설비 불필요
                    </th>
                    <td>최첨단 막냉각(Film Cooling)기술</td>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th style={{ fontWeight: "800" }}>완전연소 및 환경친화</th>
                    <td>
                      Self pre-heating 높은 공기예열로 완전연소 구현 및 유해가스
                      완전 열분해
                    </td>
                  </tr>
                  <tr>
                    <th style={{ fontWeight: "800" }}>초고온 연소</th>
                    <td>
                      고온연소로 단순 열공급에서 발전 / 첨단산업으로 활용가능
                    </td>
                  </tr>
                  <tr>
                    <th style={{ fontWeight: "800" }}>클링커 발생 방지</th>
                    <td>연소로 하단의 재실 배출로 클링커 발생 원인 제거</td>
                  </tr>
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
              복잡한 원전 해체 절차를 가상현실로 모사하여 다양한 해체 공정
              시나리오를 적용하여 해체 절차 및 장비 문제점 등을 분석/평가하고,
              작업자의 숙련도를 높여 해체 공정 시스템 최적화 (ALARA)에 활용 해체
              공정 시스템에 사용되는 장비 에뮬레이션 모델을 통해 해체 공정에
              대한 모의실험으로 해체 공정 전략을 구축에 대한 안전성 및 신뢰성
              평가 기여.
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
