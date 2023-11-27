import React, { useState, useContext, useReducer } from "react";

import "./VideoNews.css";
import TopImgCompanyWeb from "../../TopImgFd/TopImgCompanyWeb";
import TopImgCompanyMobile from "../../TopImgFd/TopImgCompanyMobile";

import { MDBContainer, MDBIframe } from "mdbreact";
import TitleOfVideo from "../component/TitleOfVideo";
import Copyrights from "../../../Footer";

const VideoNews = () => {
  return (
    <>
      <div id="videoNews">
        <div className="videoNewsWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="videoNewsMobile">
          <TopImgCompanyMobile />
        </div>
        <MDBContainer className="mt-5 pt-5 mb-5 pt-5 text-center">
          {/* <MDBIframe  src="https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/ict-project-demo-haptic.mp4" /> */}
          <TitleOfVideo />
        </MDBContainer>

        <MDBContainer className="mt-5 pt-5 mb-5 pt-5 text-center">
          {/* <MDBIframe  src="https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4" /> */}
        </MDBContainer>

        <Copyrights />
      </div>
    </>
  );
};

export default VideoNews;
