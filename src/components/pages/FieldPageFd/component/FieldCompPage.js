import { MDBCard, MDBCardBody, MDBRow,MDBCardVideo,MDBContainer} from "mdbreact";
import "./FieldCompPage.css";

const FieldCompPage = (uuid) => {
  return (
    <section id="kstarCard">
      <MDBContainer>
         <MDBRow>
          <MDBCardVideo
              src='https://tritech.s3.ap-northeast-2.amazonaws.com/HomePage_video/kstar.mp4'
              ratio='16by9'    
            />
          </MDBRow>
      </MDBContainer>
      <MDBContainer>
          <MDBRow>
          <img
                        src="\img\FieldIndex\field\Strength.JPG"
                        alt=""
                        className="img-fluid"
                      />
          </MDBRow>
      </MDBContainer>
      <MDBContainer>
          <MDBRow>
          <img
                        src="\img\FieldIndex\field\BusinessDirection.png"
                        alt=""
                        className="img-fluid"
                      />
          </MDBRow>
       </MDBContainer>
       <MDBContainer>
          <MDBRow>
          <img
                        src="\img\FieldIndex\field\business.png"
                        alt=""
                        className="img-fluid"
                      />
          </MDBRow>
        </MDBContainer>
    </section>
  );
};

export default FieldCompPage;
