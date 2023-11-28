import React from "react";

import "./TopImgContactedWeb.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBAnimation,
  MDBBtn,
  MDBMask,
} from "mdbreact";

const TopImgContactedWeb = () => {
  return (
    <>
      <section id="TopImgContactedWeb">
        <MDBView className="containTopBg">
          <MDBMask MDBMask overlay="black-light" className="flex-center" />
          <MDBContainer>
            <MDBRow className="text-center mt-5">
              <MDBCol className="rowIconRot mt-5 pt-5 " sm="12">
                <MDBAnimation
                  delay=".3s"
                  className="topAnimation white-text  animate__animated animate__fadeInRightBig "
                >
                  <h1 className="h1-responsive font-weight-bold pt-5 mt-4 mb-4 pb-5">
                    TriTech
                  </h1>
                  <hr className="hr-light pb-1" />

                  <h6 className="pb-5">
                    <span className="pr-5 pl-5">Virtual Simulation</span>
                    <span className="pr-5 pl-5">ART Technology</span>
                    <span className="pr-5 pl-5">Clean Energy</span>
                  </h6>

                  <MDBRow className="text-center mb-5">
                    <MDBCol className="rowIconRot" sm="12">
                      <MDBAnimation
                        delay=".3s"
                        className="topAnimation yellow-text  animate__animated animate__fadeInLeftBig font-weight-bold"
                      >
                        <MDBBtn
                          color="warning"
                          rounded
                          outline
                          className="font-weight-bold"
                          href="/pages/ContactFd/contact"
                        >
                          Contact Us{" "}
                        </MDBBtn>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </section>
    </>
  );
};

export default TopImgContactedWeb;
