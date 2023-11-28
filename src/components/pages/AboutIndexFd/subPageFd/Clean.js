import Copyrights from "../../../Footer";
import "./Clean.css";
// import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
// import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import CleanProjectsPage from "../component/CleanProjectsPage";
import CleanProjectsPageMobile from "../component/CleanProjectsPageMobile";

const Clean = () => {
  return (
    <div id="Clean">
      <div className="cleanWeb">
        <TopImgPageFieldPage />
      </div>
      <div className="cleanMobile">
        <TopImgPageFieldPageMobile />
      </div>

      <section id="DeskTop_ver">
        {/* <MDBCardBody className="clean_tech animate__animated animate__fadeInUp"> */}
        <CleanProjectsPage />
        {/* </MDBCardBody> */}
      </section>

      <section id="Mobile_ver">
        {/* <MDBContainer className="clean_tech"> */}
        <CleanProjectsPageMobile />
        {/* </MDBContainer> */}
      </section>

      <Copyrights />
    </div>
  );
};

export default Clean;
