import fields from "@/common/data/_field";
import { MDBCard, MDBCardBody, MDBRow } from "mdbreact";
import "./FieldCompPage.css";
import FieldCompPageItem from "./FieldCompPageItem";

const FieldCompPage = (uuid) => {
  return (
    <section id="kstarCard">
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="kstarCardBody">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            연구분야
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Tchnology
            {/* AR.VR  / ART Technology / Clean Energy */}
          </p>
          <MDBRow>
            {fields.map((fcpi) => {
              return (
                <>
                  <MDBRow className="mt-0 mb-0">
                    <FieldCompPageItem fcpi={fcpi} />
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

export default FieldCompPage;
