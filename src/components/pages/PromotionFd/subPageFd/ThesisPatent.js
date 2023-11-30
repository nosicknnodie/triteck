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
import { useTranslation } from "react-i18next";

const ThesisPatent = () => {
  const { t } = useTranslation(["blog"]);
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
            {t("T01")}
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
                            {t("T02")}
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
                                {t("T03")}
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  {t("T04")
                                    .split("\n")
                                    .map((v, i) => (
                                      <span key={i}>
                                        {v} <br />
                                      </span>
                                    ))}
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
                                    {t("T05")}
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
                                    {t("T05")}
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
                                {t("T06")}
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  {t("T07")}

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
                                    {t("T05")}
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
                                {t("T08")}
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  {t("T09")
                                    .split("\n")
                                    .map((v, i) => (
                                      <span key={i}>
                                        {v} <br />
                                      </span>
                                    ))}
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
                                    {t("T05")}
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
                                {t("T10")}
                              </h6>

                              <h4 className="font-weight-bold mb-4">
                                <p style={{ fontSize: "0.6em" }}>
                                  {t("T11")}
                                  <br />
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
                                    {t("T05")}
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
                                {t("T12")}
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}> {t("T13")}</p>
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
                                    {t("T05")}
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
                                {t("T14")}
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  {t("T15")
                                    .split("\n")
                                    .map((v, i) => (
                                      <span key={i}>
                                        {v} <br />
                                      </span>
                                    ))}
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
                                    {t("T05")}
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
                                {t("T16")}
                              </h6>

                              <h4 className="font-weight-bold mb-4">
                                <p style={{ fontSize: "0.6em" }}>
                                  {t("T17")} <br />
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
                                    {t("T05")}
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
                                {t("T18")}
                              </h6>

                              <h4 className="font-weight-bold mb-3">
                                <p style={{ fontSize: "0.6em" }}>
                                  {t("T19")
                                    .split("\n")
                                    .map((v, i) => (
                                      <span key={i}>
                                        {v} <br />
                                      </span>
                                    ))}
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
                                    {t("T05")}
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
                            {t("T20")}
                          </MDBCol>
                          <MDBCol className="hrLine" sm="10">
                            <hr />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow>
                          <MDBCol md="6">
                            <MDBCard border="primary" className="m-3">
                              <MDBCardHeader>{t("T21")}</MDBCardHeader>
                              <MDBCardBody className="text-primary">
                                <MDBCardTitle tag="h5">{t("T22")}</MDBCardTitle>
                                <MDBCardText>
                                  {t("T23")
                                    .split("\n")
                                    .map((v, i) => (
                                      <div key={i}>{v}</div>
                                    ))}
                                </MDBCardText>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                            <MDBCard border="secondary" className="m-3">
                              <MDBCardHeader>{t("T24")}</MDBCardHeader>
                              <MDBCardBody className="text-secondary">
                                <MDBCardTitle tag="h5">{t("T25")}</MDBCardTitle>
                                <MDBCardText>
                                  {t("T26")
                                    .split("\n")
                                    .map((v, i) => (
                                      <div key={i}>{v}</div>
                                    ))}
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
