import React from "react";

import "./subPageFd.css";
import Copyrights from "../../../Footer";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import KstarProjectsPage from "../component/KstarProjectsPage";
import KstarProjectsPageMobile from "../component/KstarProjectsPageMobile";

const Kstar = () => {
  return (
    <div id="subPageFd">
      <div className="desktop">
        <TopImgPageFieldPage />
        <KstarProjectsPage />
      </div>

      <div className="mobile">
        <TopImgPageFieldPageMobile />
        <KstarProjectsPageMobile />
      </div>

      <Copyrights />
    </div>
  );
};

export default Kstar;
