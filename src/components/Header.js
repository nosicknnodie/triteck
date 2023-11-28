/* eslint-disable jsx-a11y/alt-text */
import { useCallback, useState } from "react";

import { NavLink } from "react-router-dom";

import {
  MDBIcon,
  MDBNav,
  MDBNavItem,
  MDBNavbar,
  MDBNavbarNav,
  MDBSideNav,
  MDBSideNavCat,
  MDBSideNavItem,
  MDBSideNavNav,
} from "mdbreact";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [toggleStateA, setToggleStateA] = useState(false);
  const { t } = useTranslation(["menu"]);
  // {
  //   "HOME": "Home",
  //   "INTRODUCTION": "Introduction",
  //   "RESEARCH_FIELD": "Research field",
  //   "RESEARCH_RESULTS": "Research results",
  //   "CUSTOMER_INQUIRY": "Customer Inquiry",
  //   "BLOG": "Blog"
  // }

  const handleToggleClickA = useCallback(() => {
    setToggleStateA((f) => !f);
  }, []);
  const specialCaseNavbarStyles = {
    WebkitBoxOrient: "horizontal",
    flexDirection: "row",
  };
  return (
    <>
      <div className="mdb-skin">
        {/* --------------------------------------------top nav ------------------------------------- */}

        <MDBNavbar
          id="top-menu"
          className="pt-3"
          //className="pt-3 mt-5"
          double
          fixed="top"
          scrolling
        >
          <MDBNavbarNav left>
            <MDBNavItem className="menuBtn">
              <div
                onClick={handleToggleClickA}
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
                  <li>{t("HOME")}</li>
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
                  className="first_rid Ripple-parent"
                >
                  <li>
                    {t("INTRODUCTION")}
                    <MDBIcon icon="angle-down" className="ml-1" />
                  </li>
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
                <NavLink
                  to="/pages/FieldPageFd/FieldIndex"
                  className="Ripple-parent"
                >
                  {t("RESEARCH_FIELD")}
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
                <NavLink
                  to="/pages/AboutIndexFd/aboutIndex"
                  className="Ripple-parent"
                >
                  {t("RESEARCH_RESULTS")}
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
                <NavLink
                  to="/pages/ContactFd/contact"
                  className="Ripple-parent"
                >
                  {t("CUSTOMER_INQUIRY")}
                </NavLink>
              </MDBNavItem>

              <MDBNavItem id="dropdown-top-menu" className="dropdown">
                <NavLink
                  to="/pages/PromotionFd/subPageFd/NewsArticle"
                  className="Ripple-parent"
                >
                  {t("BLOG")}
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
};

// class Header extends React.Component {
//   rSNL(to, text) {
//     return (
//       <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
//         {text}
//       </MDBSideNavLink>
//     );
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       toggleStateA: false,
//     };
//     console.log(this.state.toggleStateA);
//   }

//   handleToggleClickA = () => {
//     this.setState({
//       toggleStateA: !this.state.toggleStateA,
//     });
//   };

//   render() {
//     // const mainStyle = {
//     //   paddingTop: "5rem",
//     // };

//     return <></>;
//   }
// }

export default Header;
