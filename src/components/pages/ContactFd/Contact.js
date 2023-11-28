import React from "react";
// import { BrowserRouter as Router, withRouter } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBCard,
  // MDBCardBody,
  // MDBAvatar,
  // MDBMask,
  MDBIcon,
  // MDBView,
  MDBBtn,
  // MDBInput,
  // MDBFooter,
  // MDBDropdown,
  // MDBDropdownToggle,
  // MDBDropdownMenu,
} from "mdbreact";
import "./Contact.css";
import Copyrights from "../../Footer";
import FormsPage2 from "../../../common/form/FormsPage_2";
import TopImgCompanyWeb from "../TopImgFd/TopImgCompanyWeb";
import TopImgCompanyMobile from "../TopImgFd/TopImgCompanyMobile";
import "../../../common/form/contentFont.css";
import "../../../common/form/contentDesign.css";
import { useTranslation } from "react-i18next";

const usersJson = {
  description: "Login and passwords of users",
  users: {
    testUser: {
      building: "test",
      type: "text",
    },
  },
};

class Contact extends React.Component {
  state = {
    userName: "",
    building: "",
    usersJson: {},
  };
  componentDidMount() {
    this.setState({ usersJson });
  }

  getLoginData = (value, type) =>
    this.setState({
      [type]: value,
    });

  onFormSubmit = (e) => {
    e.preventDefault();
    const { usersJson, userName, building } = this.state;
    const filterUserName = Object.keys(usersJson.users).filter(
      (e) => e === userName
    );
    if (
      filterUserName.length > 0 &&
      usersJson.users[userName].building === building
    ) {
      this.props.history.push("test");
      window.localStorage.setItem(
        "user",
        JSON.stringify(usersJson.users[userName])
      );
    } else {
      alert("Input is invalid");
    }
  };
  render() {
    // const LIGHT_GRAY_COLOR = "#969696";

    return (
      <div id="Contact">
        <div className="contactWeb">
          <TopImgCompanyWeb />
        </div>
        <div className="contactMobile">
          <TopImgCompanyMobile />
        </div>
        <PageTitleSection />
        <PageContentSection />
        <Copyrights />
      </div>
    );
  }
}
const PageContentSection = () => {
  const { t } = useTranslation();
  return (
    <MDBContainer className="Contact_body">
      <section className="mb-5">
        <MDBContainer style={{ marginBottom: "2em" }}></MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="5" className="lg-0 mb-4">
              <FormsPage2 />
            </MDBCol>
            <MDBCol lg="7">
              <div
                id="calendar-container"
                className="rounded z-depth-1-half map-container"
                style={{ height: "400px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101187.104721511!2d126.84781075369052!3d37.576332981960384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbd18661bdef7%3A0xcf955da33dc8fdff!2zKOyjvCntirjrnbzsnbTthY0!5e0!3m2!1sko!2skr!4v1662354543947!5m2!1sko!2skr"
                  title="office map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                />
              </div>
              <br />
              <MDBRow className="text-center">
                <MDBCol md="4">
                  <MDBBtn
                    tag="a"
                    floating
                    color="blue"
                    className="accent-1 mb-3"
                  >
                    <MDBIcon icon="map-marker-alt" />
                  </MDBBtn>
                  <p style={{ wordBreak: "keep-all" }}>{t("C03")}</p>
                  {/* <p className="mb-md-0">미래백년관 R311</p> */}
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn
                    tag="a"
                    floating
                    color="blue"
                    className="accent-1 mb-3"
                  >
                    <MDBIcon icon="phone" />
                  </MDBBtn>
                  <div style={{ lineHeight: "1.2rem" }}>
                    <p>TEL. 02-6958-7599</p>
                    <p>FAX. 070-8670-6599</p>
                    <p>Mon-Fri, 9:00-18:00</p>
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn
                    tag="a"
                    floating
                    color="blue"
                    className="accent-1 mb-3"
                  >
                    <MDBIcon icon="envelope" />
                  </MDBBtn>
                  <p>tritech@tritech.co.kr</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBContainer>
  );
};

const PageTitleSection = () => {
  const { t } = useTranslation();
  return (
    <section id="pageTitleSection">
      <MDBContainer>
        <MDBContainer className="mainContent">
          <MDBRow>
            <MDBCol>
              <title1 style={{ color: "black" }}>{t("C01")}</title1>
              <br />
              <br />
              {/* </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBContainer className="mainContent">
      <MDBRow>
        <MDBCol className="desc"> */}
              <p style={{ color: "#565656" }}>{t("C02")}</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </section>
  );
};

export default Contact;
