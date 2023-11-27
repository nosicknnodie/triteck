import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle, MDBCard, MDBCardImage} from "mdbreact";
import './JumbotronPage_FieldPageMobile.css'
import JumbotronPage_FieldPageMobileCollapse from "./JumbotronPage_FieldPageMobileCollapse";




const JumbotronPage_FieldPageMobile = () => {
  return (
    <section id="jumbotronIdMobile">
  
     <MDBRow>
     <JumbotronPage_FieldPageMobileCollapse/>
      <MDBCol md='12'>
         <MDBRow>
           <MDBCol className="btnBox">
             개발내용
           </MDBCol>
         </MDBRow>
        <MDBCard className='mt-3'>
          <MDBCardImage
            top
            src='https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+25.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon  className='white-text' />
            </a>
            <MDBCardTitle>소      방      훈      련</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            소방 지휘훈련 시뮬레이터는 2005년도에 국내 최초로 
가상현실 기반의 팀단위 훈련이 가능한 대규모화재 진압훈련용 시뮬레이터.<br/><br/>
개발 후 문화재화재진합훈련을 위한 시뮬레이터 등 다양한 시뮬레이터 개발
            </MDBCardText>

            <MDBCardTitle className="cardTitle2">화재재난현장 팀단위 전술 및 도상훈련 시뮬레이션 개발 </MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            2012 년 4월부터 2년간 3D 게임을 통해 소방관들의 표준작전 절차를 익힐 수 있도록 팀단위의 전술훈련용 시뮬레이션 게임 개발
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
            src='https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+29.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon  className='white-text' />
            </a>
            <MDBCardTitle>가상안전체험관</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            1999년도에 노동부 산업안전관리공단의 가상안전체험관 계획에 자문교수로 참여하여 가상안전체험관의 규격 제시. 
이후 포항제철, 현대중공업, 미포조선, 삼호중공업, GS건설 등 대규모 사업장에서 보다 수준 높은 안전교육을 위해 가상안전체험관 구축

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
            src='https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+32.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon className='white-text' />
            </a>
            <MDBCardTitle>고소작업대 교육용 시뮬레이터</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            현대중공업에서 필요한 고소작업대 훈련용 시뮬레이터 개발로 가상의 훈련환경에서 고소작업대를 조종하는 훈련장치를 개발함


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
            src='https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/field+of+research/Virtual+Simulation/image+30.png'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='blueBoxColor white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon  className='white-text' />
            </a>
            <MDBCardTitle>스포츠 ICT</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            정보통신기술 (ICT :Information & Communications Technology)과 스포츠 기기가 융합된 스포츠콘텐츠 .
기존 전자호구 대비 경량화 및 센서기능이 향상된 저거형의 수련용 전자호 개발

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
  

    </section>
  )
}

export default JumbotronPage_FieldPageMobile;