import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { MDBIcon, MDBBtn } from "mdbreact";
import "./CarouselWidget.css";

class CarouselWidget extends Component {
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
      content: <img src="/img/FieldIndex/field/size_img/3_1.png" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img/2_2.png" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img/1_1.png" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img/4_1.png" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src="/img/FieldIndex/field/size_img/5_1.png" alt="5" />,
    },
    // {
    //   key: uuidv4(),
    //   content: <iframe className="videoKstar" width="800" height="450" src="https://www.youtube.com/embed/chsZQTgGyMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt="6"/>
    // },
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

export default CarouselWidget;
