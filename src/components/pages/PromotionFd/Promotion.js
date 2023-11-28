/* eslint-disable react/jsx-pascal-case */
import { useContext } from "react";

import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { store } from "../../../common/Store";
import Copyrights from "../../Footer";
import TopImgCompanyMobile from "../TopImgFd/TopImgCompanyMobile";
import TopImgCompanyWeb from "../TopImgFd/TopImgCompanyWeb";
import "./Promotion.css";
import CommunityPage from "./component/CommunityPage";
import FeaturesPage_promotion from "./component/FeaturesPage_promotion";

const PromotionPage = () => {
  const globalState = useContext(store);
  const { state } = globalState;
  const { level } = state;

  return (
    <div id="Promotion">
      <div className="promotionWeb">
        <TopImgCompanyWeb />
      </div>
      <div className="promotionMobile">
        <TopImgCompanyMobile />
      </div>

      <section className="promotion_atticle">
        <MDBContainer>
          <MDBContainer className="topLinkPageWeb mt-5">
            <MDBRow>
              <MDBCol>{/* <TopLinkPage/> */}</MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className="topLinkPageMobile mt-5">
            <MDBRow>
              <MDBCol>{/* <TopLinkPageMobile/> */}</MDBCol>
            </MDBRow>
          </MDBContainer>

          {level.step === 0 && (
            <MDBContainer>
              <FeaturesPage_promotion />
            </MDBContainer>
          )}
          {level.step === 1 && (
            <MDBContainer>
              <CommunityPage />
            </MDBContainer>
          )}
        </MDBContainer>
      </section>
      <Copyrights />
    </div>
  );
};

export default PromotionPage;
