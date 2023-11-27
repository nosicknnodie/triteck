import React, { useState, useReducer, useContext } from 'react'
import { MDBCol, MDBAnimation, MDBView, MDBMask, MDBRow, MDBContainer, MDBIcon, MDBBtn, MDBCardGroup} from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdbreact';
import { store } from '../../../../common/Store';
import './FeaturesPagePromotionItem.css';
import AdsWidget1 from './AdsWidget1';

const FeaturesPagePromotionItem = ({commu}) => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const { eng, password } = commu;
    //var path  = "images/champions/model/";
 

    const onSelectCommunityPublic = (name) => {
      dispatch({
          type: "CHANGE_LEVEL",
          level: {
              step: 1,
          }
      })
      dispatch({
          type: "SELECT_CARDICT",
          name: name
      })

  }

  const onSelectCommunity = (name) => {
    dispatch({
        type: "CHANGE_LEVEL",
        level: {
            step: 2,
        }
    })
    dispatch({
        type: "SELECT_CARDICT",
        name: name
    })

}


    return (
        <>
 <MDBContainer header='Horizontal form'>

        {/* <MDBCardGroup deck className='mt-3'>
          <MDBCard >
          <MDBCardImage zoom className='img-fluid' src={src} top/>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>{kor}</MDBCardTitle>
              <MDBCardText>
              {content}
              </MDBCardText>
              <MDBBtn color='light-blue' size='md' href="/pages/AboutIndexFd/subPageFd/dlpp">
                더보기
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        
        </MDBCardGroup>
    */}



     <MDBRow lg="12" className="rowFrom">

        
              <label htmlFor='inputEmail3' className='col-sm-2 col-form-label mb-2 '>
              {eng}
              </label>
              <div className='col-sm-10'>
                <input type='email' className='form-control' id='inputEmail3' placeholder='Email' />
              </div>
   
                         
              <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
               { password }
              </label>
              <div className='col-sm-10'>
                <input type='password' className='form-control' id='inputPassword3' placeholder='사원번호' />
              </div>
 
              <label htmlFor='inputPassword3' className='col-sm-9 col-form-label'>
               
              </label>
              <div className='col-sm-3'>
                {/* <button type='submit' className='btn btn-primary btn-sm '  onClick={() => onSelectCommunityPublic(eng)}> */}
                <button type='submit' className='btn btn-primary btn-sm '>
                  직원 로그인
                </button>
              </div>
  
        
          </MDBRow>
        </MDBContainer>


</>

);
};

export default FeaturesPagePromotionItem;