import "./TopImgPage.css";

import { MDBCol, MDBContainer, MDBRow, MDBView } from "mdbreact";

const TopImgPage = () => {
  return (
    <>
      <section id="TopImgPage_1">
        <MDBView>
          <MDBContainer className="h-100 justify-content-center align-items-center">
            <section id="TopImgPage_sn">
              <MDBRow>
                <MDBCol
                  md="12"
                  className="topLogo mt-5 mx-auto text-center"
                ></MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
        </MDBView>
      </section>
    </>
  );
};

export default TopImgPage;
