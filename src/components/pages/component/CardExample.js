import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
'mdbreact';

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol col='4'>
        <MDBCard narrow>
          <MDBCardImage
            className='view view-cascade gradient-card-header purple-gradient'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive'>Mattonit</h2>
            <p>The Boar</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating size='sm'>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating size='sm'>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating size='sm'>
                <MDBIcon fab icon='google-plus-g' size="lg"/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
              dignissimos neque rem nihil ratione est placeat vel, natus non
              quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

     
    </MDBRow>
  )
}

export default CardExample;