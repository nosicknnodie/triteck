import React from "react";

import "./TopImgContactedMobile.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBAnimation,
  MDBBtn,
  MDBMask,
} from "mdbreact";

const TopImgContactedMobile = () => {
  return (
    <>
      <section id="TopImgContactedMobile">
        <MDBView className="containTopBg">
          <MDBMask MDBMask overlay="black-light" className="flex-center" />
          <MDBContainer>
            <MDBRow className="text-center">
              <MDBCol className="rowIconRot mt-5 pt-5 " sm="12">
                <MDBAnimation
                  delay=".3s"
                  className="white-text  animate__animated animate__fadeInRightBig "
                >
                  <h1 className="h1-responsive font-weight-bold pt-4 mb-4">
                    TriTech
                  </h1>
                  <hr className="hr-light pb-1" />

                  <h6 className="pb-1 pt-2">
                    <p className="pr-5 pl-5">Virtual Simulation</p>
                    <p className="pr-5 pl-5">ART Technology</p>
                    <p className="pr-5 pl-5">Clean Energy</p>
                  </h6>
                  <MDBRow className="text-center mb-5">
                    <MDBCol className="rowIconRot" sm="12">
                      <MDBAnimation
                        delay=".3s"
                        className="yellow-text  animate__animated animate__fadeInUpBig font-weight-bold"
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

export default TopImgContactedMobile;
