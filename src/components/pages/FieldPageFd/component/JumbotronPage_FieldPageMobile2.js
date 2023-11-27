import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle, MDBCard, MDBCardImage, MDBBtnGroup, MDBContainer, MDBScrollspyBox} from "mdbreact";
import './JumbotronPage_FieldPageMobile2.css'
import JumbotronPage_FieldPageMobileCollapse from "./JumbotronPage_FieldPageMobileCollapse";
import JumbotronPage_FieldPageMobileCollapse2 from "./JumbotronPage_FieldPageMobileCollapse2";




const JumbotronPage_FieldPageMobile2 = () => {
  return (
    <section id="jumbotronIdMobile2">
  
     <MDBRow>
     <JumbotronPage_FieldPageMobileCollapse2/>
      <MDBCol md='12'>
         <MDBRow>
         <MDBCol className="btnBox">
         개발내용
    </MDBCol>
         </MDBRow>
        <MDBCard className='mt-3'>
          <MDBCardImage
            top
            src='/img/fieldPage/clean%20energy/CleanEnergy2.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon  className='white-text' />
            </a>
            <MDBCardTitle  className='colCleanEnergyTitle' >고온 다단 싸이크론 연소로</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
           <MDBRow className="rowCleanEnergy">
             <MDBCol>
고압증기 기술 적용에 의한 저 Nox 배출
             </MDBCol>
           </MDBRow>
            </MDBCardText>
            <MDBCardText  className="colCleanEnergy" >
            H + OH + NOx  →  H₂O + N₂ <br/>
            (2차 연소실 고온부에 고압증기 분무)
            </MDBCardText>

            <MDBCardText className='white-text'>
           <MDBRow className="rowCleanEnergy">
             <MDBCol>
2차 연소공기 : 배기가스 재순환
             </MDBCol>
             <MDBRow>                
           </MDBRow>
           </MDBRow>
           <MDBContainer className="justify-conten-center">
           <MDBCol  className="colCleanEnergy" >재순환 밸브 / 외부공기 유입밸브
             </MDBCol>  
             </MDBContainer>
            </MDBCardText>
           
           <MDBRow>
             <MDBCol>
             <MDBCardText className='white-text'>
           <MDBRow className="rowCleanEnergy">
             <MDBCol>
다단연소 : 연소용 공기 흐름 진행
             </MDBCol>
            </MDBRow>
         
           <MDBRow className='colCleanEnergy'>
             <MDBCol className="mt-3">
               <img src='/img/fieldPage/clean%20energy/CleanEnergyMobile.png' />
             </MDBCol>
           </MDBRow>
           <MDBRow>
             <MDBCol className='colCleanEnergy'>
               상부 연소공기 / 연소실 하부 냉각
             </MDBCol>
           </MDBRow>
 
         
            </MDBCardText>
             </MDBCol>
           </MDBRow>
            {/* <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a> */}
          </MDBCardBody>
        </MDBCard>
   
      </MDBCol>
    </MDBRow>

    <MDBRow className="mt-5">
      <MDBCol md='12'>
        <MDBCard>
          <MDBCardImage
            top
            src='/img/fieldPage/clean%20energy/image 66.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon  className='white-text' />
            </a>
            <MDBCardTitle  className='colCleanEnergyTitle'>연속 공급방식 연소기</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='colCleanEnergy'>
            증기 및 온수 생산 방식
            </MDBCardText>
            {/* <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a> */}
          </MDBCardBody>
        </MDBCard>
         
      </MDBCol>
    </MDBRow>

    
    <MDBRow className="mt-5">
      <MDBCol md='12'>
        <MDBCard>
          <MDBCardImage
            top
            src='/img/fieldPage/clean%20energy/image 67.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon  className='white-text' />
            </a>
             
            <MDBCardText className='colCleanEnergyTitle'>
     지정폐기물 소각처리방식
            </MDBCardText>
            {/* <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a> */}
          </MDBCardBody>
        </MDBCard>
         
      </MDBCol>
    </MDBRow>

    <MDBRow className="mt-5">
      <MDBCol md='12'>
        <MDBCard>
          <MDBCardImage
            top
            src='/img/fieldPage/clean%20energy/CleanEnergy7Mobile.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon className='white-text' />
            </a>
            <MDBCardTitle className='colCleanEnergyTitle'>일괄투입식 연소기</MDBCardTitle>
            <hr className='hr-light' />
          
            {/* <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a> */}
          </MDBCardBody>
        </MDBCard>
   
      </MDBCol>
    </MDBRow>

    
  

    </section>
  )
}

export default JumbotronPage_FieldPageMobile2;