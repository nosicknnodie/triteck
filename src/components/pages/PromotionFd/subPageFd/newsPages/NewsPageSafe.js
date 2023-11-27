import React, { useState, useContext, useReducer } from "react";

import "./NewsPageSafe.css";
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

const NewsPageSafe = () => {
  return (
    <>
      <div id="newsPageSafe">
        <div className="newsPageSafeWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="newsPageSafeMobile">
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
                        src="/img/promotionFd/subPageFd/newsPages/safe.png"
                        className="imgTitle"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="hrCenter" />
                  <MDBRow>
                    <p className="title text-center mx-auto mb-5 font-weight-bold">
                      한국재난정보학회 신임 임원 확정
                      <br />
                      이래철 회장 연임 후 신임 이사진 90여명 확대
                    </p>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="text-center">
                      <p> 기사승인 2019.06.19 11:50:22</p>
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
            <MDBCol className="text-center">
              <img
                className="img-fluid pb-5"
                src="/img/promotionFd/subPageFd/newsPages/safeNewsImg_1.png"
                alt="상명대 스포츠ICT융합학과 기재석 교수 한국의 미래를 앞당기고 있다. ⓒ우먼스토리"
                style={{ width: "800px" }}
              />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol className="text-center">
              <img
                className="img-fluid pb-5"
                src="/img/promotionFd/subPageFd/newsPages/safeNewsImg_2.png"
                alt="상명대 스포츠ICT융합학과 기재석 교수 한국의 미래를 앞당기고 있다. ⓒ우먼스토리"
                style={{ width: "800px" }}
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
                한국재난정보학회(회장 이래철)는 지난 6월18일 오후 6시 서울
                송파구 소재 드론이야기 회의실에서 ‘2019년 1차 정기 이사회’를
                개최하고 신임 회장, 부회장, 상임이사, 평이사 모두 91명에게
                임명장을 수여했다. 이날 이사회는 참석 신임 임원에 대한 임명장
                수여 이후 ▲학회 운영보고 ▲심의사항 ▲기타 안건 순으로 진행됐다.
              </p>

              <MDBBtn
                className="mb-5"
                color="primary"
                size="sm"
                href="http://www.safetoday.kr/news/articleView.html?idxno=44103"
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

export default NewsPageSafe;
