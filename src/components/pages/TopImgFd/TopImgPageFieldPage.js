import React from "react";

import "./TopImgPageFieldPage.css";

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

import CarouselWidget from "../FieldPageFd/component/CarouselWidget";
import CarouselVourWidget from "../FieldPageFd/component/CarouselVourWidget";
import CarouselRviWidget from "../FieldPageFd/component/CarouselRviWidget";
import { useTranslation } from "react-i18next";

//import { truncate } from "lodash";

const TopImgPageFieldPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="TopImgPageFieldPage_1">
        <MDBView className="containTopBg">
          <MDBMask overlay="black-strong" />
          <MDBMask overlay="light-strong" />
          <MDBContainer className="mt-5">
            <MDBRow className="text-center">
              <MDBCol className="rowIconRot mt-5 pt-5" sm="12">
                <MDBAnimation
                  delay=".3s"
                  className="topAnimation white-text  animate__animated animate__bounceInUp "
                >
                  <MDBCol className="mt-4 pt-3">
                    <hr className="hr-light mt-5 mb-4" />
                    <h4>Virtual Simulation / ART Technology / Clean Energy</h4>
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
                          {t("T01")}
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
                          {t("T02")}
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
                          {t("T03")}
                        </h3>
                      </MDBCol>
                    </MDBRow>
                    <CarouselVourWidget />
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

export default TopImgPageFieldPage;
