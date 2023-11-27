import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBIcon,
} from "mdbreact";
import "./TabsJustified_FieldPage.css";
import { NavLink } from "react-router-dom";

class TabsJustified_FieldPage extends Component {
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
      <section id="TabsJustId">
        <MDBContainer>
          <MDBNav tabs className="nav-justified" color="primary">
            <MDBNavItem>
              <NavLink
                link
                to="#"
                active={this.state.activeItemJustifiedPage === "1"}
                onClick={this.toggleJustifiedPage("1")}
                role="tab"
              >
                {/* <MDBIcon icon="vr-cardboard" /> */}
                소방훈련
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                link
                to="#"
                active={this.state.activeItemJustifiedPage === "2"}
                onClick={this.toggleJustifiedPage("2")}
                role="tab"
              >
                {/* <MDBIcon fab icon="laravel" /> */}
                가상안전체험관
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                link
                to="#"
                active={this.state.activeItemJustifiedPage === "3"}
                onClick={this.toggleJustifiedPage("3")}
                role="tab"
              >
                {/* <MDBIcon icon="file-alt" /> */}
                교육용 시뮬레이터
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                link
                to="#"
                active={this.state.activeItemJustifiedPage === "4"}
                onClick={this.toggleJustifiedPage("4")}
                role="tab"
              >
                {/* <MDBIcon icon="file-alt" /> */}
                스포츠 ICT
              </NavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="card"
            activeItem={this.state.activeItemJustifiedPage}
          >
            <MDBTabPane tabId="1" role="tabpanel">
              <MDBRow className="DvScope mb-3 pr-2 pl-2">
                소방훈련지휘시스템
              </MDBRow>

              <MDBRow>
                <MDBCol lg="8">
                  <MDBRow className="DvImg mb-3">
                    <MDBCol md="11" size="10">
                      {/* <h6 className="font-weight-bold mb-3">소방훈련지휘시스템</h6> */}

                      <p className="vrText">
                        소방 지휘훈련 시뮬레이터는 2005년도에 국내 최초로
                        가상현실 기반의 팀단위 훈련이 가능한 대규모화재
                        진압훈련용 시뮬레이터
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="DvImg mb-3">
                    <MDBCol md="1" size="2">
                      <MDBIcon size="2x" className="red-text" />
                      {/* <MDBIcon icon="code" size="2x" className="red-text" /> */}
                    </MDBCol>
                    <MDBCol md="11" size="10" className="mr-1 ml-1">
                      <p className="vrText">
                        개발 후 문화재화재진합훈련을 위한 시뮬레이터 등 다양한
                        시뮬레이터 개발
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol lg="4">
                  <img
                    src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+31.png"
                    alt=""
                    className="img-fluid rounded z-depth-1"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="DvScope mt-3 pr-2 pl-2">
                화재재난현장 팀단위 전술 및 도상훈련 시뮬레이션 개발
              </MDBRow>
              <MDBRow className="DvScopeText mr-1 ml-1">
                2012 년 4월부터 2년간 3D 게임을 통해 소방관들의 표준작전 절차를
                익힐 수 있도록 팀단위의 전술훈련용 시뮬레이션 게임 개발
              </MDBRow>
              <MDBRow className="SimulationCont">
                <MDBCol lg="7" className="mr-4 pt-4">
                  <MDBRow className="DvImg">
                    <img
                      src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+25.png"
                      alt=""
                      className="img-fluid1 rounded  mb-1 "
                    />
                  </MDBRow>
                </MDBCol>

                <MDBCol lg="4" className="mr-1 ml-1">
                  <MDBRow className="DvImg2 ml-1 ">
                    <img
                      src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/Rectangle149.png"
                      alt=""
                      className="img-fluid2 rounded  mb-1"
                    />
                  </MDBRow>
                  <MDBRow className="DvImg3 mb-1 ml-1 ">
                    <img
                      src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+27.png"
                      alt=""
                      className="img-fluid2 rounded  mb-1"
                    />
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <MDBRow className="DvScope mb-3 pr-2 pl-2">가상안전체험관</MDBRow>

              <MDBRow>
                <MDBCol lg="12">
                  <MDBRow className="DvImg mb-3">
                    <MDBCol md="12" size="10">
                      {/* <h6 className="font-weight-bold mb-3">소방훈련지휘시스템</h6> */}

                      <p className="vrText">
                        1999년도에 노동부 산업안전관리공단의 가상안전체험관
                        계획에 자문교수로 참여하여 가상안전체험관의 규격 제시.
                        이후 포항제철, 현대중공업, 미포조선, 삼호중공업, GS건설
                        등 대규모 사업장에서 보다 수준 높은 안전교육을 위해
                        가상안전체험관 구축
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="col-md-6">
                      <img
                        src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+28.png"
                        alt=""
                        className="img-fluid rounded z-depth-1 mb-1"
                      />
                    </MDBCol>
                    <MDBCol className="col-md-6">
                      <img
                        src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+29.png"
                        alt=""
                        className="img-fluid rounded z-depth-1 mb-1"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <MDBRow className="DvScope mb-3 pr-2 pl-2">
                고소작업대 교육용 시뮬레이터
              </MDBRow>

              <MDBRow>
                <MDBCol lg="12">
                  <MDBRow className="DvImg mb-3">
                    <MDBCol md="12" size="10">
                      {/* <h6 className="font-weight-bold mb-3">소방훈련지휘시스템</h6> */}

                      <p className="vrText">
                        현대중공업에서 필요한 고소작업대 훈련용 시뮬레이터
                        개발로 가상의 훈련환경에서 고소작업대를 조종하는
                        훈련장치를 개발함
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol className="col-md-8">
                      <img
                        src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+32.png"
                        alt=""
                        className="img-fluid rounded z-depth-1 mb-1"
                      />
                    </MDBCol>
                    <MDBCol md="2"></MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBTabPane>

            <MDBTabPane tabId="4" role="tabpanel">
              <MDBRow className="DvScope mb-3 pr-2 pl-2">스포츠 ICT</MDBRow>

              <MDBRow>
                <MDBCol lg="12">
                  <MDBRow className="DvImg mb-3">
                    <MDBCol md="12" size="10">
                      {/* <h6 className="font-weight-bold mb-3">소방훈련지휘시스템</h6> */}

                      <p className="vrText">
                        정보통신기술 (ICT :Information & Communications
                        Technology)과 스포츠 기기가 융합된 스포츠콘텐츠 . 기존
                        전자호구 대비 경량화 및 센서기능이 향상된 저거형의
                        수련용 전자호 개발
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol className="col-md-8">
                      <img
                        src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+30.png"
                        alt=""
                        className="img-fluid rounded z-depth-1 mb-1"
                      />
                    </MDBCol>
                    <MDBCol md="2"></MDBCol>
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

export default TabsJustified_FieldPage;
