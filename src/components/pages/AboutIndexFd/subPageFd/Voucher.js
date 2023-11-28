import Copyrights from "../../../Footer";
import TopImgPageFieldPage from "../../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../../TopImgFd/TopImgPageFieldPageMobile";
import VoucherProjectsPage from "../component/VoucherProjectsPage";
import VoucherProjectsPageMobile from "../component/VoucherProjectsPageMobile";
import "./Voucher.css";

const Voucher = () => {
  return (
    <div id="Voucher">
      <div className="voucherWeb">
        <TopImgPageFieldPage />
      </div>
      <div className="voucherMobile">
        <TopImgPageFieldPageMobile />
      </div>

      <section id="DeskTop_ver">
        {/* <MDBCardBody className="voucher_tech animate__animated animate__fadeInUp" > */}
        <VoucherProjectsPage />
        {/* </MDBCardBody> */}
      </section>

      <section id="Mobile_ver">
        {/* <MDBContainer className="voucher_tech"> */}
        <VoucherProjectsPageMobile />
        {/* </MDBContainer> */}
      </section>

      <Copyrights />
    </div>
  );
};

export default Voucher;
