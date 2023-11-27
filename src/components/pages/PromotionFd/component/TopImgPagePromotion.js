import React from "react";

import "./TopImgPagePromotion.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBMask,
} from "mdbreact";

const TopImgPagePromotion = () => {
  return (
    <>
      <section id="TopImgPagePromotion_1">
        <MDBView className="containTopBg">
          <MDBMask MDBMask overlay="black-light" className="flex-center" />
          <MDBContainer>
            <MDBRow className="text-center mt-5">
              <MDBCol className="rowIconRot mt-5 pt-5 " sm="12">
                <MDBAnimation
                  delay=".3s"
                  className="topAnimation white-text  animate__animated animate__fadeInRightBig "
                >
                  <h1 className="h1-responsive font-weight-bold pt-5 mb-4">
                    TriTech
                  </h1>

                  <h6 className="mb-1 font-weight-bold">- 블로그 -</h6>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    (주)트라이텍은 R&D(Reearch and Devlopment) 분야에서 국내
                    최고의 기술력과 사업수행실적을 보유한 연구소로
                    <br />
                    VR.AR기반 Simulation, ART Technology, 친환경 폐기물 처리기술
                    솔루션 및 서비스를 제공합니다.
                  </h6>
                  <MDBRow className="text-center mt-5">
                    <MDBCol className="rowIconRot" sm="12">
                      <MDBAnimation
                        delay=".3s"
                        className="topAnimation white-text  animate__animated animate__fadeInRightBig"
                      ></MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  {/* <MDBBtn className="btnWeb" color="green" outline rounded href="/pages/CeoFd/ceo">블로그</MDBBtn>      
            <MDBBtn className="btnMobile" color="green" rounded href="/pages/CeoFd/ceo">블로그</MDBBtn>   */}
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </section>
    </>
  );
};

export default TopImgPagePromotion;
