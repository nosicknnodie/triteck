import React, { useState, useContext, useReducer } from "react";

import "./NewsPageSp.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBMask,
  MDBCol,
  MDBView,
  MDBRow,
} from "mdbreact";
import TopImgCompanyWeb from "../../../TopImgFd/TopImgCompanyWeb";
import TopImgCompanyMobile from "../../../TopImgFd/TopImgCompanyMobile";

const NewsPageSp = () => {
  return (
    <>
      <div id="newsPageSp">
        <div className="newsPageSpWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="newsPageSpMobile">
          <TopImgCompanyMobile />
        </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard className="my-5 px-5">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol className="text-center mb-5">
                      <img
                        src="/img/promotionFd/subPageFd/newsPages/sp.png"
                        className="imgTitle"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="hrCenter" />
                  <MDBRow>
                    <p className="title text-center mx-auto mb-5 font-weight-bold">
                      ‘ 스포츠산업 융합 특성화 대학원 운영계획’을 위한 대학
                      업무협약체결
                    </p>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="text-center">
                      <p> 발행일 : 2016.11.07</p>
                    </MDBCol>
                  </MDBRow>
                  <hr className="hrCenter" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol className="titleText text-center pb-5">
              <h4>이제는 스포츠강국에서 스포츠산업강국으로</h4>
              <h6>문화체육관광부 차세대 스포츠산업 융?복합 전문인력 양성</h6>
            </MDBCol>
          </MDBRow>

          {/* <a href="#!">
              <MDBMask overlay="white-slight" />
            </a> */}
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p className="dark-grey-text font-weight-bold">
                문화체육관광부(장관 김종덕, 이하 문체부)에서 실시한 2013년
                스포츠산업실태조사(’13. 12.)에 따르면, 스포츠산업의 시장 수요와
                새로운 융·복합 산업에 유연하게 대응하고 대외 경쟁력을 높이기
                위해서는 스포츠산업을 견인할 융·복합형 전문인력 양성이 필요한
                것으로 조사되었다.<p></p>
                이에 문체부와 국민체육진흥공단(이사장 이창섭)은 스포츠산업강국의
                초석을 마련하기 위해 지난해 12월에 발표한
                ‘스포츠산업중장기발전계획(2013. 12.)’에 따라, 융·복합형 전문인력
                양성을 위한 ‘스포츠산업 융합 특성화 대학원 운영계획’을 수립한 바
                있다. 이어서 올해 6월부터 8월까지 공개경쟁을 통해 국민대학교,
                상명대학교, 을지대학교, 한양대학교, 경희대학교 등 5개 대학을
                선정한 후, 9월 4일(목), 업무협약 체결을 완료했다.<p></p>
                현장 실무경험과 지식을 함양해 창조경제를 선도할 융합형 인재 육성
                목표<p></p>
                금년 12월까지 국민대학교는 스포츠공학융합학과 대학원,
                상명대학교는 스포츠정보기술융합학과 대학원, 을지대학교는
                스포츠관광융합학과 대학원, 한양대학교는 스포츠디머스학과 대학원,
                경희대학교는 스포츠커뮤니케이션융합학과 대학원을 각각 개설해
                신입생을 선발하고 2015년부터 대학별로 특성화 대학원 교육과정을
                운영할 계획이다.<p></p>
              </p>
              <MDBRow>
                <MDBCol className="titleText_2 text-center">
                  <img src="/img/promotionFd/subPageFd/newsPages/list.png" />
                </MDBCol>
              </MDBRow>
              <p className="dark-grey-text font-weight-bold pt-5">
                대학별로 선발된 인력은, 스포츠산업 융합에 특화된 교육과정과
                스포츠산업계 수요에 맞춘 산학 협력 프로젝트를 수행하고, 국내외
                인턴십을 통해 현장 실무 경험과 지식을 함양해, 우리나라
                창조경제를 선도할 융·복합형 스포츠산업 창의인재로 거듭나게 될
                것으로 기대하고 있다.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="titleText text-center dark-grey-text font-weight-bold">
              <h4>스포츠산업융합 특성화 대학원 업무협약식</h4>
            </MDBCol>
            <MDBCol md="12" className="titleText_2 text-center">
              <img src="/img/promotionFd/subPageFd/newsPages/spImg.png" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol className="text-center">
              <MDBBtn
                className="mb-5 mt-5"
                color="primary"
                size="sm"
                href=" http://www.newssports25.com/culture/63859"
                target="blank"
              >
                Read More
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default NewsPageSp;
