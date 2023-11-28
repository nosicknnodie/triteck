import Copyrights from "../../../Footer";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import "./subPageFd.css";
// import TopImgPageProjects from "../../FieldPageFd/component/TopImgPageProjects";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import IctProjectsPage from "../component/IctProjectsPage";
import IctProjectsPageMobile from "../component/IctProjectsPageMobile";

const Dipp = () => {
  return (
    <div id="subPageFd">
      <div className="desktop">
        <TopImgPageFieldPage />
        <IctProjectsPage />
      </div>

      <div className="mobile">
        <TopImgPageFieldPageMobile />
        <IctProjectsPageMobile />
      </div>

      <Copyrights />
    </div>
  );
};

export default Dipp;
