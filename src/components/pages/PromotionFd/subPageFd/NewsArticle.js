/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-escape */
import TopImgCompanyMobile from "../../TopImgFd/TopImgCompanyMobile";
import TopImgCompanyWeb from "../../TopImgFd/TopImgCompanyWeb";
import "./NewsArticle.css";

import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import "../../../../common/form/contentDesign.css";
import * as contentDesign from "../../../../common/form/contentDesign.js";
import "../../../../common/form/contentFont.css";
import Copyrights from "../../../Footer";
import EcommercePage from "../component/EcommercePage";
import "./NewsArticle.css";
import { useTranslation } from "react-i18next";

const NewsArticle = () => {
  const { t } = useTranslation(["blog"]);
  const MAIN_COLOR = "#2A4A83";
  const GRAY_COLOR = "#565656";
  const SUB_COLOR = "#3F51B5";
  const TITLE_COLOR = "#212529";

  function addNewsImgInCol(imgPath, newsUrl) {
    if (!(imgPath && newsUrl)) {
      return null;
    }

    const isValidURL = newsUrl.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    let result;

    // 외부url(새창열기) 또는 내부페이지(현재창갱신) 여부에 따라 다른 창모드 지원
    if (isValidURL) {
      result = (
        <MDBCol className="cardNews col-6 col-lg-4">
          <a href={newsUrl} target="blank">
            <MDBCard>
              <MDBCardImage top src={imgPath} waves />
            </MDBCard>
          </a>
        </MDBCol>
      );
    } else {
      result = (
        <MDBCol className="cardNews col-6 col-lg-4">
          <a href={newsUrl}>
            <MDBCard>
              <MDBCardImage top src={imgPath} waves />
            </MDBCard>
          </a>
        </MDBCol>
      );
    }
    return result;
  }

  return (
    <>
      <div id="newsArticle">
        <div className="newsArticleWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="newsArticleMobile">
          <TopImgCompanyMobile />
        </div>

        {/* --------------title--------------- */}
        <section id="pageTitleSection">
          <title1 style={{ color: TITLE_COLOR }} className="mb-1">
            {t("P01")}
          </title1>
        </section>

        {/* -------------- CSO기사 bar --------------- */}
        <section id="bar">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-3 col-md-2">
                <title2 style={{ color: MAIN_COLOR }}>{t("P02")}</title2>
              </MDBCol>
              <MDBCol className="col-9 col-md-10">
                <hr className="line" style={{ borderColor: MAIN_COLOR }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* -------------- CSO기사 --------------- */}
        <section id="csoArticle">
          <MDBContainer className="mainContent">
            <MDBRow>
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/ws.png",
                "/pages/PromotionFd/subPageFd/newsPages/newsPageWm"
              )}
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/safe.png",
                "/pages/PromotionFd/subPageFd/newsPages/NewsPageSafe"
              )}
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/electronic.png",
                "/pages/PromotionFd/subPageFd/newsPages/NewsPageTet"
              )}
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/sp.png",
                "/pages/PromotionFd/subPageFd/newsPages/NewsPageSp"
              )}
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/ws_1.png",
                "/pages/PromotionFd/subPageFd/newsPages/NewsPageWm_2"
              )}
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/kspo.png",
                "https://www.sports.re.kr/pyxis-api/1/digital-files/bed3f2f1-9356-4f99-ab5a-da6d00162bd5"
              )}
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/article-7-thumbnail.png",
                "http://www.kidd.co.kr/news/226235"
              )}
              {addNewsImgInCol(
                "/img/promotionFd/subPageFd/newsArticle/article-8-thumbnail.png",
                "https://www.etnews.com/20220425000254"
              )}
            </MDBRow>
          </MDBContainer>
        </section>

        {/* -------------- 리포트 bar --------------- */}
        <section id="bar">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-3 col-md-2">
                <title2 style={{ color: MAIN_COLOR }}>{t("P03")}</title2>
              </MDBCol>
              <MDBCol className="col-9 col-md-10">
                <hr className="line" style={{ borderColor: MAIN_COLOR }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* 리포트 1 : 전자산업 인적자원 개발위원회 --------------- */}
        <section id="wideImgSection">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="titleContainer">
                <title2 style={{ color: TITLE_COLOR }} className="mb-1">
                  {t("P04")}
                </title2>
                <br />
                <p style={{ color: GRAY_COLOR }}>{t("P05")}</p>
                <title4 style={{ color: SUB_COLOR }}>{t("P06")}</title4>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mainContent">
              {/* <MDBCol md="1"></MDBCol> */}
              {/* <MDBCol md="10"> */}
              <MDBCol className="col-1"></MDBCol>
              <MDBCol className="col-10">
                <div className="lineBreak">
                  {contentDesign.addImgRoundedView(
                    "/img/promotionFd/subPageFd/newsArticle//metaverse.png"
                  )}
                </div>

                <div className="mb-2">
                  <title3 style={{ color: SUB_COLOR }}>{t("P07")}</title3>
                </div>
                <p>{t("P08")}</p>

                <div>
                  <br />
                  <MDBBtn
                    color="indigo"
                    size="sm"
                    href="https://tritech.s3.ap-northeast-2.amazonaws.com/documents/isc-issue-report-2021.pdf"
                    target="blank"
                  >
                    <MDBIcon far icon="clone" className="left" />
                    {t("P09")}
                  </MDBBtn>
                </div>
              </MDBCol>
              <MDBCol className="col-1"></MDBCol>
              {/* <MDBCol md="1"></MDBCol> */}
            </MDBRow>
          </MDBContainer>
        </section>
        {/* 리포트 2 : 우수사례 --------------- */}
        <section id="wideImgInGrayBgSection">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="titleContainer">
                <title2 style={{ color: TITLE_COLOR }} className="mb-1">
                  {t("P10")}
                </title2>
                <br />
                <br />
                <title4 style={{ color: SUB_COLOR }}>{t("P11")}</title4>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mainContent">
              {/* <MDBCol md="1"></MDBCol>
              <MDBCol md="10"> */}
              <MDBCol className="col-1"></MDBCol>
              <MDBCol className="col-10">
                <div className="lineBreak">
                  {contentDesign.addImgRoundedView(
                    "/img/promotionFd/subPageFd/newsArticle/reports-kstar.jpg"
                  )}
                </div>

                <title3 style={{ color: SUB_COLOR }}>{t("P12")}</title3>

                <div>
                  <br />
                  <MDBBtn
                    color="indigo"
                    size="sm"
                    // href="/documents/article-kstar.pdf"
                    href="https://tritech.s3.ap-northeast-2.amazonaws.com/documents/article-kstar.pdf"
                    target="blank"
                  >
                    <MDBIcon far icon="clone" className="left" /> {t("P09")}
                  </MDBBtn>
                </div>
              </MDBCol>
              {/* <MDBCol md="1"></MDBCol> */}
              <MDBCol className="col-1"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <br />
        <br />
        {/* -------------- 연구 개발 기사 bar --------------- */}
        <section id="bar">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-5 col-md-4 col-lg-3 col-xl-2">
                <title2 style={{ color: MAIN_COLOR }}>{t("P13")}</title2>
              </MDBCol>
              <MDBCol className="col-7 col-md-8 col-lg-9 col-xl-10">
                <hr className="line" style={{ borderColor: MAIN_COLOR }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* -------------- 연구 개발 기사 --------------- */}
        <section id="wideImgSection">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="titleContainer">
                <title2 style={{ color: TITLE_COLOR }} className="mb-1">
                  {t("P14")}
                </title2>
                <br />
                <br />
                <p style={{ color: GRAY_COLOR }}>{t("P15")}</p>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mainContent">
              {/* <MDBCol md="1"></MDBCol> */}
              <MDBCol>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                      <a
                        href="http://it.chosun.com/site/data/html_dir/2020/12/01/2020120102841.html"
                        target="blank"
                        className="grey-text"
                      >
                        <MDBView hover className="rounded z-depth-1 mb-5" waves>
                          <img
                            className="img-fluid"
                            src="/img/promotionFd/subPageFd/newsArticle/research-article-1.jpg"
                            alt=""
                            href="http://it.chosun.com/site/data/html_dir/2020/12/01/2020120102841.html"
                            target="blank"
                          />
                          <MDBMask overlay="white-slight" />

                          <img
                            src="/img/promotionFd/subPageFd/newsArticle/chosun.png"
                            className="pr-2 pt-3 pl-3 pb-2"
                          />
                          <h5 className="font-weight-bold ml-3 mb-3 text-left">
                            2020.12.02
                          </h5>

                          {/* <h4 className="font-weight-bold mb-3">
                            <strong style={{ fontSize: "0.5em" }}>
                              SW 가상화 기술 ‘디지털 트윈’시장 커진다
                            </strong>
                          </h4> */}
                          <p className="px-1">{t("P16")}</p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="http://it.chosun.com/site/data/html_dir/2020/12/01/2020120102841.html"
                                target="blank"
                              >
                                {t("P17")}
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBView>
                      </a>
                    </MDBCol>

                    <MDBCol className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                      <a
                        href="https://m.blog.naver.com/nfripr/222002565903"
                        target="blank"
                        className="grey-text"
                      >
                        <MDBView hover className="rounded z-depth-1 mb-5" waves>
                          <img
                            className="img-fluid"
                            src="/img/promotionFd/subPageFd/newsArticle/research-article-2.jpg"
                            alt=""
                            href="http://it.chosun.com/site/data/html_dir/2020/12/01/2020120102841.html"
                            target="blank"
                          />
                          <MDBMask overlay="white-slight" />

                          <img
                            src="/img/promotionFd/subPageFd/newsArticle/kfe_logo.jpg"
                            className="pr-2 pt-1 pl-3 pb-2"
                          />
                          <h5 className="font-weight-bold ml-3 mb-3 text-left">
                            2020.06.16
                          </h5>

                          {/* <h4 className="font-weight-bold mb-3">
                            <strong style={{ fontSize: "0.5em" }}>
                              한국의 인공태양 KSTAR에게 쌍둥이 동생이?
                            </strong>
                          </h4> */}
                          <p className="px-1">{t("P18")}</p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="https://m.blog.naver.com/nfripr/222002565903"
                                target="blank"
                              >
                                {t("P19")}
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBView>
                      </a>
                    </MDBCol>

                    <MDBCol className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                      <a
                        href="https://blog.naver.com/nfripr/221643755093"
                        target="blank"
                        className="grey-text"
                      >
                        <MDBView hover className="rounded z-depth-1 mb-5" waves>
                          <img
                            className="img-fluid"
                            src="/img/promotionFd/subPageFd/newsArticle/research-article-3.jpg"
                            alt=""
                          />
                          <MDBMask overlay="white-slight" />

                          <img
                            src="/img/promotionFd/subPageFd/newsArticle/kfe_logo.jpg"
                            className="pr-2 pt-1 pl-3 pb-2"
                          />
                          <h5 className="font-weight-bold ml-3 mb-3 text-left">
                            2019.09.09
                          </h5>

                          {/* <h4 className="font-weight-bold mb-3">
                            <strong style={{ fontSize: "0.5em" }}>
                              핵융합도 게임처럼? 가상 핵융합장치로…….
                            </strong>
                          </h4> */}
                          <p className="px-1">{t("P20")}</p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="https://blog.naver.com/nfripr/221643755093"
                                target="blank"
                              >
                                {t("P21")}
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBView>
                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCol>
              {/* <MDBCol md="1"></MDBCol> */}
            </MDBRow>
          </MDBContainer>
        </section>

        <EcommercePage />
      </div>
      <Copyrights />
    </>
  );
};

export default NewsArticle;
