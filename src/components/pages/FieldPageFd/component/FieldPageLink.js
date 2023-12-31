import { MDBBtn } from "mdbreact";
import { Fragment } from "react";
import { Link } from "react-scroll";

const FieldPageLink = () => {
  return (
    <div>
      <Fragment>
        <Link
          className="liCounterLink"
          activeClass="active"
          to="rowCounterComponent"
          spy={true}
          smooth={true}
          duration={700}
        >
          <MDBBtn outline color="mdb-color">
            VR Simulation
          </MDBBtn>
        </Link>
        <Link
          className="liCounterLink"
          activeClass="active"
          to="rowInputSample"
          spy={true}
          smooth={true}
          duration={700}
        >
          <MDBBtn outline color="mdb-color">
            Clean Energy
          </MDBBtn>
        </Link>
        <Link
          className="liCounterLink"
          activeClass="active"
          to="rowInputSample2"
          spy={true}
          smooth={true}
          duration={700}
        >
          <MDBBtn outline color="mdb-color">
            ART Technology
          </MDBBtn>
        </Link>
      </Fragment>
    </div>
  );
};

export default FieldPageLink;
