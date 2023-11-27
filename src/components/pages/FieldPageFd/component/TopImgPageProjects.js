import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  // MDBAvatar,
  MDBCarouselInner,
  MDBCarousel,
  MDBCarouselItem,
  MDBTestimonial,
  MDBMask,
  MDBView,
} from "mdbreact";

import CarouselWidget from "./CarouselWidget";
import CarouselVourWidget from "./CarouselVourWidget";
import CarouselRviWidget from "./CarouselRviWidget";
//import { truncate } from "lodash";

import "./TopImgPageProjects.css";

const TopImgPageProjects = () => {
  return (
    <>
      <section id="TopImgPageProjects">
        <MDBView className="containTopBg">
          <MDBMask overlay="black-strong" className="flex-center" />
          {/* <MDBMask overlay="light-strong" /> */}
          <MDBContainer className="mt-5">
            <MDBRow className="text-center">
              {/* <MDBCol className="rowIconRot mt-5 pt-5" sm="12"> */}
              <MDBCol>
                <MDBAnimation
                  delay=".3s"
                  className="topAnimation white-text  animate__animated animate__bounceInUp "
                >
                  <MDBCol className="mt-4 pt-3">
                    <hr className="hr-light mt-5 mb-4" />
                    <h4>
                      {" "}
                      222 Virtual Simulation / ART Technology / Clean Energy
                    </h4>
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
                        <h3 style={{ color: "white", wordBreak: "keep-all" }}>
                          핵융합 가상화,가시화 XR프로젝트
                        </h3>
                      </MDBCol>
                    </MDBRow>
                    <CarouselWidget />
                  </MDBTestimonial>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBTestimonial>
                    <MDBRow>
                      <MDBCol className="animate__animated animate__flipInX text-center">
                        <h3 style={{ color: "#FD8888", wordBreak: "keep-all" }}>
                          ICT기반 원자력 안전혁신기술 개발사업
                        </h3>
                      </MDBCol>
                    </MDBRow>
                    <CarouselRviWidget />
                  </MDBTestimonial>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBTestimonial>
                    <MDBRow>
                      <MDBCol className="animate__animated animate__flipInX text-center">
                        <h3 style={{ color: "#50EAF3", wordBreak: "keep-all" }}>
                          비대면 비즈니스 디지털혁신 기술개발사업
                        </h3>
                      </MDBCol>
                    </MDBRow>
                    <CarouselVourWidget />
                  </MDBTestimonial>
                </MDBCarouselItem>{" "}
                */}
              </MDBCarouselInner>
            </MDBContainer>
          </MDBCarousel>
        </MDBView>
      </section>
    </>
  );
};

export default TopImgPageProjects;
