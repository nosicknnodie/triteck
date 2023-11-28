import { MDBCard, MDBCardBody, MDBRow, MDBCol,MDBView ,MDBMask  } from "mdbreact";
import { Link } from 'react-router-dom';
import "./KstarCompPage.css";

const KstarCompPage = (uuid) => {
  return (
    <section id="kstarCard">
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="kstarCardBody">
          <MDBRow>
          <MDBCol lg="6">
          <Link to="/pages/AboutIndexFd/subPageFd/kstar">
            <MDBView className="rounded mb-4 mt-4 ml-4 mr-4" hover waves>
              <img className="img-fluid" src="/img/FieldIndex/field/pfCard1.png" alt="" />
                <MDBMask overlay="white-slight" />

            </MDBView>
          </Link>
          </MDBCol>
          <MDBCol lg="6">
          <Link to="/pages/AboutIndexFd/subPageFd/dlpp">
            <MDBView className="rounded mb-4 mt-4 ml-4 mr-4" hover waves>
              <img className="img-fluid" src="/img/FieldIndex/field/pfCard2.png" alt="" />
                <MDBMask overlay="white-slight" />
            </MDBView>
          </Link>
          </MDBCol>
          <MDBCol lg="6">
          <Link to="/pages/AboutIndexFd/subPageFd/Fire">
            <MDBView className="rounded mb-4 mt-4 ml-4 mr-4" hover waves>
              <img className="img-fluid" src="/img/FieldIndex/field/pfCard3.png" alt="" />
                <MDBMask overlay="white-slight" />
            </MDBView>
          </Link>
          </MDBCol>
          <MDBCol lg="6">
          <Link to="/pages/AboutIndexFd/subPageFd/Voucher">
            <MDBView className="rounded mb-4 mt-4 ml-4 mr-4" hover waves>
              <img className="img-fluid" src="/img/FieldIndex/field/pfCard4.png" alt="" />
                <MDBMask overlay="white-slight" />
            </MDBView>
          </Link>
          </MDBCol>
          <MDBCol lg="6">
          <Link to="#!">
            <MDBView className="rounded mb-4 mt-4 ml-4 mr-4" hover waves>
              <img className="img-fluid" src="/img/FieldIndex/field/pfCard5.png" alt="" />
                <MDBMask overlay="white-slight" />
            </MDBView>
          </Link>
          </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </section>
  );
};

export default KstarCompPage;
