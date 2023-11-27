import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
} from "mdbreact";
import Pills from "./Pills";
import Pills_2 from "./Pills_2";
import "./TabsDefault.css";
import Pills_3 from "./Pills_3";
import { NavLink } from "react-router-dom";

class TabsDefault extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <MDBContainer id="tabs-components">
        <MDBNav className="tabs-tab nav-tabs mt-5">
          <MDBNavItem>
            <NavLink
              link
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
              핵융합
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              link
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              원전해체
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              link
              to="#"
              active={this.state.activeItem === "3"}
              onClick={this.toggle("3")}
              role="tab"
            >
              클린에너지
            </NavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem}>
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              <Pills />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              <Pills_2 />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              <Pills_3 />
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabsDefault;
