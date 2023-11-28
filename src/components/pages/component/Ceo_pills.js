import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
} from "mdbreact";
import "./Ceo_pills.css";
import { NavLink } from "react-router-dom";

class Ceo_pills extends Component {
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
      <section id="pills-id">
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <MDBNav className="mt-5 nav-pills">
                <MDBNavItem>
                  <NavLink
                    link
                    to="#"
                    active={this.state.items["default"] === "1"}
                    onClick={this.togglePills("default", "1")}
                  >
                    특허
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    link
                    to="#"
                    active={this.state.items["default"] === "2"}
                    onClick={this.togglePills("default", "2")}
                  >
                    연구실적
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    link
                    to="#"
                    active={this.state.items["default"] === "3"}
                    onClick={this.togglePills("default", "3")}
                  >
                    주요과제
                  </NavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.items["default"]}>
                <MDBTabPane tabId="1">
                  <p>명칭: 용접 시뮬레이션 장치</p>
                  <p>번호: 특허 제 10-0926045호</p>
                  <p>특허권자: (주)코리아일레콤, 기재석</p>
                  <p>등록일:2009.11.03</p>
                </MDBTabPane>

                <MDBTabPane tabId="2">
                  <div>
                    <h5>2009년, 2010년 수행</h5>
                  </div>

                  <p>
                    ○ 2010년, 2011년도 스포츠산업 기술개발사업 전략과제
                    기획(문화체육관광부) <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>역할:</span>{" "}
                    수상레져스포츠 분과위원장 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span>{" "}
                    “스포츠과학기반 다기능 소형 포터블 보트 및 IT 융합
                    라이프자켓 개발” 과제를 발굴하여 2011년도부터 3년간 개발사업
                    승인(총 30억)되어 2011년 10월부터 상명대에서 수행
                  </p>

                  <div>
                    <h5>2009년 수행</h5>
                  </div>
                  <p>
                    ○ 스포츠산업기술개발사업 중장기 계획(문화체육관광부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>역할:</span> 연구기획
                    위원장장 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span> 2011년부터
                    2020년도까지 10년간 추진할 전략과제를 발굴하고
                    스포츠산업기술 발전을 위한 로드맵을 만들어 보고서 제출
                  </p>

                  <div>
                    <h5>2012년 수행</h5>
                  </div>
                  <p>
                    ○ 동계 스포츠과학 R&D 사업 기획(문화체육관광부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>역할:</span> 정보 및
                    서비스 분과위원장 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span> 2018년
                    평창동계올림픽을 기회로 동계스포츠 발전과 산업화에 기여하기
                    위한 전략수립
                  </p>

                  <p>
                    ○ 범부처 스포츠과학화사업(평창코리아
                    프로젝트(교육과학부/문화체육관광부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>
                      역할:
                    </span> 기획위원 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span> 2018년
                    평창동계올림픽을 기회로 동계스포츠 발전과 산업화에 기여하기
                    위한 예비타당성 연구
                  </p>

                  <p>
                    ○ 스포츠산업기술 기본계획 수립(문화체육관광부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>
                      역할:
                    </span> 연구위원 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span> 스포츠
                    산업기술 중장기 전략 수립
                  </p>

                  <p>
                    ○ e-Traing 산업 전략 보고서 기획(산업통상부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>
                      역할:
                    </span> 연구위원 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span>{" "}
                    가상현실기반의 시뮬레이션을 이용한 교육/훈련 콘텐츠
                    개발기술을 맡아 기획함
                  </p>

                  <div>
                    <h5>2013년 수행</h5>
                  </div>
                  <p>
                    ○ 2014년도 스포츠산업 기술개발사업 전략과제
                    기획(문화체육관광부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>
                      역할:
                    </span> 분과위원장 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span> 2014년
                    예비전략과제인 “스크린야구 시스템 개발”을 기획하여 선정됨
                  </p>
                </MDBTabPane>

                <MDBTabPane tabId="3">
                  <div>
                    <h5>2009년, 2010년 수행</h5>
                  </div>
                  <p>
                    ○ 2010년, 2011년도 스포츠산업 기술개발사업 전략과제
                    기획(문화체육관광부) <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>역할:</span>{" "}
                    수상레져스포츠 분과위원장 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span>{" "}
                    “스포츠과학기반 다기능 소형 포터블 보트 및 IT 융합
                    라이프자켓 개발” 과제를 발굴하여 2011년도부터 3년간 개발사업
                    승인(총 30억)되어 2011년 10월부터 상명대에서 수행
                  </p>

                  <div>
                    <h5>2009년 수행</h5>
                  </div>
                  <p>
                    ○ 스포츠산업기술개발사업 중장기 계획(문화체육관광부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>역할:</span> 연구기획
                    위원장장 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span> 2011년부터
                    2020년도까지 10년간 추진할 전략과제를 발굴하고
                    스포츠산업기술 발전을 위한 로드맵을 만들어 보고서 제출
                  </p>

                  <div>
                    <h5>2012년 수행</h5>
                  </div>
                  <p>
                    ○ 동계 스포츠과학 R&D 사업 기획(문화체육관광부)
                    <br />
                    <br />
                    <span style={{ fontWeight: "500" }}>역할:</span> 정보 및
                    서비스 분과위원장 <br />
                    <span style={{ fontWeight: "500" }}>내용:</span> 2018년
                    평창동계올림픽을 기회로 동계스포츠 발전과 산업화에 기여하기
                    위한 전략수립
                  </p>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Ceo_pills;
