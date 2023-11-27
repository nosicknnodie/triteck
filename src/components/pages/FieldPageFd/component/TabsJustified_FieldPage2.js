import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  // MDBIcon,
} from "mdbreact";
import "./TabsJustified_FieldPage2.css";
import { NavLink } from "react-router-dom";

class TabsJustified_FieldPage2 extends Component {
  state = {
    activeItemJustifiedPage: "1",
  };

  toggleJustifiedPage = (tab) => (e) => {
    if (this.state.activeItemJustifiedPage !== tab) {
      this.setState({
        activeItemJustifiedPage: tab,
      });
    }
  };

  render() {
    return (
      <section id="TabsJustId2">
        <MDBContainer>
          <MDBNav tabs className="nav-justified" color="success">
            <MDBNavItem className="TitleNavLink">
              <NavLink
                className="textNavLink"
                link
                to="#"
                active={this.state.activeItemJustifiedPage === "1"}
                onClick={this.toggleJustifiedPage("1")}
                role="tab"
              >
                {/* <MDBIcon icon="vr-cardboard" /> */}
                고온다단싸이크론 연소로
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                className="textNavLink"
                link
                to="#"
                active={this.state.activeItemJustifiedPage === "2"}
                onClick={this.toggleJustifiedPage("2")}
                role="tab"
              >
                {/* <MDBIcon fab icon="laravel" /> */}
                연속공급방식
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                className="textNavLink"
                link
                to="#"
                active={this.state.activeItemJustifiedPage === "3"}
                onClick={this.toggleJustifiedPage("3")}
                role="tab"
              >
                {/* <MDBIcon icon="file-alt" /> */}
                일괄투입방식
              </NavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="card"
            activeItem={this.state.activeItemJustifiedPage}
          >
            {/* ------------------------------고온다단 싸이크론 연소로 내용 시작 ------------------------------------ */}

            <MDBTabPane tabId="1" role="tabpanel">
              <MDBRow className="DvScope mb-3 pr-2 pl-2">
                고온 다단 싸이크론 연소로
              </MDBRow>
              <MDBContainer>
                <MDBRow className="rowDvScope">
                  <MDBCol lg="6">
                    <img
                      src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Clean+Energy/image+19.png"
                      alt=""
                      className="colImgSize img-fluid rounded "
                    />
                  </MDBCol>

                  <MDBCol className="colImgSize2" lg="6">
                    <img
                      src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Clean+Energy/image+43.png"
                      alt=""
                      className="colImgSize2 img-fluid rounded"
                    />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              <MDBContainer>
                <MDBRow>
                  <MDBCol lg="6" className=" mt-3 mb-3">
                    <MDBCol className="DvScope col-md-12">
                      고압증기 분무 기술 적용에 의한 저 Nox 배출
                    </MDBCol>
                    <MDBCol className="DvScope col-md-12">
                      <MDBRow>
                        <MDBCol className="pt-4 col-md-8 text-left">
                          H + OH + NOx → H₂O + N₂ <br />
                          (2차 연소실 고온부에 고압증기 분무)
                        </MDBCol>
                        <MDBCol className="col-md-4 mb-3">
                          <img
                            src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Clean+Energy/image+20.png"
                            alt=""
                            className="colImgSize2 img-fluid rounded "
                          />
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>

                    <MDBCol className="col-md-1"></MDBCol>
                  </MDBCol>

                  <MDBCol lg="6" className=" mt-3 mb-3">
                    <MDBCol className="DvScope col-md-12">
                      2차 연소공기 : 배기가스 재순환
                    </MDBCol>
                    <MDBCol className="DvScope col-md-12">
                      <img
                        src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Clean+Energy/Group+6.png"
                        alt=""
                        className="colImgSize2 img-fluid rounded mb-2"
                      />
                    </MDBCol>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="DvScope2">고온 다단 싸이크론 연소로</MDBRow>
                <MDBRow>
                  <MDBCol className="mt-3">
                    <img
                      src="/img/fieldPage/clean energy/Group7.png"
                      alt="copy url"
                      className="colImgSize2 img-fluid rounded mb-2"
                    />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>

            <MDBTabPane tabId="2" role="tabpanel">
              <MDBRow>
                <MDBCol className="col-md-6 mt-3">
                  <img
                    src="/img/fieldPage/clean energy/CleanEnergy5.png"
                    alt="copy url"
                    className="colImgSize2 img-fluid rounded mb-2"
                  />
                  <MDBRow className="rowImgText">
                    <p style={{ color: "black", fontWeight: 600 }}>
                      증기 및 온수생산방식
                    </p>
                  </MDBRow>
                </MDBCol>

                <MDBCol className="col-md-6 mt-3">
                  <img
                    src="/img/fieldPage/clean energy/CleanEnergy6.png"
                    alt="copy url"
                    className="colImgSize2 img-fluid rounded mb-2"
                  />
                  <MDBRow className="rowImgText">
                    <p style={{ color: "black", fontWeight: 600 }}>
                      지정폐기물 소각처리방식
                    </p>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <MDBRow>
                <MDBCol className="col-md-12 mt-3">
                  <img
                    src="/img/fieldPage/clean energy/CleanEnergy7.png"
                    alt="copy url"
                    className="colImgSize2 img-fluid rounded mb-2"
                  />
                  <MDBRow className="rowImgText">
                    <p style={{ color: "black", fontWeight: 600 }}>
                      일괄 투입식 연소기
                    </p>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </section>
    );
  }
}

export default TabsJustified_FieldPage2;
