import React, { Fragment } from "react";
import {
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBMask,
} from "mdbreact";
// import TopLinkPage from "./TopLinkPage";
import "./EcommercePage_Rsa.scss";

const EcommercePage_Rsa = () => {
  return (
    <>
      <section id="rsaProjects" className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5 animate__animated animate__fadeInUp">
          ART Technology
        </h2>
        <h6 className="w-responsive mx-auto mb-5">
          CG Technology . Web Technology . NetWork Technology . Kinetic
          Technology
        </h6>

        <p className="fieldTitle w-responsive mx-auto mb-5">
          디지털 기술과 예술의 결합으로 불리는 아트테크놀로지(Art Technology)
          장르는 디지털 미디어를 예술창작의 활용하는 데 그치지 않고, 디지털
          미디어만이 지닌 고유의 특징에 주목하여 전혀 색다른 예술을 구현하는 데
          관심을 갖게 되면서 태동한 분야다.
        </p>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="colTitle" sm="2">
              개 발 범 위
            </MDBCol>
            <MDBCol sm="10">
              <hr className="rsaHrSize" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section id="rsaCard">
        <MDBRow className="d-flex justify-content-center text-center my-5">
          <MDBCol md="6" xl="5" className="mb-4 mt-5">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="/img/fieldPage/art technology/arttech.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 green-text">
                  {/* <MDBIcon fas icon="chart-line" className="pr-2" /> */}
                  CG 기술
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">
                컴퓨터 그래픽으로 만들어지는 가상의 이미지, 동영상을 문화예술
                작품/전시/공연에 활용
              </p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4 mt-5">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="/img/fieldPage/art technology/web.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 blue-text">
                  {/* <MDBIcon icon="eye" className="pr-2" /> */}웹 기술
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">
                웹사이트를 구축하거나 웹을 통해 사이버 전시, 작품과의 인터랙션을
                구현할 때 이용
              </p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/img/fieldPage/art technology/network.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 purple-text">
                  {/* <MDBIcon icon="camera" className="pr-2" /> */}
                  네트워크 기술
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">
                인터넷이나 P2P, 기계간(M2M) 통신과 커뮤니케이션을 가능하게 하는
                기술
              </p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="/img/fieldPage/art technology/projection.png"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="brown-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-3 mb-4 mb-1 indigo-text">
                  {/* <MDBIcon icon="phone" className="pr-2" /> */}
                  프로젝션맵핑 기술
                </h5>
              </a>
              {/* <h4 className="font-weight-bold mb-3">Title of the news</h4> */}
              <p className="mb-5 pb-5">
                기계기술 + 예술 분야 융합 ,작품 자체가 직접 움직이는 형태
              </p>
              {/* <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn> */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>

      <MDBRow className="mt-5" center>
        <Fragment>
          <MDBBtn
            color="primary"
            outline
            rounded
            href="/pages/ContactFd/contact"
          >
            CONTACT US!
          </MDBBtn>
        </Fragment>
      </MDBRow>
    </>
  );
};

export default EcommercePage_Rsa;
