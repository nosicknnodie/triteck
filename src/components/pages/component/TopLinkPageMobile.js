import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";

import { NavLink } from "react-router-dom";
import "./TopLinkPage.css";

const TopLinkPageMobile = () => {
  // const newsStyle = {
  //   borderBottom: "1px solid #e0e0e0",
  //   marginBottom: "1.5rem",
  // };

  return (
    <>
      <section className="topLinkpageMobile">
        <MDBContainer className="containToplinkpage">
          <MDBRow
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <MDBCol>
              <NavLink to="/pages/CeoFd/ceo">
                <MDBIcon
                  far
                  icon="building"
                  size="1x"
                  className="indigio-text"
                />
              </NavLink>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                소개
              </p>
            </MDBCol>
            <MDBCol>
              <NavLink to="/pages/AboutindexFd/aboutindex">
                <MDBIcon icon="chart-line" size="1x" className="indigio-text" />
              </NavLink>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                실적
              </p>
            </MDBCol>
            <MDBCol>
              <NavLink to="/pages/FieldPageFd/FieldIndex">
                <MDBIcon icon="chart-pie" size="1x" className="indigio-text" />
              </NavLink>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                분야
              </p>
            </MDBCol>
            <MDBCol>
              <NavLink to="/pages/ContactFd/contact">
                <MDBIcon icon="headset" size="1x" className="indigio-text" />
              </NavLink>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                문의
              </p>
            </MDBCol>

            {/* <MDBCol>
 <NavLink to="/pages/contact" >
 <MDBIcon icon="headset fa-4x" className="topIcon" style={{color:"gray"}} />
 </NavLink>

<p style={{marginTop:"10px", fontSize:"13px", fontWeight:"800", color:"gray"}}>contact</p>
</MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default TopLinkPageMobile;
