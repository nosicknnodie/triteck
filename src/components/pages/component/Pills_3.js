import React, { Component } from "react";
import {
  MDBIcon,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBContainer,
  MDBBtn,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBTypography,
  MDBBox,
} from "mdbreact";
import "./Pills_3.css";
import { NavLink } from "react-router-dom";
class Pills_3 extends Component {
  state = {
    items: {
      default: "1",
    },
  };

  togglePills = (type, tab) => (e) => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items,
      });
    }
  };

  render() {
    return (
      <>
        <MDBContainer></MDBContainer>
        <MDBContainer id="pography_2">
          <MDBTypography blockquote bqColor="primary">
            <MDBBox tag="p" mb={0} className="bq-title">
              클린에너지
            </MDBBox>
            <article style={{ fontWeight: "bold" }}>개요</article>
            <p>
              내화벽돌을 사용하지 않고, 연소용 공기의 흐름을 싸이크론 회전식으로
              변환시켜서 단열효과와 함께 흡수된 고온으로 연소를 지원하며, 고온의
              열을 손실 없이 에너지로 변환시킨다.
            </p>
            <p>
              열분해 연소기술 및 다단연소와 배기가스 재순환설비 등을 복합적으로
              적용하는 저 NOx 화 “고온 다단 싸이크론 연소기술”을 개발하여
              폐기물(고체, 액체 및 기체) 연소장치로 다양하게 응용하고 있다.
            </p>

            <MDBRow>
              <MDBCol className="cle-img"></MDBCol>
              <MDBCol className="cle-img1"></MDBCol>
            </MDBRow>
          </MDBTypography>
        </MDBContainer>

        <MDBContainer id="tab-atg">
          <MDBNav pills color="secondary">
            <MDBNavItem>
              <NavLink
                className="tab-link"
                link
                to="#"
                active={this.state.items["default"] === "1"}
                onClick={this.togglePills("default", "1")}
              >
                기술
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                className="tab-link"
                link
                to="#"
                active={this.state.items["default"] === "2"}
                onClick={this.togglePills("default", "2")}
              >
                기대효과
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                className="tab-link"
                link
                to="#"
                active={this.state.items["default"] === "3"}
                onClick={this.togglePills("default", "3")}
              >
                적용분야
              </NavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.items["default"]}>
            <MDBTabPane tabId="1">
              <MDBRow>
                <MDBCol className="title-1">
                  <h6>
                    높은 예열의 완전연소 구현으로 산업전반에 다양한 적용기술 –
                    청정성, 경제성 확보
                  </h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="tech-img"></MDBCol>
              </MDBRow>
            </MDBTabPane>

            <MDBTabPane tabId="2">
              <MDBRow>
                <MDBCol>
                  <p>
                    고온 다단 싸이크론 연소기술은 물성에 적합한 특수형 전처리 및
                    대기오염 방지 설비와 함께 효율적이고 환경기준에 적합하며
                    안전하고 손쉽게 사용 할 수 있다.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <MDBContainer className="Application">
                <MDBCol className="Application-img"></MDBCol>
              </MDBContainer>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </>
    );
  }
}

export default Pills_3;
