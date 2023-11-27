import React from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBFooter,
  MDBCard, 
  MDBCardBody,
  MDBCardImage,
   MDBCardTitle,
  MDBCardText,
  MDBTooltip, 
  MDBCardFooter, 
  MDBIcon, 
  MDBBtn,
  MDBMask






} from 'mdbreact';
import './CleanEnergy.css';
import EcommercePage_Field from './component/EcommercePage_Field'
import JumbotronPage_CleanEnergy from './component/JumbotronPage_CleanEnergy'
import Copyrights from '../../Footer';
import TopLinkPage from '../component/TopLinkPage'

class CleanEnergy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ''
  }));

  render() {
    return (
      <div id='CleanEnergy'>
         <section id='CleanEnergy_1'>
        
         <MDBView>
            <MDBContainer className='h-100 justify-content-center align-items-center'>
              <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol className="topLogo">
                <img src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/topLogo-232-262.png" alt="logo"></img>

                </MDBCol>
                <MDBCol></MDBCol>
            
            </MDBRow>

              <section id='CleanEnergy_sn'>
               <MDBRow>
                <MDBCol md='12' className='topLogo mt-5 mx-auto text-center'>
             
                 
                </MDBCol>
              </MDBRow>
              </section> 

            </MDBContainer>         
          </MDBView>
           </section>
       
      
           <MDBContainer>
             <hr/>
             <h2 className="h1-responsive font-weight-bold my-5 text-center animate__animated animate__fadeInUp">
             Clean Energy
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
          AR/VR | ART Technology | Clean Energy | VR Simulator
          </p>
          </MDBContainer>

          <MDBContainer>
            <TopLinkPage/>
          </MDBContainer>

     <MDBContainer >
      
      <EcommercePage_Field/>

    </MDBContainer>

    <MDBContainer>

      <JumbotronPage_CleanEnergy/>

    </MDBContainer>



    
       
       

        

        <MDBFooter className='pt-3 mt-5 text-center text-md-left'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='3'>
                <h6 className='text-uppercase font-weight-bold'>
                  SMU_Intranet
                </h6>
                <p>
                  SNCE 1937
                </p>
                <p>
                  SANGMYUNG UNIV. 20 Hongjimun 2-gil, Jongno-gu, Seoul 03016.Korea T.82. 2. 781. 7672
                </p>
              </MDBCol>
              <hr className='w-100 clearfix d-md-none' />
              <MDBCol md='2' className='ml-auto'>
                <h6 className='text-uppercase font-weight-bold'>Links</h6>
                <ul className='list-unstyled'>
                  <li>
                    <a href='#!'>Link 1</a>
                  </li>
                  {/* <li>
                    <a href='#!'>Link 2</a>
                  </li>
                  <li>
                    <a href='#!'>Link 3</a>
                  </li>
                  <li>
                    <a href='#!'>Link 4</a>
                  </li> */}
                </ul>
              </MDBCol>
              <hr className='w-100 clearfix d-md-none' />
              <MDBCol md='2' className='ml-auto'>
                <h6 className='text-uppercase font-weight-bold'>links</h6>
                <ul className='list-unstyled'>
                  <li>
                    <a href='#!'>Link 1</a>
                  </li>
                  {/* <li>
                    <a href='#!'>Link 2</a>
                  </li>
                  <li>
                    <a href='#!'>Link 3</a>
                  </li>
                  <li>
                    <a href='#!'>Link 4</a>
                  </li> */}
                </ul>
              </MDBCol>
              <hr className='w-100 clearfix d-md-none' />
              <MDBCol md='2' className='ml-auto'>
                <h6 className='text-uppercase font-weight-bold'>상명대 산학협력단</h6>
                <ul className='list-unstyled'>
                  <li>
                    <a href='https://iacf.smu.ac.kr/web/index'>바로가기</a>
                  </li>
                  {/* <li>
                    <a href='#!'>Link 2</a>
                  </li>
                  <li>
                    <a href='#!'>Link 3</a>
                  </li>
                  <li>
                    <a href='#!'>Link 4</a>
                  </li> */}
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr />
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12'>
                <ul className='list-unstyled d-flex justify-content-center mb-0 pb-0 pt-2 list-inline'>
                  <li className='list-inline-item'>
                    <MDBIcon
                      fab
                      icon='facebook'
                      size='2x'
                      className='white-text p-2 m-2'
                    />
                  </li>
                  <li className='list-inline-item'>
                    <MDBIcon
                      fab
                      icon='twitter'
                      size='2x'
                      className='white-text p-2 m-2'
                    />
                  </li>
                  <li className='list-inline-item'>
                    <MDBIcon
                      fab
                      icon='google-plus'
                      size='2x'
                      className='white-text p-2 m-2'
                    />
                  </li>
                  <li className='list-inline-item'>
                    <MDBIcon
                      fab
                      icon='linkedin'
                      size='2x'
                      className='white-text p-2 m-2'
                    />
                  </li>
                  <li className='list-inline-item'>
                    <MDBIcon
                      fab
                      icon='instagram'
                      size='2x'
                      className='white-text p-2 m-2'
                    />
                  </li>
                  <li className='list-inline-item'>
                    <MDBIcon
                      fab
                      icon='pinterest'
                      size='2x'
                      className='white-text p-2 m-2'
                    />
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Copyrights />
        </MDBFooter>
      </div>
    );
  }
}

export default CleanEnergy;
