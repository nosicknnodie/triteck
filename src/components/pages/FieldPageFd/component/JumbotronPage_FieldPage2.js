import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";
// import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";
import "./JumbotronPage_FieldPage2.css";
import TabsJustified_FieldPage2 from "./TabsJustified_FieldPage2";

const JumbotronPage_FieldPage2 = () => {
  return (
    <section id="jumbotronId2">
      <MDBContainer className="containJumbot mt-1 text-center">
        <MDBRow>
          <MDBCol className="rowJumbo">
            <MDBJumbotron>
              <MDBCardBody>
                <MDBCardTitle className="VrTitle h2">Clean Energy</MDBCardTitle>
                <p className="green-text my-1 font-weight-bold">
                  CG Technology . Web Technology . NetWork Technology . Kinetic
                  Technology
                </p>
                <MDBCardText className="cardJumbot my-4">
                  내화벽돌을 사용하지 않고, 연소용 공기 의 흐름을 싸이크론
                  회전식으로 변환시켜서 단열효과와 함께 흡수된 고온으로 연소를
                  지원하여, 고온의 열을 손실이 없이 에너지로 변환시켜주며,
                  열분해 연소기술 및 다단연소와 배기가스 재순환설비 등을
                  복합적으로 적용하는 저 NOx 화 “고온 다단 싸이크론 연소기술”을
                  개발하여 폐기물(고체, 액체 및 기체) 연소장치로 다양하게 응용
                </MDBCardText>

                <MDBContainer className="containDv">
                  <MDBRow className="DvScope">개발범위</MDBRow>

                  <MDBRow className="DvScopeContent">
                    <MDBCol className="DvScopeList">선회식 연소로</MDBCol>

                    <MDBCol className="DvScopeListChild">
                      <span style={{ color: "black", fontWeight: 800 }}>
                        연속공급방식 :{" "}
                      </span>{" "}
                      중기 및 온수생산방식, 지정폐기물 소각처리방식 <br />{" "}
                      <span style={{ color: "black", fontWeight: 800 }}>
                        배 치 방 식 :
                      </span>{" "}
                      일괄투입 소각처리방식
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="DvScopeContent">
                    <MDBCol className="DvScopeList">연 소 해 석</MDBCol>
                    <MDBCol className="DvScopeListChild">
                      공기 및 연소가스 흐름, 온도해석 성상에 따른 배기가스 분석
                      등
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="DvScopeContent">
                    <MDBCol className="DvScopeList">응용 시스템</MDBCol>
                    <MDBCol className="DvScopeListChild">
                      난연성 폐기물(SRF, 의료폐기물, ASR 등) 연소 시스템,
                      탈취연소로, 폐액연소로, 바이오매스 연소장치,
                      고형폐기물(농부산물, 축분, 슬러지 등) 연소장치, 해양쓰레기
                      에너지화, 친환경 동물화장시스템, 온수생산 폐기물
                      연소시스템과 태양열 에너지 융합 시스템 각종 폐기물 전처리
                      연료화 공정 및 패키지 발전시스템 등
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>

                <hr className="my-4" style={{ border: "none" }} />

                <div>
                  <TabsJustified_FieldPage2 />
                </div>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default JumbotronPage_FieldPage2;
