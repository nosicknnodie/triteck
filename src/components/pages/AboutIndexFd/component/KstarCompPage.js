// import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBLink } from "mdbreact";
import resarchs from "@/common/data/_resarch";
import { MDBCard, MDBCardBody, MDBRow } from "mdbreact";
import "./KstarCompPage.css";
import KstarCompPageItem from "./KstarCompPageItem";

const KstarCompPage = (uuid) => {
  return (
    <section id="kstarCard">
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="kstarCardBody">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            연구실적
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Research achievements
          </p>
          <MDBRow>
            {resarchs.map((kcpi) => {
              return (
                <>
                  <MDBRow className="mt-5 mb-5">
                    <KstarCompPageItem kcpi={kcpi} />
                  </MDBRow>
                </>
              );
            })}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </section>
  );
};

export default KstarCompPage;
