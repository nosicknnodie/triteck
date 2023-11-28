/* eslint-disable jsx-a11y/iframe-has-title */
import { MDBBtn, MDBIcon } from "mdbreact";
import { Component } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import "./CarouselRviWidget.css";

class CarouselRviWidget extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 2,
    showNavigation: true,
    onHoverStop: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img_rvi/4_1.png" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img_rvi/1_1.png" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img_rvi/3_1.png" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img_rvi/2_1.png" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img_rvi/6_1.gif" alt="5" />,
    },
    {
      key: uuidv4(),
      content: (
        <iframe
          width="700"
          height="400"
          src="https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/RVI_DSS_video.mp4"
          ratio="16by9"
          alt="6"
        />
      ),
    },
  ];

  render() {
    return (
      <>
        <section id="carouselId">
          <div style={{ width: "58%", height: "450px", margin: "0 auto" }}>
            <Carousel
              slides={this.slides}
              goToSlide={this.state.goToSlide}
              offsetRadius={this.state.offsetRadius}
              animationConfig={this.state.config}
              onHoverStop={this.state.config}
            />
            <div
              style={{
                margin: "0 auto",
                marginTop: "0.5rem",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <MDBBtn
                  rounded
                  outline
                  color="warning"
                  className="carouselBtn"
                  onClick={() => {
                    this.setState({ goToSlide: this.state.goToSlide - 1 });
                  }}
                >
                  <MDBIcon icon="angle-double-left " />
                </MDBBtn>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <MDBBtn
                  rounded
                  outline
                  color="warning"
                  className="carouselBtn"
                  onClick={() => {
                    this.setState({ goToSlide: this.state.goToSlide + 1 });
                  }}
                >
                  <MDBIcon icon="angle-double-right " />
                </MDBBtn>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CarouselRviWidget;
