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
import "./Pills.css";
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
        <MDBContainer id="pography">
          <MDBTypography blockquote bqColor="primary">
            <MDBBox tag="p" mb={0} className="bq-title">
              디지털 트위기반의 핵융합에너지 시설운용
            </MDBBox>
            <article style={{ fontWeight: "bold" }}>개요</article>
            <p>
              미래핵융합 발전소 디지털트윈을 위한 KSTAR 핵융합 주 장치 가상화 및
              감시 정보 시각화를 통한 가상 핵융합 VR 플랫폼 구현
            </p>

            <MDBRow>
              <MDBCol className="nfri-img">
                <img />
              </MDBCol>
              <MDBCol className="nfri-img1"></MDBCol>
              <MDBCol className="nfri-img2"></MDBCol>
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
                목적
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
                기술
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
            <MDBNavItem>
              <NavLink
                className="tab-link"
                link
                to="#"
                active={this.state.items["default"] === "4"}
                onClick={this.togglePills("default", "4")}
              >
                기타
              </NavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.items["default"]}>
            <MDBTabPane tabId="1">
              <ul>
                <li>초전도 핵융합 장치 건설 및 운전기술 확보</li>
                <li>고온 고밀도 핵융합 플라즈마의 장시간 유지 기술 개발</li>
                <li>미래 ITER,K-DEMO건설 및 운영 기술 개발</li>
              </ul>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <MDBRow>
                <MDBCol>
                  <ul>
                    <li>
                      XR기술을 활용한 KSTAR 핵융합 창치 가상화 및 디스플레이
                      시스템 개발
                    </li>
                    <li>XR기반 KSTAR 핵융합 장치 감시정보 시각화</li>
                    <li>
                      XR기반 핵융합 물리엔진 구현을 통한 가상 핵융합실험 및
                      공동연구 VR 플랫폼 구현
                    </li>
                    <li>
                      디지털트윈 기반 핵융합 VR플랫폼 교육/훈련 디스플레이
                      시스템
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="nfri-img3"></MDBCol>
              </MDBRow>
            </MDBTabPane>

            <MDBTabPane tabId="3">
              <ul>
                <li>네트워크 R&D</li>
                <li>국방 네트워크</li>
                <li>네트워크 장비 개조</li>
                <li>통신 서비스</li>
              </ul>
            </MDBTabPane>
            <MDBTabPane tabId="4">
              <p>내용없음</p>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </>
    );
  }
}

export default Pills;
