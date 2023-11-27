import React from "react";
import { Link } from "react-scroll";
import "./FieldPage.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFooter,
  MDBAnimation,
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

import Copyrights from "../../Footer";
import TopLinkPage from "../component/TopLinkPage";
import TopImgPageFieldPage from "../TopImgFd/TopImgPageFieldPage";
import JumbotronPage_FieldPage from "./component/JumbotronPage_FieldPage";
import JumbotronPage_FieldPage2 from "./component/JumbotronPage_FieldPage2";
import JumbotronPage_FieldPageMobile from "./component/JumbotronPage_FieldPageMobile";
import JumbotronPage_FieldPageMobile2 from "./component/JumbotronPage_FieldPageMobile2";
import FieldPageLink from "./component/FieldPageLink";

const FieldPage = () => {
  return (
    <div id="FieldPageMain">
      <TopImgPageFieldPage />

      <MDBContainer className="mainContainer">
        <MDBRow>
          <MDBCol className="colCounterComponent  col-md-11 mt-4">
            <section id="FieldPageCounterComponent">
              {/* _______________________(Virtual Simulation web ver)________________________________________________ */}

              <MDBContainer className="rowCounterComponent">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBContainer>
                    <MDBRow className="FieldPl">
                      <MDBContainer className="mt-5">
                        <MDBRow>
                          <MDBCol>
                            <TopLinkPage />
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                      <FieldPageLink />
                    </MDBRow>
                  </MDBContainer>
                  <JumbotronPage_FieldPage />
                </MDBRow>
              </MDBContainer>

              {/* _______________________(Virtual Simulation mobile ver)________________________________________________ */}

              <MDBContainer className="rowCounterComponentMobile">
                <MDBRow className=" align-items-center justify-content-center">
                  <JumbotronPage_FieldPageMobile />
                </MDBRow>
              </MDBContainer>

              <hr />

              {/* _______________________(Clean Energy web ver)________________________________________________ */}

              <MDBContainer className="rowInputSample">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp">
                    <JumbotronPage_FieldPage2 />
                  </MDBAnimation>
                </MDBRow>
              </MDBContainer>

              {/* _______________________(Clean Energy mobile ver)________________________________________________ */}

              <MDBContainer className="rowInputSampleMobile">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp">
                    <JumbotronPage_FieldPageMobile2 />
                  </MDBAnimation>
                </MDBRow>
              </MDBContainer>

              {/* _______________________(ART Technology web ver)________________________________________________ */}

              <MDBContainer className="rowInputSample2">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp"></MDBAnimation>
                </MDBRow>
              </MDBContainer>

              {/* _______________________(ART Technology mobile ver)________________________________________________ */}

              <MDBContainer className="rowInputSample2Mobile">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp"></MDBAnimation>
                </MDBRow>
              </MDBContainer>

              {/* _______________________(web ver)________________________________________________ */}

              <MDBContainer className="rowUserList">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp"></MDBAnimation>
                </MDBRow>
              </MDBContainer>

              {/* _______________________(mobile ver)________________________________________________ */}

              <MDBContainer className="rowUserListMobile">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp"></MDBAnimation>
                </MDBRow>
              </MDBContainer>

              {/* _______________________(web ver)________________________________________________ */}

              <MDBContainer className="rowCreateUser">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp"></MDBAnimation>
                </MDBRow>
              </MDBContainer>

              {/* _______________________(mobile ver)________________________________________________ */}

              <MDBContainer className="rowCreateUserMobile">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBAnimation reveal type="fadeInUp"></MDBAnimation>
                </MDBRow>
              </MDBContainer>
            </section>
          </MDBCol>

          <MDBCol className="colSideList col-md-1">
            <section id="fieldPageSideList">
              <MDBRow className="rowSideList">
                <ul style={{ paddingLeft: 10 }}>
                  <MDBCol className="advertisement"></MDBCol>

                  <Link
                    className="liCounterLink "
                    activeClass="active"
                    to="rowCounterComponent"
                    spy={true}
                    smooth={true}
                    duration={700}
                  >
                    <li>VR Simulation</li>
                  </Link>
                  <Link
                    className="liCounterLink"
                    activeClass="active"
                    to="rowInputSample"
                    spy={true}
                    smooth={true}
                    duration={700}
                  >
                    <li>Clean Energy</li>
                  </Link>
                  <Link
                    className="liCounterLink"
                    activeClass="active"
                    to="rowInputSample2"
                    spy={true}
                    smooth={true}
                    duration={700}
                  >
                    <li>ART Technology </li>
                  </Link>
                  {/* <Link className="liCounterLink" activeClass="active" to="rowUserList" spy={true} smooth={true} duration={700}>
           <li>바우처사업</li>
           </Link>
         <Link className="liCounterLink" activeClass="active" to="rowCreateUser" spy={true} smooth={true} duration={700}>
           <li>그 외 사업</li>
         </Link> */}
                </ul>
              </MDBRow>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBFooter className="footerBg pt-3 mt-5 text-center text-md-left">
        <Copyrights />
      </MDBFooter>
    </div>
  );
};

export default FieldPage;
