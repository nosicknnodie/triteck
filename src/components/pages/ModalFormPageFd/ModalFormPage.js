import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  ModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBInput,
  MDBIcon,
  MDBCol,
  MDBTabContent,
  MDBTabPane,
  MDBNav,
  MDBNavItem,
  MDBBox,
} from "mdbreact";
import "./ModalFormPage.css";

import SectionContainer from "../component/sectionContainer";
import { store } from "../../../common/Store";
import { NavLink } from "react-router-dom";

class ModalFormPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    activeItem: "1",
  };

  toggle = (nr) => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  toggleTab = (tab) => () => {
    const { activeItem } = this.state;
    if (activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    const { activeItem, modal1 } = this.state;

    return (
      <MDBContainer className="containTopMt">
        <SectionContainer header="Cascading modal register / login" flexCenter>
          <MDBBtn rounded onClick={this.toggle(1)}>
            Launch Modal Login/Register
          </MDBBtn>
          <MDBModal
            className="form-cascading"
            isOpen={modal1}
            toggle={this.toggle(1)}
          >
            <MDBNav
              tabs
              className="md-tabs nav-justified tabs-2 light-blue darken-3"
              style={{ margin: "-1.5rem 1rem 0 1rem" }}
            >
              <MDBNavItem>
                <NavLink
                  className={activeItem === 1 ? "active" : ""}
                  to="#"
                  onClick={this.toggleTab("1")}
                >
                  <MDBIcon icon="user" className="mr-1" />
                  Login
                </NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <NavLink
                  className={activeItem === 2 ? "active" : ""}
                  to="#"
                  onClick={this.toggleTab("2")}
                >
                  <MDBIcon icon="user-plus" className="mr-1" />
                  Register
                </NavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={activeItem}>
              <MDBTabPane tabId="1">
                <MDBModalBody className="mx-3">
                  <form className=" mx-3 grey-text">
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center mx-3">
                  <MDBBtn
                    className="mb-4"
                    color="info"
                    onClick={this.toggle(3)}
                  >
                    LOG IN <MDBIcon icon="sign-in-alt" className="ml-1" />
                  </MDBBtn>
                  <MDBRow
                    className="w-100 justify-content-start pt-4"
                    style={{ borderTop: "1px solid #e9ecef" }}
                  >
                    <div id="options">
                      <p className="font-small grey-text">
                        N
                        <span
                          className="blue-text ml-1"
                          onClick={this.toggleTab("2")}
                        >
                          Sign Up
                        </span>
                      </p>
                      <p className="font-small grey-text">
                        Forgot <span className="blue-text ml-1">password?</span>
                      </p>
                    </div>
                    <MDBBtn outline color="info" onClick={this.toggle(1)}>
                      CLOSE
                    </MDBBtn>
                  </MDBRow>
                </MDBModalFooter>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <MDBModalBody className="mx-3">
                  <form className=" mx-3 grey-text">
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Repeat password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center mx-3">
                  <MDBBtn
                    className="mb-4"
                    color="info"
                    onClick={this.toggle(3)}
                  >
                    SIGN UP
                    <MDBIcon icon="sign-in-alt" className="ml-1" />
                  </MDBBtn>
                  <MDBRow
                    className="w-100 justify-content-start pt-4"
                    style={{ borderTop: "1px solid #e9ecef" }}
                  >
                    <div id="options">
                      <p className="font-small grey-text">
                        Already have an account?
                        <span
                          className="blue-text ml-1"
                          onClick={this.toggleTab("1")}
                        >
                          Log in
                        </span>
                      </p>
                    </div>
                    <MDBBtn outline color="info" onClick={this.toggle(1)}>
                      CLOSE
                    </MDBBtn>
                  </MDBRow>
                </MDBModalFooter>
              </MDBTabPane>
            </MDBTabContent>
          </MDBModal>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default ModalFormPage;
