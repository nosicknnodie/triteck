import React from "react";
import {
  MDBCardText,
  // MDBCardGroup,
  // MDBRow,
  MDBCol,
  // MDBIcon,
  // MDBBtn,
  MDBView,
  MDBMask,
  // MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardVideo,
} from "mdbreact";
import SectionContainer from "../../components/mdbCommon/sectionContainer";

export function addImgInTwoCol(imgRootPath, imgExtension, startedImgNum) {
  let result = [];
  const maxCol = 2;

  for (let i = 0; i < maxCol; i++) {
    let imgName = `${imgRootPath}${startedImgNum + i}.${imgExtension}`;
    result.push(
      <MDBCol lg="6">
        <MDBView className="rounded  z-depth-2 mb-lg-0 mb-0" hover waves>
          <img className="img-fluid" src={imgName} alt="" />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
      </MDBCol>,
    );
  }

  return result;
}

export function addVideoInCol(videoInfo) {
  let result = [];
  const maxCol = videoInfo.length;

  for (let i = 0; i < maxCol; i++) {
    const path = `${videoInfo[i].videoPath ?? null}`;
    const ratio = `${videoInfo[i].videoRatio ?? null}`;
    const title = `${videoInfo[i].videoTitle ?? null}`;
    const desc = videoInfo[i].videoDesc ?? null;
    const htmlDesc = [];

    if (Array.isArray(desc)) {
      for (let j = 0; j < desc.length; j++) {
        htmlDesc.push(<li>{desc[j]}</li>);
      }
    } else {
      htmlDesc = desc;
    }

    if (!desc) {
      result.push(
        <MDBCol lg="6">
          <SectionContainer header="">
            <MDBCard>
              <MDBCardVideo src={path} ratio={ratio} />
              <MDBCardBody>
                <MDBCardTitle tag="h5">{title}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>,
      );
    } else {
      result.push(
        <MDBCol lg="6">
          <SectionContainer header="">
            <MDBCard>
              <MDBCardVideo src={path} ratio={ratio} />
              <MDBCardBody>
                <MDBCardTitle tag="h5">{title}</MDBCardTitle>
                <MDBCardText>
                  <ul className="d-inline-block text-left">{htmlDesc}</ul>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>,
      );
    }
  }
  return result;
}

export function addImgView(imgPath) {
  if (!imgPath) {
    return null;
  }

  let result = (
    <MDBView hover waves>
      <img className="img-fluid" src={imgPath} alt="" />
      <a href="#!">
        <MDBMask overlay="white-slight" />
      </a>
    </MDBView>
  );
  return result;
}

export function addImgRoundedView(imgPath) {
  if (!imgPath) {
    return null;
  }
  let result = (
    <MDBView className="rounded  z-depth-2 mb-lg-0 mb-0" hover waves>
      <img className="img-fluid" src={imgPath} alt="" />
      <a href="#!">
        <MDBMask overlay="white-slight" />
      </a>
    </MDBView>
  );
  return result;
}
