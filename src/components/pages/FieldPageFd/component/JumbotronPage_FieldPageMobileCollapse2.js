import React, { Component } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBRow,
  MDBCol,
  // Fragment,
  // MDBBox,
} from "mdbreact";
import "./JumbotronPage_FieldPageMobileCollapse2.css";
import TopLinkPage from "../../component/TopLinkPage";

class JumbotronPage_FieldPageMobileCollapse2 extends Component {
  state = {
    collapseID: "collapse1",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    const { collapseID } = this.state;
    return (
      <MDBContainer id="ContainTopText2">
        <MDBContainer>
          <TopLinkPage />
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol className="titleText text-center">
              <h4 className="animate__animated animate__fadeInUp">
                Clean Energy{" "}
              </h4>
              <p>
                Hit Cyclone Combustor . Hit Cyclone Combustor Of Batch Type .
                Mixed Fuel Cyclone Combustor
              </p>

              <span>
                내화벽돌을 사용하지 않고, 연소용 공기 의 흐름을 싸이크론
                회전식으로 변환시켜서 단열효과와 함께 흡수된 고온으로 연소를
                지원하여, 고온의 열을 손실이 없이 에너지로 변환시켜주며, 열분해
                연소기술 및 다단연소와 배기가스 재순환설비 등을 복합적으로
                적용하는 저 NOx 화 “고온 다단 싸이크론 연소기술”을 개발하여
                폐기물(고체, 액체 및 기체) 연소장치로 다양하게 응용
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <MDBRow className="justify-content-center">
            <MDBCol className="btnBox">개발범위</MDBCol>
          </MDBRow>

          <MDBCard className="mt-3">
            <MDBCollapseHeader
              className="CollapseHd"
              onClick={this.toggleCollapse("collapse1")}
            >
              고온 다단 선 회 식 연소로
              <i className={collapseID === "collapse1"} />
              {/* <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } /> */}
            </MDBCollapseHeader>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
                <span style={{ fontWeight: "900", color: "green" }}>
                  연속공급방식:
                </span>{" "}
                중기 및 온수생산방식, 지정폐기물 소각처리방식 <br />
                <span style={{ fontWeight: "900", color: "green" }}>
                  배치방식:
                </span>{" "}
                일괄투입 소각처리방식
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              className="CollapseHd"
              onClick={this.toggleCollapse("collapse2")}
            >
              연 소 해 석
              <i className={collapseID === "collapse2"} />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse2" isOpen={collapseID}>
              <MDBCardBody>
                공기 및 연소가스 흐름, 온도해석 성상에 따른 배기가스 분석 등
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              className="CollapseHd"
              onClick={this.toggleCollapse("collapse3")}
            >
              고온 다단 선회식 연소로 응용 폐기물 연소시스템
              <i className={collapseID === "collapse3"} />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse3" isOpen={collapseID}>
              <MDBCardBody>
                고형폐기물(농부산물, 축분, 슬러지 등) 연소장치, 해양쓰레기
                에너지화, 친환경 동물화장시스템, 온수생산 폐기물 연소시스템과
                태양열 에너지 융합 시스템 각종 폐기물 전처리 연료화 공정 및
                패키지 발전시스템 등
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default JumbotronPage_FieldPageMobileCollapse2;
