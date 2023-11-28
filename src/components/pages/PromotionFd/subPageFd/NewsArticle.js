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

const NewsArticle = () => {
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
            관련기사
          </title1>
        </section>

        {/* -------------- CSO기사 bar --------------- */}
        <section id="bar">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-3 col-md-2">
                <title2 style={{ color: MAIN_COLOR }}>CSO기사</title2>
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
                <title2 style={{ color: MAIN_COLOR }}>리포트</title2>
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
                  전자산업 인적자원 개발위원회 (ISC)
                </title2>
                <br />
                <p style={{ color: GRAY_COLOR }}>2021년 2/4분기</p>
                <title4 style={{ color: SUB_COLOR }}>
                  작성자 : 상명대학교 기재석 교수
                </title4>
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
                  <title3 style={{ color: SUB_COLOR }}>
                    메타버스가 주도하는 가상세계의 미래 전자산업 비전과 인력양성
                  </title3>
                </div>
                <p>
                  메타버스(Metaverse)는 ‘메타(meta)’와 현실 세계를 의미하는
                  ‘유니버스 (Universe)’의 합성어로, 아바타를 통해 사용자들이
                  놀이, 업무, 소비(경제), 소통 등 각종 활동을 할 수 있는
                  플랫폼으로 비대면 사회에 새로운 산업으로 자리매김
                </p>

                <div>
                  <br />
                  <MDBBtn
                    color="indigo"
                    size="sm"
                    href="https://tritech.s3.ap-northeast-2.amazonaws.com/documents/isc-issue-report-2021.pdf"
                    target="blank"
                  >
                    <MDBIcon far icon="clone" className="left" /> 이슈리포트
                    보기
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
                  디지털콘텐츠산업 육성사업지원 성과 우수사례
                </title2>
                <br />
                <br />
                <title4 style={{ color: SUB_COLOR }}>핵 융 합</title4>
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

                <title3 style={{ color: SUB_COLOR }}>
                  한국형 인공태양 KSTAR XR솔루현 통해 핵융합에너지 개발시기
                  앞당긴다
                </title3>

                <div>
                  <br />
                  <MDBBtn
                    color="indigo"
                    size="sm"
                    // href="/documents/article-kstar.pdf"
                    href="https://tritech.s3.ap-northeast-2.amazonaws.com/documents/article-kstar.pdf"
                    target="blank"
                  >
                    <MDBIcon far icon="clone" className="left" /> 이슈리포트
                    보기
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
                <title2 style={{ color: MAIN_COLOR }}>연구개발 기사</title2>
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
                  핵융합
                </title2>
                <br />
                <br />
                <p style={{ color: GRAY_COLOR }}>관련 기사</p>
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
                          <p className="px-1">
                            SW 가상화 기술 ‘디지털 트윈’시장 커진다
                          </p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="http://it.chosun.com/site/data/html_dir/2020/12/01/2020120102841.html"
                                target="blank"
                              >
                                더 보기
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
                          <p className="px-1">
                            한국의 인공태양 KSTAR에 쌍둥이 동생이?
                          </p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="https://m.blog.naver.com/nfripr/222002565903"
                                target="blank"
                              >
                                더 보기
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
                          <p className="px-1">
                            핵융합도 게임처럼? 가상 핵융합장치로…….
                          </p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="https://blog.naver.com/nfripr/221643755093"
                                target="blank"
                              >
                                더 보기
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBView>
                      </a>
                    </MDBCol>
                    <MDBCol className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                      <a
                        href="https://biz.chosun.com/science-chosun/science/2023/02/23/VNW64TMKKNAIRIWEF3VUSUK7QI/"
                        target="blank"
                        className="grey-text"
                      >
                        <MDBView hover className="rounded z-depth-1 mb-5" waves>
                          <img
                            className="img-fluid"
                            src="/img/promotionFd/subPageFd/newsArticle/research-article-4.jpg"
                            alt=""
                          />
                          <MDBMask overlay="white-slight" />

                          <img
                            src="/img/promotionFd/subPageFd/newsArticle/chosunbiz.jpg"
                            className="pr-2 pt-1 pl-3 pb-2"
                          />
                          <h5 className="font-weight-bold ml-3 mb-3 text-left">
                            2023.02.23
                          </h5>
                          {/* <h4 className="font-weight-bold mb-3">
                            <strong style={{ fontSize: "0.5em" }}>
                              [르포] 1억도 온도 300초 견뎌라….
                            </strong>
                          </h4> */}
                          <p className="px-1">
                           [르포] 1억도 온도 300초 견뎌라….
                          </p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="https://biz.chosun.com/science-chosun/science/2023/02/23/VNW64TMKKNAIRIWEF3VUSUK7QI/"
                                target="blank"
                              >
                                더 보기
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBView>
                      </a>
                    </MDBCol>
                    <MDBCol className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                      <a
                        href="https://m.dongascience.com/news.php?idx=60659"
                        target="blank"
                        className="grey-text"
                      >
                        <MDBView hover className="rounded z-depth-1 mb-5" waves>
                          <img
                            className="img-fluid"
                            src="/img/promotionFd/subPageFd/newsArticle/research-article-5.jpg"
                            alt=""
                          />
                          <MDBMask overlay="white-slight" />

                          <img
                            src="/img/promotionFd/subPageFd/newsArticle/donga_logo_2.png"
                            className="pr-2 pt-1 pl-3 pb-2"
                          />
                          <h5 className="font-weight-bold ml-3 mb-3 text-left">
                            2023.07.12
                          </h5>
                          {/* <h4 className="font-weight-bold mb-3">
                            <strong style={{ fontSize: "0.5em" }}>
                              [레디!퓨전] 한국 핵융합장치 'KSTAR'의….
                            </strong>
                          </h4> */}
                          <p className="px-1">
                          [레디!퓨전] 한국 핵융합장치 'KSTAR'의….
                          </p>
                          <MDBRow>
                            <MDBCol className="text-center">
                              <MDBBtn
                                color="default ml-3 mb-3"
                                size="md"
                                href="https://m.dongascience.com/news.php?idx=60659"
                                target="blank"
                              >
                                더 보기
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
