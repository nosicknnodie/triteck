import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";
import TabsJustified_CleanEnergy from './TabsJustified_CleanEnergy'


const JumbotronPage_CleanEnergy = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="h2">
              CleanEnergy
              </MDBCardTitle>
              <p className="green-text my-4 font-weight-bold">
                Powerful and free Material Design UI KIT
              </p>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                aliquid dolorem ea distinctio exercitationem delectus qui, quas
                eum architecto, amet quasi accusantium, fugit consequatur
                ducimus obcaecati numquam molestias hic itaque accusantium
                doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <hr className="my-4" />
              {/* <div className="pt-2">
                <MDBBtn
                  color="primary"
                  className="waves-effect"
                >
                  Buy now <MDBIcon far icon="gem" />
                </MDBBtn>
                <MDBBtn
                  outline
                  color="primary"
                  className="waves-effect"
                >
                  Download <MDBIcon icon="download" />
                </MDBBtn>
              </div> */}
              <div>
                  
              <TabsJustified_CleanEnergy/>

              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage_CleanEnergy;