import React from "react";
import {
  // MDBFooter,
  // MDBIcon,
  MDBRow,
  MDBCol,
  MDBContainer,
  // MDBNavLink,
} from "mdbreact";
import "./Footer.css";
const Copyrights = props => {
  // const date = new Date().getFullYear();
  return (
    <>
      <section id="footerCompanyInfoId">
        <MDBRow className="footerCompanyInfo">
          <MDBContainer>
            <MDBCol md="12">
              <p className="text-center">
                <img src="/img/logo/tritech-logo-xs.png" alt="" />
              </p>

              <p className="text-center">
                TEL : 02.6958.7599 ㅣ Email : tritech@tritech.co.kr
              </p>
            </MDBCol>
          </MDBContainer>
        </MDBRow>
      </section>

      <section id="footerCompanyInfoMobile">
        <MDBRow className="footerCompanyInfo">
          <MDBContainer>
            <MDBCol>
              <p className="text-center">
                <img src="/img/logo/tritech-logo-xs.png" alt="" />
              </p>

              <p className="text-center">
                TEL : 02.6958.7599
                <br />
                Email : tritech@tritech.co.kr
              </p>
            </MDBCol>
          </MDBContainer>
        </MDBRow>
      </section>

      <section id="footerBt">
        <MDBRow className="footerBottom">
          <MDBContainer>
            <MDBCol md="12">
              <p className="font-weight-bold text-center">
                © 2021 The TriTech Corporation. All rights reserved. Privacy
                Policy Get Support
              </p>
            </MDBCol>
          </MDBContainer>
        </MDBRow>
      </section>
    </>
  );
};
export default Copyrights;
