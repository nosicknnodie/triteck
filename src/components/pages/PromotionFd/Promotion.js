import React, { useState, useContext, useReducer } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBFooter,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import "./Promotion.css";
import Copyrights from "../../Footer";
import FeaturesPage_promotion from "./component/FeaturesPage_promotion";
import { store } from "../../../common/Store";
import CommunityPage from "./component/CommunityPage";
import TopImgCompanyWeb from "../TopImgFd/TopImgCompanyWeb";
import TopImgCompanyMobile from "../TopImgFd/TopImgCompanyMobile";

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
