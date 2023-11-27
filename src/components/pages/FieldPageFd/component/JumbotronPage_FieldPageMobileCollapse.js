import React, { Component } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBRow,
  MDBCol,
  // MDBAnimation,
} from "mdbreact";
import "./JumbotronPage_FieldPageMobileCollapse.css";
import TopLinkPage from "../../component/TopLinkPage";

class JumbotronPage_FieldPageMobileCollapse extends Component {
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
      <MDBContainer id="ContainTopText">
        <MDBContainer>
          <TopLinkPage />
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol className="titleText text-center">
              <h4 className="animate__animated animate__fadeInUp">
                Virtual Simulation
              </h4>
              <p>
                Virtual Reality . Augmented Reality . eXtended Reality . Mixed
                Reality
              </p>

              <span>
                VR / AR / AV / MR / XR 기술을 다양한 분야에 개발,공급합니다.
                가상현실 환경에서 분석/실험/훈련/교육 등의 효과를 극대화 할 수
                있는 시뮬레이션을 개발하여 사용자에게 적합한 최적의 솔루션을
                제공합니다.
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
              가상 현실 VR ( Virtual Reality )
              <i className={collapseID === "collapse1"} />
              {/* <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } /> */}
            </MDBCollapseHeader>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
                현실과 유사한 체험을 경험하게 구현된 가상의 공간
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              className="CollapseHd"
              onClick={this.toggleCollapse("collapse2")}
            >
              증강현실 AR ( Augmented Reality )
              <i className={collapseID === "collapse2"} />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse2" isOpen={collapseID}>
              <MDBCardBody>현 정보에 가상 현실이 부가된 공간</MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              className="CollapseHd"
              onClick={this.toggleCollapse("collapse3")}
            >
              혼합현실 MR ( Mixed Reality )
              <i className={collapseID === "collapse3"} />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse3" isOpen={collapseID}>
              <MDBCardBody>가상현실을 현실세계와 융합</MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              className="CollapseHd"
              onClick={this.toggleCollapse("collapse4")}
            >
              확장현실 XR ( eXtended Reality )
              <i className={collapseID === "collapse4"} />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse4" isOpen={collapseID}>
              <MDBCardBody>가상현실과 증강현실을 합친기술</MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default JumbotronPage_FieldPageMobileCollapse;
