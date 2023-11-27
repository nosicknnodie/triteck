import React, { useState, useContext, useReducer } from "react";

import "./NewsPageWm_2.css";
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

const NewsPageWm_2 = () => {
  return (
    <>
      <div id="newsPageWm_2">
        <div className="newsPageWm_2Web">
          <TopImgCompanyWeb />
        </div>
        <div className="newsPageWm_2Mobile">
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
                        src="/img/promotionFd/subPageFd/newsPages/wm.png"
                        className="imgTitle"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="hrCenter" />
                  <MDBRow>
                    <p className="title text-center mx-auto mb-5 font-weight-bold">
                      [경제] 상명대학교 대학원 스포츠ICT융합학과 기재석 교수
                    </p>
                  </MDBRow>
                  <hr className="hrCenter" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              <p className="dark-grey-text font-weight-bold">
                기재석
                <br />
                학력
                <br />
                한양대학교 산업공학과 학사 석사 박사
                <br />
                품질관리기사 1급, 공정관리기사 1급
                <br />
                <p></p>
                경력
                <br />
                롯데제과 상품기획실사원
                <br />
                국립삼척대학교 산업공학과부교수
                <br />
                (주)케이씨이아이 연구소장
                <br />
                광운대학교 연구교수
                <br />
                인천대학교 정보통신대학/ 초빙교수
                <br />
                상명대학교 일반대학원 스포츠ICT융합학과
                <br />
              </p>
            </MDBCol>
            <MDBCol md="4" className="text-center">
              <img
                className="img-fluid pb-5"
                src="/img/promotionFd/subPageFd/newsPages/wm_gjs_2.png"
                alt="상명대 스포츠ICT융합학과 기재석 교수 한국의 미래를 앞당기고 있다. ⓒ우먼스토리"
                style={{ width: "150px" }}
              />
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
                <p></p>
                특허
                <br />
                명칭: 용접 시뮬레이션 장치
                <br />
                번호: 특허 제 10-0926045호
                <br />
                특허권자: (주)코리아일레콤, 기재석
                <br />
                <p></p>
                연구기획 실적
                <br />
                스포츠산업 기술개발사업 전략과제 기획(문화체육관광부)
                <br />
                역할: 수상레져스포츠 분과위원장
                <br />
                내용: “스포츠과학기반 다기능 소형 포터블 보트 및 IT 융합
                라이프자켓 개발” 과제를 발굴하여 2011년도부터 3년간 개발사업
                승인
                <br />
                (총 30억)되어 2011년 10월부터 상명대에서 수행
                <br />
                스포츠산업기술개발사업 중장기 계획(문화체육관광부)
                <br />
                역할: 연구기획 위원장
                <br />
                내용: 2011년부터 2020년도까지 10년간 추진할 전략과제를 발굴하고
                스포츠산업기술 발전을 위한 로드맵을 만들어 보고서 제출
                <br />
                동계 스포츠과학 R&D 사업 기획(문화체육관광부)
                <br />
                역할: 정보 및 서비스 분과위원장
                <br />
                내용: 2018년 평창동계올림픽을 기회로 동계스포츠 발전과 산업화에
                기여하기 위한 전략수립
                <br />
                범부처 스포츠과학화사업(평창코리아
                프로젝트(교육과학부/문화체육관광부)
                <br />
                역할: 기획위원
                <br />
                내용: 2018년 평창동계올림픽을 기회로 동계스포츠 발전과 산업화에
                기여하기 위한 예비타당성 연구
                <br />
                스포츠산업기술 기본계획 수립(문화체육관광부)
                <br />
                역할: 연구위원
                <br />
                내용: 스포츠 산업기술 중장기 전략 수립
                <br />
                e-Traing 산업 전략 보고서 기획(산업통상부)
                <br />
                역할: 연구위원
                <br />
                내용: 가상현실기반의 시뮬레이션을 이용한 교육/훈련 콘텐츠
                개발기술을 맡아 기획함
                <br />
                스포츠산업 기술개발사업 전략과제 기획(문화체육관광부)
                <br />
                역할: 분과위원장
                <br />
                내용: 2014년 예비전략과제인 “스크린야구 시스템 개발”을 기획하여
                선정됨
                <br />
                <p></p>
                주요 수행과제 내용
                <br />
                소방 지휘훈련 시뮬레이터
                <br />
                소방 지휘훈련 시뮬레이터는 2005년도에 국내 최초로 가상현실
                기반의 팀단위 훈련이 가능한 대규모화재 진압훈련용 시뮬레이터로서
                현재 중앙소방학교에서 훈련에 활용 중에 있으며, 이 후
                문화재화재진압훈련을 위한 시뮬레이터 등 다양한 시뮬레이터가
                개발되었음
                <br />
                가상안전체험관
                <br />
                1999년도에 노동부 산업안전관리공단의 가상안전체험관 계획에
                자문교수로 참여하여 국내이 알맞은 가상안전체험관의 규격을
                제시하였고, 이 후 포항제철, 현대중공업, 미포조선, 삼호중공업,
                GS건설 등 대규모 사업장에서 보다 수준 높은 안전교육을 위해
                가상안전체험관을 구축하여 활용하고 있음
                <br />
                고소작업대 교육용 시뮬레이터
                <br />
                현대중공업에서 필요한 고소작업대 훈련용 시뮬레이터 개발로 가상의
                훈련환경에서 고소작업대를 조종하는 훈련장치를 개발함
                <br />
                화재재난현장 팀단위 전술 및 도상훈련 시뮬레이션 개발
                <br />
                2012년 4월부터 2년간 3D 게임을 통해 소방관들의 표준작전절차를
                익힐 수 있도록 팀 단위의 전술훈련용 시뮬레이션 게임을 개발 중
                <br />
                스포츠 ICT 융합 수련용 태권도 전자호구 개발
                <br />
                기존 전자호구 대비 경량화 및 센서기능이 향상된 저거형의 수련용
                전자호구 개발
                <br />
                <p></p>
                출처 : 우먼스토리뉴스(http://www.woman-story.co.kr)
                <br />
              </p>

              <MDBBtn
                className="mb-5"
                color="primary"
                size="sm"
                href="http://www.woman-story.co.kr/news/articleView.html?idxno=91"
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

export default NewsPageWm_2;
