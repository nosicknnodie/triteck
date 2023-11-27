import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBIframe,
} from "mdbreact";
import "./TitleOfVideo.css";

const TitleOfVideo = () => {
  return (
    <>
      <section id="titleOfVideo">
        <MDBCard className="my-5 px-5 pb-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="12">
                <MDBCard reverse>
                  <MDBView hover cascade waves>
                    <MDBIframe src="https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/ict-project-demo-haptic.mp4" />
                  </MDBView>
                  <MDBCardBody cascade className="video_1 text-center">
                    <h2 className="font-weight-bold">
                      <a href="/pages/AboutIndexFd/subPageFd/dlpp">
                        원전해체 시뮬레이션 시연 영상
                      </a>
                    </h2>

                    <MDBBtn
                      href="/pages/AboutIndexFd/subPageFd/dlpp"
                      className="btn-fb waves-light"
                    >
                      <MDBIcon className="pr-2" />
                      원전해체 프로젝트
                    </MDBBtn>
                    {/* <span className="counter">46</span>
                <MDBBtn className="btn-tw waves-light">
                  <MDBIcon fab icon="twitter" className="pr-2" />
                  Twitter
                </MDBBtn>
                <span className="counter">22</span>
                <MDBBtn className="btn-gplus waves-light">
                  <MDBIcon fab icon="google-plus-g" className="pr-2" />
                  Google
                </MDBBtn>
                <span className="counter">31</span>
                <MDBBtn color="default" className="waves-light">
                  <MDBIcon icon="comments" className="pr-2" />
                  Comments
                </MDBBtn>
                <span className="counter">18</span> */}
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5">
                  <p>
                    원자력시설 및 설비의 해체를 가상 현실 하에서 수행하여 실증
                    실험과 같은 효과를 거둘수있는 ICT 기반 원격해체 모듈을
                    통합하여 가상 Simulation 시스템 개발.
                  </p>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
            <hr className="mb-5 mt-4" />
            <MDBRow>
              <MDBCol md="12">
                <MDBCard reverse>
                  <MDBView hover cascade waves>
                    <MDBIframe src="https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4" />
                  </MDBView>
                  <MDBCardBody cascade className="video_1 text-center">
                    <h2 className="font-weight-bold">
                      <a href="/pages/AboutIndexFd/subPageFd/kstar">
                        핵융합에너지 시설 운용{" "}
                      </a>
                    </h2>

                    <MDBBtn
                      href="/pages/AboutIndexFd/subPageFd/kstar"
                      className="btn-fb waves-light"
                    >
                      <MDBIcon className="pr-2" />
                      핵융합 프로젝트
                    </MDBBtn>
                    {/* <span className="counter">46</span>
                <MDBBtn className="btn-tw waves-light">
                  <MDBIcon fab icon="twitter" className="pr-2" />
                  Twitter
                </MDBBtn>
                <span className="counter">22</span>
                <MDBBtn className="btn-gplus waves-light">
                  <MDBIcon fab icon="google-plus-g" className="pr-2" />
                  Google
                </MDBBtn>
                <span className="counter">31</span>
                <MDBBtn color="default" className="waves-light">
                  <MDBIcon icon="comments" className="pr-2" />
                  Comments
                </MDBBtn>
                <span className="counter">18</span> */}
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5">
                  <p>
                    미래핵융합 발전소 디지털트윈을 위한 KSTAR 핵융합 주 장치
                    가상화 감시 정보 시각화를 통한 가상 핵융합 VR 플랫폼 구현
                  </p>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </section>
    </>
  );
};

export default TitleOfVideo;
