/* eslint-disable jsx-a11y/alt-text */
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";

import "../../../../common/form/contentDesign.css";
import "../../../../common/form/contentFont.css";
import "./EcommercePage.css";
import { useTranslation } from "react-i18next";

const EcommercePage = () => {
  const { t } = useTranslation(["blog"]);
  const TITLE_COLOR = "#212529";
  const GRAY_COLOR = "#565656";

  return (
    <>
      <section id="wideImgSection">
        <MDBContainer>
          <title2 style={{ color: TITLE_COLOR }} className="mb-1 text-center">
            {t("E01")}
          </title2>
          <br />
          <br />
          <p style={{ color: GRAY_COLOR }} className="text-center">
            {t("E02")}
          </p>
        </MDBContainer>
      </section>

      <section id="featuresPage">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="/img/promotionFd/subPageFd/newsArticle/research-article-ict-1.jpg"
                    alt=""
                  />
                  <a
                    href="http://www.mtnews.net/news/view.php?idx=5952"
                    target="blank"
                  >
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a
                    href="http://www.mtnews.net/news/view.php?idx=5952"
                    target="blank"
                    className="deep-orange-text"
                  >
                    <h6 className="font-weight-bold">
                      <img
                        src="/img/promotionFd/subPageFd/newsArticle/icon_mt.png"
                        className="pr-2"
                      />
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    2019/05/07
                  </p>
                </div>

                <a
                  href="http://www.mtnews.net/news/view.php?idx=5952"
                  target="blank"
                >
                  <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                    {t("E03")}
                  </p>
                </a>
              </div>
              <div className="mainNewsLine newsLine"></div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div className="newsLine">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/promotionFd/subPageFd/newsArticle/research-article-ict-2.jpg"
                        alt=""
                      />
                      <a
                        href="https://www.yna.co.kr/view/AKR20190507053800063"
                        target="blank"
                      >
                        <MDBMask
                          overlay="white-slight"
                          className="waves-light"
                        />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                      2019.05.07
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a
                          href="https://www.yna.co.kr/view/AKR20190507053800063"
                          target="blank"
                          className="dark-grey-text"
                        >
                          {t("E04")}
                        </a>
                      </MDBCol>
                      <a
                        href="https://www.yna.co.kr/view/AKR20190507053800063"
                        target="blank"
                      >
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="newsLine">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/promotionFd/subPageFd/newsArticle/research-article-ict-3.jpg"
                        alt=""
                      />
                      <a
                        href="http://www.gukjenews.com/news/articleView.html?idxno=1113381"
                        target="blank"
                      >
                        <MDBMask
                          overlay="white-slight"
                          className="waves-light"
                        />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                      2019.05.07
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a
                          href="http://www.gukjenews.com/news/articleView.html?idxno=1113381"
                          target="blank"
                          className="dark-grey-text"
                        >
                          {t("E05")}
                        </a>
                      </MDBCol>
                      <a
                        href="http://www.gukjenews.com/news/articleView.html?idxno=1113381"
                        target="blank"
                      >
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="newsLine">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/promotionFd/subPageFd/newsArticle/research-article-ict-4.jpg"
                        alt=""
                      />
                      <a
                        href="https://www.etnews.com/20190507000337?m=1"
                        target="blank"
                      >
                        <MDBMask
                          overlay="white-slight"
                          className="waves-light"
                        />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                      2019.05.07
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a
                          href="https://www.etnews.com/20190507000337?m=1"
                          target="blank"
                          className="dark-grey-text"
                        >
                          {t("E06")}
                        </a>
                      </MDBCol>
                      <a
                        href="https://www.etnews.com/20190507000337?m=1"
                        target="blank"
                      >
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/promotionFd/subPageFd/newsArticle/research-article-ict-5.jpg"
                        alt=""
                      />
                      <a
                        href="http://www.koenergy.co.kr/news/articleView.html?idxno=106603"
                        target="blank"
                      >
                        <MDBMask
                          overlay="white-slight"
                          className="waves-light"
                        />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                      2019.05.13
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          {t("E07")}
                        </a>
                      </MDBCol>
                      <a
                        href="http://www.koenergy.co.kr/news/articleView.html?idxno=106603"
                        target="blank"
                      >
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="/img/promotionFd/subPageFd/newsArticle/research-article-ict-6.jpg"
                        alt=""
                      />
                      <a
                        href="https://v.daum.net/v/20221110180102845"
                        target="blank"
                      >
                        <MDBMask
                          overlay="white-slight"
                          className="waves-light"
                        />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                      2022.11.10
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        [영상]원전 수중해체 기술 나왔다..
                        </a>
                      </MDBCol>
                      <a
                        href="https://v.daum.net/v/20221110180102845"
                        target="blank"
                      >
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* </MDBCardBody> */}
        {/* </MDBCard> */}
      </section>
    </>
  );
};

export default EcommercePage;
