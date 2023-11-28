/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import Copyrights from "../../../Footer";
import TopImgCompanyMobile from "../../TopImgFd/TopImgCompanyMobile";
import TopImgCompanyWeb from "../../TopImgFd/TopImgCompanyWeb";
import "./ThesisPatent.css";

const ThesisPatent = () => {
  return (
    <>
      <div id="thesisPatent">
        <div className="thesisPatentWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="thesisPatentMobile">
          <TopImgCompanyMobile />
        </div>

        <section id="thesisPatent_1">
          <h2 className="h1-responsive font-weight-bold text-center my-5 pt-5">
            논 문 . 특 허
          </h2>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="my-5 px-5 pb-5">
                  <MDBCardBody className="text-center">
                    <MDBContainer>
                      <MDBContainer>
                        <MDBRow className="rowArticle mb-5">
                          <MDBCol className="colTitle font-weight-bold" sm="2">
                            논 문
                          </MDBCol>
                          <MDBCol className="hrLine" sm="10">
                            <hr />
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>

                      <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE00311666"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/img/HeatGeneration.png"
                                alt=""
                                href="https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE00311666"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                열생성 기법
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  열생성 기법에 의한 <br />
                                  항공기 운항계획 문제의 최적 해법
                                </p>
                                <p style={{ fontSize: "0.5em" }}>1993.01</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mb-3"
                                    size="md"
                                    href="https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE00311666"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/cae.20358"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/img/Surface.png"
                                alt=""
                                href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/cae.20358"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-1">
                                Interactive Training
                              </h6>

                              <h4 className="font-weight-bold mb-4">
                                <p style={{ fontSize: "0.6em" }}>
                                  Simulator for Aerial Working Platform in
                                  Virtual Environment <br />
                                </p>

                                <p style={{ fontSize: "0.5em" }}>2009.03</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mt-0 mb-4"
                                    size="md"
                                    href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/cae.20358"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=CFKO200734514816229&oCn=NPAP08143151&dbt=CFKO&journal=NPRO00290338"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/img/Surface2.png"
                                alt=""
                                href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=CFKO200734514816229&oCn=NPAP08143151&dbt=CFKO&journal=NPRO00290338"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                훈련용 시뮬레이터
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  고소작업대 조종훈련용 시뮬레이터
                                  <br />
                                </p>
                                <p style={{ fontSize: "0.5em" }}>2019.04</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mb-3"
                                    size="md"
                                    href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=CFKO200734514816229&oCn=NPAP08143151&dbt=CFKO&journal=NPRO00290338"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=CFKO200626813067502&oCn=NPAP08143040&dbt=CFKO&journal=NPRO00290336"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/img/Disaster.png"
                                alt=""
                                href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=CFKO200626813067502&oCn=NPAP08143040&dbt=CFKO&journal=NPRO00290336"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                위기관리시스템
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  위기관리 시스템 활성화를 위한 <br />
                                  시뮬레이터 개발에 관한 연구
                                </p>
                                <p style={{ fontSize: "0.5em" }}>2006.08</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mb-3"
                                    size="md"
                                    href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=CFKO200626813067502&oCn=NPAP08143040&dbt=CFKO&journal=NPRO00290336"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=JAKO200211921691343&oCn=JAKO200211921691343&dbt=JAKO&journal=NJOU00397348"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/img/VirtualSafetyExperience.png"
                                alt=""
                                href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=JAKO200211921691343&oCn=JAKO200211921691343&dbt=JAKO&journal=NJOU00397348"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                가상안전체험
                              </h6>

                              <h4 className="font-weight-bold mb-4">
                                <p style={{ fontSize: "0.6em" }}>
                                  가상 안전 운전 체험 교육 <br />
                                </p>

                                <p style={{ fontSize: "0.5em" }}>2002.12</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mt-2 mb-4"
                                    size="md"
                                    href="https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=JAKO200211921691343&oCn=JAKO200211921691343&dbt=JAKO&journal=NJOU00397348"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://www.earticle.net/Article/A362666"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/img/RemoteDecommissioning.png"
                                alt=""
                                href="https://www.earticle.net/Article/A362666"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                ICT기반 원격해체
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  {" "}
                                  가상 운전 시스템 아키텍처
                                </p>
                                <p style={{ fontSize: "0.5em" }}>2019.04</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mb-3"
                                    size="md"
                                    href="https://www.earticle.net/Article/A362666"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://journal.kosdi.or.kr/articles/article/bO1Q/"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/kimm.png"
                                alt=""
                                href="http://it.chosun.com/site/data/html_dir/2020/12/01/2020120102841.html"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                원전해체
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  디지털 트윈을 적용한 고감도 <br />
                                  충돌 시뮬레이션 개발을 위한 연구
                                </p>
                                <p style={{ fontSize: "0.5em" }}>2020.12</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mb-3"
                                    size="md"
                                    href="https://journal.kosdi.or.kr/articles/article/bO1Q/"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a href="#" target="blank" className="grey-text">
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/kstar.png"
                                alt=""
                                href="#"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                핵융합
                              </h6>

                              <h4 className="font-weight-bold mb-4">
                                <p style={{ fontSize: "0.6em" }}>
                                  올해 예정 <br />
                                </p>

                                <p style={{ fontSize: "0.5em" }}>2021.12</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mt-2 mb-4"
                                    size="md"
                                    href="#"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                          <a
                            href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002459902"
                            target="blank"
                            className="grey-text"
                          >
                            <MDBView hover className="rounded mb-5" waves>
                              <img
                                className="img-fluid"
                                src="/img/promotionFd/subPageFd/thesisPatent/ict.png"
                                alt=""
                                href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002459902"
                                target="blank"
                              />
                              <MDBMask overlay="white-slight" />
                              <h6 className="font-weight-bold ml-3 mb-3 mt-3">
                                스포츠 ICT
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  태권도 전자호구 개발을 위한
                                  <br />
                                  충격감지 센서 연구
                                </p>
                                <p style={{ fontSize: "0.5em" }}>2019.04</p>
                              </h4>
                              <MDBRow>
                                <MDBCol className="text-center">
                                  <MDBBtn
                                    color="default ml-3 mb-3"
                                    size="md"
                                    href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002459902"
                                    target="blank"
                                  >
                                    논문보기
                                  </MDBBtn>
                                </MDBCol>
                              </MDBRow>
                            </MDBView>
                          </a>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>

                    <section id="Patent">
                      <MDBContainer>
                        <MDBRow className="rowArticle mt-5 mb-5">
                          <MDBCol className="colTitle font-weight-bold" sm="2">
                            특 허
                          </MDBCol>
                          <MDBCol className="hrLine" sm="10">
                            <hr />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow>
                          <MDBCol md="6">
                            <MDBCard border="primary" className="m-3">
                              <MDBCardHeader>
                                원자력 발전호 해체를 위한 시뮬레이션 기술
                              </MDBCardHeader>
                              <MDBCardBody className="text-primary">
                                <MDBCardTitle tag="h5">
                                  특허 제 10-2020-0187456호
                                </MDBCardTitle>
                                <MDBCardText>
                                  발명자: 기재석 황교찬 최주호
                                  <br />
                                  등록일: 2020.12.30
                                </MDBCardText>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                            <MDBCard border="secondary" className="m-3">
                              <MDBCardHeader>
                                용접 시뮬레이션 장치
                              </MDBCardHeader>
                              <MDBCardBody className="text-secondary">
                                <MDBCardTitle tag="h5">
                                  특허 제 10-0926045호
                                </MDBCardTitle>
                                <MDBCardText>
                                  특권자: (주)코리아일레콤, 기재석
                                  <br />
                                  등록일: 2009.11.03
                                </MDBCardText>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol>
                          <img
                                src="/img/promotionFd/subPageFd/thesisPatent/Patent.JPG"
                                alt=""
                                href="#"
                                width="100%"
                                target="blank"
                              />
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                    </section>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <Copyrights />
      </div>
    </>
  );
};

export default ThesisPatent;
