import React from "react";

import { NavLink, Route, Routes } from "react-router-dom";

import {
  MDBCollapse,
  MDBNavbarToggler,
  Dropdown,
  MDBBreadcrumbItem,
  MDBBreadcrumb,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBSideNavItem,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBLink,
  MDBCardImage,
  MDBNavbarBrand,
  MDBSideNavLink,
  MDBNav,
} from "mdbreact";
import "./Header.css";

class Header extends React.Component {
  rSNL(to, text) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        {text}
      </MDBSideNavLink>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
    };
  }

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA,
    });
  };

  render() {
    const mainStyle = {
      paddingTop: "5rem",
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row",
    };

    return (
      <>
        <div className="mdb-skin">
          <section id="headerId">
            <MDBSideNav
              // id="side-nav-logo"
              logo="/img/logo/tritech-logo-light-xs.png"
              href="/"
              triggerOpening={this.state.toggleStateA}
              // bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
              mask="strong"
              hidden
            >
              {/* <MDBSideNavNav>
                <MDBSideNavCat
                  name="언어"
                  id="lang"
                  // icon="chevron-right"
                >
                  <MDBSideNavLink to="/">
                    <MDBSideNavItem>KOR</MDBSideNavItem>
                  </MDBSideNavLink>
                  <MDBSideNavLink to="/">
                    <MDBSideNavItem>ENG</MDBSideNavItem>
                  </MDBSideNavLink>
                </MDBSideNavCat>
              </MDBSideNavNav> */}

              {/* <MDBInput
                type="text"
                hint="Search"
                style={{
                  color: "#fff",
                  padding: "0 10px 8px 30px",
                  boxSizing: "border-box",
                }}
              /> */}
              <MDBSideNavNav id="sides-nav">
                <MDBSideNavCat
                  href="/"
                  name="홈"
                  id="submit-home-cat"
                  // icon="chevron-right"
                ></MDBSideNavCat>

                <MDBSideNavCat
                  name="회사소개"
                  id="submit-blog-cat"
                  icon="chevron-right"
                >
                  <MDBSideNavItem href="/pages/CeoFd/ceo">
                    회사소개
                  </MDBSideNavItem>
                  <MDBSideNavItem href="/pages/CeoFd/ci">CI</MDBSideNavItem>
                </MDBSideNavCat>

                <MDBSideNavCat
                  name="연구분야"
                  id="about-cat"
                  icon="chevron-right"
                >
                  <MDBSideNavItem href="/pages/FieldPageFd/subPageFd/Field">
                    AR/VR
                  </MDBSideNavItem>

                  <MDBSideNavItem href="/pages/FieldPageFd/subPageFd/Rsa">
                    ART Technology
                  </MDBSideNavItem>

                  <MDBSideNavItem href="/pages/FieldPageFd/subPageFd/CleanEnergy">
                    Clean Energy
                  </MDBSideNavItem>
                </MDBSideNavCat>

                <MDBSideNavCat
                  // iconRegular
                  name="연구실적"
                  id="instruction-cat"
                  icon="chevron-right"
                >
                  <MDBSideNavItem href="/pages/AboutIndexFd/subPageFd/dlpp">
                    원전해체
                  </MDBSideNavItem>

                  <MDBSideNavItem href="/pages/AboutIndexFd/subPageFd/kstar">
                    핵융합
                  </MDBSideNavItem>

                  <MDBSideNavItem href="/pages/AboutIndexFd/subPageFd/Voucher">
                    바우처사업
                  </MDBSideNavItem>

                  <MDBSideNavItem href="/pages/AboutIndexFd/subPageFd/clean">
                    클린에너지
                  </MDBSideNavItem>
                </MDBSideNavCat>

                <MDBSideNavCat
                  name="고객문의"
                  id="Contact-infor"
                  href="/pages/ContactFd/contact"
                  // icon="chevron-right"
                ></MDBSideNavCat>

                <MDBSideNavCat
                  name="블로그"
                  id="Corporate-promotion"
                  icon="chevron-right"
                >
                  <MDBSideNavItem href="/pages/PromotionFd/subPageFd/NewsArticle">
                    관련기사
                  </MDBSideNavItem>
                  <MDBSideNavItem href="/pages/PromotionFd/subPageFd/ThesisPatent">
                    특허/논문
                  </MDBSideNavItem>
                </MDBSideNavCat>
              </MDBSideNavNav>
            </MDBSideNav>
          </section>

          {/* --------------------------------------------top nav ------------------------------------- */}

          <MDBNavbar
            id="top-menu"
            className="pt-3"
            //className="pt-3 mt-5"
            double
            // expand="md"
            expand="md"
            fixed="top"
            scrolling
          >
            <MDBNavbarNav left>
              <MDBNavItem className="menuBtn">
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "30px",
                    marginRight: "0.5em",
                    verticalAlign: "middle",
                    backgroundColor: "transparent",
                  }}
                >
                  <MDBIcon icon="bars" color="white" size="1x" />
                </div>
              </MDBNavItem>

              <MDBNavItem className="navItemLogo">
                <a href="/">
                  <img src="/img/logo/tritech-logo-xs.png" />
                </a>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNav>
              <MDBNavbarNav
                id="top-menu-id"
                className="top-menu-1 mr-5 pr-5"
                style={specialCaseNavbarStyles}
                center
              >
                <MDBNavItem id="dropdown-top-menu" className="dropdown">
                  <NavLink to="/" className="first_rid Ripple-parent">
                    <li>홈</li>
                  </NavLink>
                </MDBNavItem>

                {/* <MDBNavItem id="dropdown-top-menu" className="dropdown">
                  <NavLink
                    to="/pages/CeoFd/ceo"
                    className="first_rid Ripple-parent"
                  >
                    <li>회사소개</li>
                  </NavLink>
                </MDBNavItem> */}
                <MDBNavItem id="dropdown-top-menu" className="dropdown">
                  <NavLink
                    to="/pages/CeoFd/ceo"
                    // className="first_rid Ripple-parent"
                  >
                    <div>
                      회사소개
                      <MDBIcon icon="angle-down" className="ml-1" />
                    </div>
                  </NavLink>
                  <MDBNavItem
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink className="dropdown-item" to="/pages/CeoFd/ci">
                      CI
                    </NavLink>
                  </MDBNavItem>
                </MDBNavItem>

                <MDBNavItem id="dropdown-top-menu" className="dropdown">
                  <NavLink to="/pages/FieldPageFd/FieldIndex">
                    연구분야
                    <MDBIcon icon="angle-down" className="ml-1" />
                  </NavLink>
                  <MDBNavItem
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/pages/FieldPageFd/subPageFd/Field"
                    >
                      AR/VR
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/pages/FieldPageFd/subPageFd/Rsa"
                    >
                      ART Technology
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/pages/FieldPageFd/subPageFd/CleanEnergy"
                    >
                      Clean Energy
                    </NavLink>
                  </MDBNavItem>
                </MDBNavItem>

                <MDBNavItem id="dropdown-top-menu" className="dropdown">
                  <NavLink to="/pages/AboutIndexFd/aboutIndex">
                    연구실적
                    <MDBIcon icon="angle-down" className="ml-1" />
                  </NavLink>
                  <MDBNavItem
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/pages/AboutIndexFd/subPageFd/dlpp"
                    >
                      원전해체
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/pages/AboutIndexFd/subPageFd/kstar"
                    >
                      핵융합
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/pages/AboutIndexFd/subPageFd/Voucher"
                    >
                      바우처사업
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/pages/AboutIndexFd/subPageFd/clean"
                    >
                      클린에너지
                    </NavLink>
                  </MDBNavItem>
                </MDBNavItem>

                <MDBNavItem id="dropdown-top-menu" className="dropdown">
                  <NavLink to="/pages/ContactFd/contact">고객문의</NavLink>
                </MDBNavItem>

                <MDBNavItem id="dropdown-top-menu" className="dropdown">
                  <NavLink to="/pages/PromotionFd/subPageFd/NewsArticle">
                    블로그
                    <MDBIcon icon="angle-down" className="ml-1" />
                  </NavLink>
                  <MDBNavItem
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/pages/PromotionFd/subPageFd/NewsArticle"
                    >
                      관련기사
                    </NavLink>
                    {/* <NavLink
                      className="dropdown-item"
                      to="/pages/PromotionFd/subPageFd/VideoNews"
                    >
                      동영상
                    </NavLink> */}
                    <NavLink
                      className="dropdown-item"
                      to="/pages/PromotionFd/subPageFd/ThesisPatent"
                    >
                      논문 / 특허{" "}
                    </NavLink>
                  </MDBNavItem>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBNav>

            <MDBNavbarNav right>
              <div className="barRightSpace"></div>
            </MDBNavbarNav>
          </MDBNavbar>
        </div>
      </>
    );
  }
}

export default Header;
