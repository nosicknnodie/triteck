import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle, MDBAnimation} from "mdbreact";

import './JumbotronPage_FieldPage.css'
import TabsJustified_FieldPage from "./TabsJustified_FieldPage";




const JumbotronPage_FieldPage = () => {
  return (
    <section id="jumbotronId">
    <MDBContainer className="containJumbot mt-1 text-center">
      <MDBRow>
        <MDBCol className="rowJumbo">
       
          <MDBJumbotron>
            <MDBCardBody>
              
              <MDBCardTitle className="VrTitle h2 animate__animated animate__fadeInUp">
            
              {/* MDBAnimation 마우스 스크롤 동작시 작동하게 하려면 = <MDBAnimation reveal type='fadeInUp'> */}
              Virtual Simulation
      
              </MDBCardTitle>
              <p className="blue-text my-1 font-weight-bold">
              Virtual Reality . Augmented  Reality  . eXtended Reality . Mixed Reality
              </p>
              <MDBCardText className="cardJumbot my-4">
              VR / AR / AV / MR / XR 기술을 다양한 분야에 개발,공급합니다.
가상현실 환경에서 분석/실험/훈련/교육 등의 효과를 극대화 할 수 있는 시뮬레이션을 개발하여 사용자에게 적합한 최적의 솔루션을 제공합니다.
              </MDBCardText>

          
            <MDBContainer className="containDv"> 
                <MDBRow className="DvScope">
                  개발범위
                </MDBRow>
                
                <MDBRow className="DvScopeContent">
                  <MDBCol className="DvScopeList">
                  가상 현실 VR ( Virtual Reality )   
                  </MDBCol>
                  
                
                  <MDBCol className="DvScopeListChild">
                  현실과 유사한 체험을  경험하게 구현된 가상의 공간
                  </MDBCol>

                </MDBRow>
                
                <MDBRow className="DvScopeContent">
                  <MDBCol className="DvScopeList">
                  증강현실 AR ( Augmented Reality )  
                  </MDBCol>
                  <MDBCol className="DvScopeListChild">
                  현 정보에 가상 현실이 부가된 공간
                  </MDBCol>

                </MDBRow>

                <MDBRow className="DvScopeContent">
                  <MDBCol className="DvScopeList">
                  혼합현실 MR ( Mixed Reality )   
                  </MDBCol>
                  <MDBCol className="DvScopeListChild">
                  가상현실을 현실세계와 융합
                  </MDBCol>

                </MDBRow>

                <MDBRow className="DvScopeContent">
                  <MDBCol className="DvScopeList">
                  확장현실 XR ( eXtended Reality )   
                  </MDBCol>
                  <MDBCol className="DvScopeListChild">
                  가상현실과 증강현실을 합친기술
                  </MDBCol>

                </MDBRow>

            </MDBContainer>

              <hr className="my-4" style={{border:"none"}}/>
         
              <div>
                  
  <TabsJustified_FieldPage/>

              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </section>
  )
}

export default JumbotronPage_FieldPage;