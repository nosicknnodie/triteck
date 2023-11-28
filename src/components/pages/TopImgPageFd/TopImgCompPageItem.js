import {
  MDBAnimation,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import "./TopImgCompPageItem.css";
const TopImgCompPageItem = ({ ticp }) => {
  // const globalState = useContext(store);
  // const { dispatch } = globalState;

  // eslint-disable-next-line no-unused-vars
  const { kor, eng, file, link, alt } = ticp;

  let path = "/img/logo/";
  let src = path + file;

  //   const onSelectCommunityPublic = (name) => {
  //     dispatch({
  //         type: "CHANGE_LEVEL",
  //         level: {
  //             step: 1,
  //         }
  //     })

  // }
  return (
    <section id="TopImgCompPageItem">
      <MDBView src={src}>
        <MDBRow>
          <MDBCol>
            <MDBMask className="d-flex justify-content-center align-items-center gradient" />
            <MDBContainer>
              <MDBRow>
                <MDBCol className="rowIconRot mt-5 pt-5" md="12">
                  <MDBAnimation
                    delay=".3s"
                    className="topAnimation white-text  animate__animated animate__fadeInRightBig"
                  >
                    <h1 className="h1-responsive font-weight-bold">TriTech</h1>
                    <MDBBtn
                      className="btnWeb"
                      color="white"
                      outline
                      rounded
                      href={link}
                    >
                      {kor}
                    </MDBBtn>
                    <MDBBtn
                      className="btnMobile"
                      color="white"
                      rounded
                      href={link}
                    >
                      {kor}
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBView>
    </section>
  );
};

export default TopImgCompPageItem;
