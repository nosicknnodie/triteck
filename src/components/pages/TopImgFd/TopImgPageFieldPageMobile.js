import React from "react";
// import React, {Fragment} from "react";

import "./TopImgPageFieldPageMobile.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBAnimation,
  MDBCarouselInner,
  MDBCarouselItem,
  // MDBBtn,
  MDBCarousel,
  MDBMask,
  MDBTestimonial,
} from "mdbreact";
import CarouselMobileWidget from "../FieldPageFd/component/CarouselMobileWidget";
import CarouselMobileVourWidget from "../FieldPageFd/component/CarouselMobileVourWidget";
import CarouselMobileRviWidget from "../FieldPageFd/component/CarouselMobileRviWidget";

const TopImgPageFieldPageMobile = () => {
  return (
    <>
      <section id="TopImgPageFieldPageMobile">
        <MDBView className="containTopBg">
          <MDBMask MDBMask overlay="black-light" className="flex-center" />
          <MDBContainer className="mt-0">
            <MDBRow className="text-center">
              <MDBCol className="rowIconRot mt-5 pt-5" sm="12">
                <MDBAnimation
                  delay=".3s"
                  className="topAnimation white-text  animate__animated animate__bounceInUp "
                >
                  {/* <MDBCol className="mt-4 pt-3"> */}
                  <MDBCol>
                    <hr className="hr-light mt-5 mb-4" />
                    <h6 style={{ wordBreak: "keep-all" }}>
                      Virtual Simulation / ART Technology / Clean Energy
                    </h6>
                    <hr className="hr-light " />
                  </MDBCol>
                  <MDBRow></MDBRow>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBCarousel
            showControls={true}
            activeItem={1}
            length={3}
            testimonial
            interval={false}
            showIndicators={false}
            className="z-depth-0"
          >
            <MDBContainer>
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBTestimonial>
                    <MDBRow>
                      <MDBCol className="animate__animated animate__flipInX text-center">
                        <p style={{ color: "white", wordBreak: "keep-all" }}>
                          핵융합 가상화,가시화 XR프로젝트
                        </p>
                      </MDBCol>
                    </MDBRow>

                    <MDBContainer className="pb-5 mb-5">
                      <CarouselMobileWidget />
                    </MDBContainer>
                  </MDBTestimonial>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBTestimonial>
                    <MDBRow>
                      <MDBCol className="animate__animated animate__flipInX text-center">
                        <p style={{ color: "#FD8888", wordBreak: "keep-all" }}>
                          ICT기반 원자력 안전혁신기술 개발사업
                        </p>
                      </MDBCol>
                    </MDBRow>

                    <MDBContainer className="pb-5 mb-5">
                      <CarouselMobileRviWidget />
                    </MDBContainer>
                  </MDBTestimonial>
                </MDBCarouselItem>

                <MDBCarouselItem itemId="3">
                  <MDBTestimonial>
                    <MDBRow>
                      <MDBCol className="animate__animated animate__flipInX text-center">
                        <p style={{ color: "#50EAF3", wordBreak: "keep-all" }}>
                          비대면 비즈니스 디지털혁신 기술개발사업
                        </p>
                      </MDBCol>
                    </MDBRow>
                    <MDBContainer className="pb-5 mb-5">
                      <CarouselMobileVourWidget />
                    </MDBContainer>
                  </MDBTestimonial>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBContainer>
          </MDBCarousel>
        </MDBView>
      </section>
    </>
  );
};

export default TopImgPageFieldPageMobile;
