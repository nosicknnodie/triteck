import React, { Fragment } from "react";
import {MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBIcon} from "mdbreact";
import TopLinkPage from "./TopLinkPage";
import './EcommercePage_Field.scss';

const EcommercePage_Field = () => {
  return (

    <>
    <section id="fieldProjects" className="text-center my-5">

      <h2 className="h1-responsive font-weight-bold my-5 animate__animated animate__fadeInUp">
      Virtual Simulation
      </h2>
      <h6 className="w-responsive mx-auto mb-5">
      Virtual Reality . Augmented  Reality  . eXtended Reality . Mixed Reality . Metaverse
      </h6>

      <p className="fieldTitle w-responsive mx-auto mb-5">
      VR / AR / AV / MR / XR 기술을 다양한 분야에 개발,공급 가상현실 환경에서 분석/실험/훈련/교육 등의 효과를 극대화 할 수 있는 시뮬레이션을 개발하여 사용자에게 적합한 최적의 솔루션을 제공
      </p>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="colTitle" sm="2">
            개 발 범 위
          </MDBCol>
          <MDBCol sm="10">
          <hr className="FieldHrSize"/>
          </MDBCol>
        </MDBRow>

      </MDBContainer>

<MDBRow className="rowFieldProjects mt-5 mb-5 ">
<MDBCol className="colFieldProjects mt-1 pb-5 dark-text">


    <MDBContainer className="containTable pr-5 ml-5">
    <MDBTable>

      <MDBTableBody className="">
        <tr>

          <td style={{fontWeight:"800"}} className="text-left blue-text">가상현실 VR( Virtual Reality )</td>
          <td className="text-left">현실과 유사한 체험을  경험하게 구현된 가상의 공간</td>
        </tr>
        <tr>

          <td style={{fontWeight:"800"}} className="text-left blue-text">증강현실 AR ( Augmented Reality )</td>
          <td className="text-left">현 정보에 가상 현실이 부가된 공간</td>
        </tr>
        <tr>

          <td style={{fontWeight:"800"}} className="text-left blue-text">혼합현실 MR ( Mixed Reality )</td>
          <td className="text-left">가상현실을 현실세계와 융합</td>
        </tr>
        <tr>

          <td style={{fontWeight:"800"}} className="text-left blue-text">확장현실 XR ( eXtended Reality ) </td>
          <td className="text-left">가상현실과 증강현실을 합친기술</td>

        </tr>
        

        <tr>

<td style={{fontWeight:"800"}} className="text-left blue-text">메  타  버  스 (Metaverse) </td>
<td className="text-left">3차원 가상 세계</td>

</tr>

<tr>
<td style={{fontWeight:"800"}} className="text-right green-text"></td>
<td className="text-left"> </td>
</tr>
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>

    <MDBContainer className="containTableMobile">


         <MDBCol className="my-2 font-weight-bold"> 가상현실 VR( Virtual Reality )</MDBCol>
         <p>현실과 유사한 체험을  경험하게 구현된 가상의 공간</p>
         <hr style={{borderColor:"gray",}}/>

         <MDBCol className="my-2 font-weight-bold"> 증강현실 AR ( Augmented Reality )</MDBCol>
         <p>현 정보에 가상 현실이 부가된 공간</p>
         <hr style={{borderColor:"gray"}}/>

         <MDBCol className="my-2 font-weight-bold">혼합현실 MR ( Mixed Reality )</MDBCol>
         <p>가상현실을 현실세계와 융합</p>
         <hr style={{borderColor:"gray"}}/>

         <MDBCol className="my-2 font-weight-bold"> 확장현실 XR ( eXtended Reality )</MDBCol>
         <p>가상현실과 증강현실을 합친기술</p>
         <hr style={{borderColor:"gray"}}/>




    </MDBContainer>


              </MDBCol>


      </MDBRow>
      </section>

  <section id="fieldSectionID">
    <MDBContainer>

    <MDBContainer>
        <MDBRow>
          <MDBCol className="colTitle" sm="2">
            개 발 내 용
          </MDBCol>
          <MDBCol sm="10">
          <hr className="FieldHrSize"/>
          </MDBCol>
        </MDBRow>

        <MDBRow className="btnTitle mt-3">

            <MDBCol xl="3" >
            <MDBBtn
            className="btn1 pt-2 pb-2"
            rounded size="xl"
            color="primary"
            href="#fireTitle">소 방 훈 련</MDBBtn>
            </MDBCol>
            <MDBCol xl="3">
            <MDBBtn
            className="btn2 pt-2 pb-2"
            rounded size="xl"
            color="primary"
            href="#vrTitle" >가상안전체험관</MDBBtn>
            </MDBCol>
            <MDBCol xl="3">
            <MDBBtn
            className="btn3 pt-2 pb-2"
            rounded size="xl"
            color="primary"
            href="#simulTitle">교육용 시뮬레이터</MDBBtn>
            </MDBCol>
            <MDBCol xl="3">
            <MDBBtn
            className="btn4 pt-2 pb-2"
            rounded size="xl"
            color="primary"
            href="#sportsTitle">스포츠 ICT</MDBBtn>
            </MDBCol>

        </MDBRow>

      </MDBContainer>

    <section id="fireTitle">
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol className="colTitle" sm="2">
            소 방 훈 련
          </MDBCol>
          <MDBCol sm="10">
          <hr className="FieldHrSize"/>
          </MDBCol>
        </MDBRow>
     </MDBContainer>


<MDBContainer>
      <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">
        <MDBCol xl="7">
          <MDBRow className="blue-text font-weight-bold my-5">
          소 방 훈 련 지 휘 시 스 템
          </MDBRow>
          <MDBRow className="wordBreack font-weight-bold text-left">
          소방 지휘훈련 시뮬레이터는 2005년도에 국내 최초로
가상현실 기반의 팀단위 훈련이 가능한 대규모화재 진압훈련용 시뮬레이터.
<p></p>

개발 후 문화재화재진합훈련을 위한 시뮬레이터 등 다양한 시뮬레이터 개발
          </MDBRow>

        </MDBCol>
        <MDBCol className="colImage" xl="5">
        <MDBCard className="my-5">
        <img className="rgba-white-slight" src="/img/fieldPage/vrtual simulation/fire_1.png"/>
        </MDBCard>

        </MDBCol>

      </MDBRow>

      <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">

        <MDBCol className="colImage" xl="5">
        <MDBCard className="my-5">
        <img className="rgba-white-slight" src="/img/fieldPage/vrtual simulation/VirtualSimulation1.png"/>
        </MDBCard>
        </MDBCol>
        <MDBCol xl="7">
          <MDBRow className="wordBreack blue-text font-weight-bold my-5" >
          화재재난현장 팀단위 전술 및 훈련 시뮬레이션 개발
          </MDBRow>
          <MDBRow className="wordBreack font-weight-bold text-left">
          2012 년 4월부터 2년간 3D 게임을 통해
소방관들의 표준작전 절차를 익힐 수 있도록
팀단위의 전술훈련용 시뮬레이션 게임 개발

          </MDBRow>

        </MDBCol>

      </MDBRow>
      </MDBContainer>
      </section>


      <section id="vrTitle">
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol sm="10">
          <hr className="FieldHrSize"/>
          </MDBCol>
          <MDBCol className="colTitle" sm="2">
     가상안전체험관
          </MDBCol>
        </MDBRow>
     </MDBContainer>


<MDBContainer>
      <MDBRow className="wordBreack rowText1 font-weight-bold pl-3 pr-3 mb-5 mt-5">
        1999년도에 노동부 산업안전관리공단의 가상안전체험관 계획에 자문교수로 참여하여 가상안전체험관의 규격 제시.
이후 포항제철, 현대중공업, 미포조선, 삼호중공업, GS건설 등 대규모 사업장에서 보다 수준 높은 안전교육을 위해 가상안전체험관 구축
      </MDBRow>

      <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">

        <MDBCol className="colImage" xl="12">
        <MDBCard className="my-5">
        <img className="rgba-white-slight" src="/img/fieldPage/vrtual simulation/vr_1.png"/>
        </MDBCard>
        </MDBCol>
      

      </MDBRow>
      </MDBContainer>
      </section>





      <section id="simulTitle">
      <MDBContainer className="mt-5">
        <MDBRow>
        <MDBCol className="colTitle" sm="3">
     교육용시물레이터
          </MDBCol>
          <MDBCol sm="9">
          <hr className="FieldHrSize"/>
          </MDBCol>
        </MDBRow>


     </MDBContainer>


<MDBContainer>
<MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">
        <MDBCol xl="6">
          <MDBRow className="wordBreack blue-text font-weight-bold my-5">
          고소작업대 교육용 시뮬레이터
          </MDBRow>
          <MDBRow className="wordBreack font-weight-bold text-left">
          현대중공업에서 필요한 고소작업대 훈련용 시뮬레이터 개발로
가상의 훈련환경에서 고소작업대를 조종하는 훈련장치를 개발함

          </MDBRow>

        </MDBCol>
        <MDBCol className="colImage" xl="6">
        <MDBCard className="my-5">
        <img className="rgba-white-slight" src="/img/fieldPage/vrtual simulation/simul.png"/>
        </MDBCard>

        </MDBCol>

      </MDBRow>
      </MDBContainer>
      </section>



      <section id="sportsTitle">
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol sm="10">
          <hr className="FieldHrSize"/>
          </MDBCol>
          <MDBCol className="colTitle text-right" sm="2">
       스포츠 ICT
          </MDBCol>
        </MDBRow>
     </MDBContainer>


<MDBContainer>
      <MDBRow className="wordBreack rowText1 font-weight-bold pl-3 pr-3 mb-5 mt-5 text-center">
        1999년도에 노동부 산업안전관리공단의 가상안전체험관 계획에 자문교수로 참여하여 가상안전체험관의 규격 제시.
이후 포항제철, 현대중공업, 미포조선, 삼호중공업, GS건설 등 대규모 사업장에서 보다 수준 높은 안전교육을 위해 가상안전체험관 구축
      </MDBRow>

      <MDBRow className="rowText1 pl-3 pr-3 mb-5 mt-5">

        <MDBCol className="colImage" xl="6">
        <MDBCard className="my-5">
        <img className="rgba-white-slight" src="/img/fieldPage/vrtual simulation/VirtualSimulation5.png"/>
        </MDBCard>
        <p className="text-center" style={{fontWeight:"500"}}>태권도 전자호구 개발 구성도</p>
        </MDBCol>

       <MDBCol className="colIct mt-5 pt-5 font-weight-bold " xl="6">
        <p>정보통신기술 (ICT :Information & Communications Technology)</p>
        <p>스포츠 기기가 융합된 스포츠콘텐츠.</p>
        <p>기존 전자호구 대비 경량화 및 센서기능이 향상된 저거형의 수련용 전자호 개발.</p>

        </MDBCol>
        {/* <MDBCol className="colImage" xl="6">
        <MDBCard className="my-5">
        <img className="rgba-white-slight" src="/img/fieldPage/vrtual simulation/Thesis.png"/>
        </MDBCard>
        <p className="text-center">
        <a
           href="http://www.jkais99.org/journal/Vol20No04/vol20no04p75.pdf"
           target="_blank"
           style={{color:'blue', fontWeight:"600"}}>논문보기</a>
           </p>
        </MDBCol> */}

      </MDBRow>
      </MDBContainer>
      </section>



      </MDBContainer>
      </section>








    <section id="fieldSection5Id">


<MDBContainer className="mt-5">
<MDBRow className='text-center'>
{/* <MDBCol className="colSectionImg5">
      <img src="/img/network/KFE.png"/>
    </MDBCol>
    <MDBCol className="colSectionImg5">
      <img src="/img/network/Smu.png"/>
    </MDBCol>
    <MDBCol  className="colSectionImg5">
      <img src="/img/network/Sft.png"/>
    </MDBCol>
    <MDBCol  className="colSectionImg5">
      <img src="/img/network/Vrm.png"/>
    </MDBCol>
    <MDBCol  className="colSectionImg5">
      <img src="/img/network/Pacom.png"/>
    </MDBCol> */}
</MDBRow>
</MDBContainer>
</section>
<MDBRow className="mt-5" center>
     <Fragment>
      <MDBBtn color="primary" outline rounded href="/pages/ContactFd/contact">
        CONTACT US!
      </MDBBtn>
      </Fragment>
     </MDBRow>
    </>

    // <section className="text-center my-5">


    //   <MDBRow>

    //     <MDBCol sm="4" className="mb-lg-0 mb-4">
    //       <MDBCard collection className="z-depth-1-half">
    //         <div className="view zoom">
    //           <img
    //             src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/Field/VR_AR.png"
    //             className="img-fluid"
    //             alt=""
    //           />
    //           <div className="stripe dark">

    //               <MDBNavLink to="/pages_1/field">
    //               <p>
    //                 VR/AR <MDBIcon icon="angle-right" />
    //               </p>

    //               </MDBNavLink>

    //           </div>
    //         </div>
    //       </MDBCard>
    //     </MDBCol>
    //     <MDBCol sm="4" className="mb-lg-0 mb-4">
    //       <MDBCard collection className="z-depth-1-half">
    //         <div className="view zoom">
    //           <img
    //             src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/Field/ART+Technology.png"
    //             className="img-fluid"
    //             alt=""
    //           />
    //           <div className="stripe dark">
    //           <MDBNavLink to="/pages_1/Rsa">
    //               <p>
    //               ART Technology <MDBIcon icon="angle-right" />
    //               </p>

    //               </MDBNavLink>

    //           </div>
    //         </div>
    //       </MDBCard>
    //     </MDBCol>
    //     <MDBCol sm="4" className="mb-lg-0 mb-4">
    //       <MDBCard collection className="z-depth-1-half">
    //         <div className="view zoom">
    //           <img
    //             src="https://tritech.s3.ap-northeast-2.amazonaws.com/homepage_img/Field/Clean+Energy.png"
    //             className="img-fluid"
    //             alt=""
    //           />
    //           <div className="stripe dark">


    //             <MDBNavLink to="/pages_1/cleanEnergy">
    //               <p>
    //               Clean Energy <MDBIcon icon="angle-right" />
    //               </p>

    //               </MDBNavLink>
    //           </div>
    //         </div>
    //       </MDBCard>
    //     </MDBCol>

    //   </MDBRow>
    // </section>
  );
}

export default EcommercePage_Field;