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
import "./Pills_2.css";
import { NavLink } from "react-router-dom";
class Pills extends Component {
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
        <MDBContainer id="pography_1">
          <MDBTypography blockquote bqColor="primary">
            <MDBBox tag="p" mb={0} className="bq-title">
              ICT기반 원자력 안전혁신기술 개발사업
            </MDBBox>
            <article style={{ fontWeight: "bold" }}>개요</article>
            <p>
              원자력시설 및 설비의 해체를 가상 현실 하에서 수행하여 실증 실험과
              같은 효과를 거둘 수 있는 ICT 기반 원격해체 모듈을 통합하여 가상
              Simulation 시스템 개발
            </p>

            <MDBRow>
              <MDBCol className="ict-img"></MDBCol>
              <MDBCol className="ict-img1"></MDBCol>
              <MDBCol className="ict-img2"></MDBCol>
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
              <ul>
                <li>자체 원전 해제 공정 기술</li>
                <li>원격 원전 해제를 위한 필요 로봇 기술</li>
                <li>5G 통신 기술을 통한 실시간 원격 해체 공정 기술</li>
                <li>
                  AI 기술을 통한 최적의 원격 해제 공적 시나리오 도출 및 기술
                </li>
                <li>가상 해체환경 개발기술</li>
              </ul>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <MDBRow>
                <MDBCol>
                  <ul>
                    <li>
                      복잡한 원전 해체 절차를 가상현실로 모사하여 다양한 해체
                      공정 시나리오를 적용하여 해체 절차 및 장비 문제점 등을
                      분석/평가하고, 작업자의 숙련도를 높여 해체 공정 시스템
                      최적화 (ALARA)에 활용{" "}
                    </li>
                    <li>
                      해체 공정 시스템에 사용되는 장비 에뮬레이션 모델을 통해
                      해체 공정에 대한 모의실험으로 해체 공정 전략을 구축에 대한
                      안전성 및 신뢰성 평가 기여
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <ul>
                <li>원격제어</li>
                <li>디지털 틔윈</li>
                <li>시스템 최적화</li>
                <li>절차 분석/관리</li>
              </ul>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </>
    );
  }
}

export default Pills;
