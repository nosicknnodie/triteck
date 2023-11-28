import { Component, Fragment } from "react";

import { MDBBtn, MDBCardBody, MDBContainer, MDBRow } from "mdbreact";

import Copyrights from "../../Footer";
import TopImgCompanyMobile from "../TopImgFd/TopImgContactedMobile";
import TopImgCompanyWeb from "../TopImgFd/TopImgContactedWeb";
import "./Ceo.css";

class Ceo extends Component {
  render() {
    // const GRAY_COLOR = "#565656";
    // const LIGHT_GRAY_COLOR = "#565656";

    return (
      <div id="Ceo">
        <div className="ceoWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="ceoMobile">
          <TopImgCompanyMobile />
        </div>

        <img src="/img/ceo/CEO.png" alt="temp" style={{ width: "100%" }} />
        <img src="/img/ceo/Vision.jpg" alt="temp" style={{ width: "100%" }} />
        <img src="/img/ceo/Vision.png" alt="temp" style={{ width: "100%" }} />
        <img
          src="/img/ceo/Organization2.png"
          alt="temp"
          style={{ width: "100%" }}
        />
        <img src="/img/ceo/History.jpg" alt="temp" style={{ width: "100%" }} />
        <img
          src="/img/ceo/Certification.jpg"
          alt="temp"
          style={{ width: "100%" }}
        />

        <section id="Partners">
          <MDBCardBody className="bodyPartners">
            <MDBContainer lg="12" className=" mt-5 pt-5 mb-5 pb-5">
              <MDBRow center>
                <h6>CLIENTS & PARTNERS</h6>
              </MDBRow>

              <br />
              <br />
              <br />
              <br />

              <img
                src="/img/ceo/Partner.png"
                alt="temp"
                style={{ width: "100%" }}
              />
              {/* <MDBRow className="mt-5" center>
                <h6>foreign parts</h6>
              </MDBRow> */}
              <MDBRow className="mt-5" center>
                <Fragment>
                  <MDBBtn
                    color="primary"
                    outline
                    rounded
                    href="/pages/ContactFd/contact"
                  >
                    CONTACT US!
                  </MDBBtn>
                </Fragment>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </section>

        <Copyrights />
      </div>
    );
  }
}

export default Ceo;
