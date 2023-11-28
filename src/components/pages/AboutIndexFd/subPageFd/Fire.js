import Copyrights from "../../../Footer";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import "./subPageFd.css";
import FireInner from "./FireInner";

const Fire = () => {
  return (
    <div id="subPageFd">
      <div className="desktop">
        <TopImgPageFieldPage />
        <FireInner />
      </div>

      <div className="mobile">
        <TopImgPageFieldPageMobile />
        <FireInner />
      </div>
  <Copyrights />
  </div>
  );
};
export default Fire;
