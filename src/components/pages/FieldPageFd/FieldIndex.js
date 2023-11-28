import { useContext } from "react";
import "./FieldIndex.css";

import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import Copyrights from "../../Footer";
// import TopImgPageFieldPage from '../TopImgFd/TopImgPageFieldPage';
// import TopImgPageFieldPageMobile from "../TopImgFd/TopImgPageFieldPageMobile";
import { store } from "../../../common/Store";
import TopImgPageFieldPage from "../TopImgFd/TopImgPageFieldPage";
import TopImgPageFieldPageMobile from "../TopImgFd/TopImgPageFieldPageMobile";
import FieldCompPage from "./component/FieldCompPage";

const FieldIndex = () => {
  const globalState = useContext(store);
  const { state } = globalState;
  const { level } = state;

  return (
    <div id="FieldPageMain">
      <div className="fieldWeb">
        <TopImgPageFieldPage />
      </div>
      <div className="fieldMobile">
        <TopImgPageFieldPageMobile />
      </div>

      <MDBContainer className="mainContainer">
        <MDBRow>
          <MDBCol className="colCounterComponent col-lg-12 col-md-12 mt-4">
            <section id="aboutCounterComponent">
              <MDBContainer className="rowCounterComponent">
                <MDBRow className=" align-items-center justify-content-center">
                  <MDBContainer className="topLinkPageWeb mt-5">
                    <MDBRow>
                      <MDBCol>{/* <TopLinkPage/> */}</MDBCol>
                    </MDBRow>
                  </MDBContainer>

                  <MDBContainer className="topLinkPageMobile mt-5">
                    <MDBRow>
                      <MDBCol>{/* <TopLinkPageMobile/> */}</MDBCol>
                    </MDBRow>
                    <hr />
                  </MDBContainer>
                  {level.step === 0 && (
                    <MDBContainer>
                      <MDBRow>
                        <FieldCompPage />
                      </MDBRow>
                    </MDBContainer>
                  )}
                  {level.step === 1 && (
                    <MDBContainer>
                      <MDBRow>
                        <FieldCompPage />
                      </MDBRow>
                    </MDBContainer>
                  )}
                </MDBRow>
              </MDBContainer>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBRow className="mt-5" center>
        {/* <Fragment>
      <MDBBtn color="primary" outline rounded href="/pages/ContactFd/contact">
        CONTACT US!
      </MDBBtn>
      </Fragment> */}
      </MDBRow>

      <Copyrights />
    </div>
  );
};

export default FieldIndex;
