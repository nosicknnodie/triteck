/* eslint-disable jsx-a11y/alt-text */
import { useCallback } from "react";

import { NavLink } from "react-router-dom";

import { MDBIcon, MDBNav, MDBNavItem, MDBNavbar, MDBNavbarNav } from "mdbreact";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  // const [, setToggleStateA] = useState(false);
  const { t } = useTranslation(["menu"]);

  // const handleToggleClickA = useCallback(() => {
  //   setToggleStateA((f) => !f);
  // }, []);

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
            {/* <MDBNavItem className="menuBtn">
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
            </MDBNavItem> */}

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
            >
              <MDBNavItem tag="ul" id="dropdown-top-menu" className="dropdown">
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
              <MDBNavItem tag="ul" id="dropdown-top-menu" className="dropdown">
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

              <MDBNavItem tag="ul" id="dropdown-top-menu" className="dropdown">
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

              <MDBNavItem tag="ul" id="dropdown-top-menu" className="dropdown">
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
                    // style={{ textOverflow: "ellipsis", display: "block" }}
                    to="/pages/AboutIndexFd/subPageFd/dlpp"
                  >
                    <div
                      style={{
                        width: "100%",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {t("NUCLEAR_POWER_PLANT_DECOMMISSIONING")}
                    </div>
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/pages/AboutIndexFd/subPageFd/kstar"
                  >
                    {t("NUCLEAR_FUSION")}
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/pages/AboutIndexFd/subPageFd/Voucher"
                  >
                    {t("VOUCHER_BUSINESS")}
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/pages/AboutIndexFd/subPageFd/clean"
                  >
                    {t("CLEAN_ENERGY")}
                  </NavLink>
                  <NavLink
                      className="dropdown-item"
                      to="/pages/AboutIndexFd/subPageFd/fire"
                    >
                      소방
                    </NavLink>
                </MDBNavItem>
              </MDBNavItem>

              <MDBNavItem tag="ul" id="dropdown-top-menu" className="dropdown">
                <NavLink
                  to="/pages/ContactFd/contact"
                  className="Ripple-parent"
                >
                  {t("CUSTOMER_INQUIRY")}
                </NavLink>
              </MDBNavItem>

              <MDBNavItem tag="ul" id="dropdown-top-menu" className="dropdown">
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
                    {t("RELATED_ARTICLES")}
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
                    {t("THESES_PATENTS")}
                  </NavLink>
                </MDBNavItem>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNav>

          <MDBNavbarNav right>
            <div className="barRightSpace">
              <LanguageToggleButton />
            </div>
          </MDBNavbarNav>
        </MDBNavbar>
      </div>
    </>
  );
};

const LanguageToggleButton = () => {
  const { i18n } = useTranslation(["menu"]);
  const flag = i18n.language === "ko-KR";
  const handleChangeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === "ko-KR" ? "en-US" : "ko-KR");
  }, [i18n]);
  return (
    <>
      <div className="toggle-div" onClick={handleChangeLanguage}>
        <div className={`toggle-container ${!flag && "toggle-checked"}`}></div>
        <div className={`toggle-circle ${!flag && "toggle-checked"}`}>
          {flag ? "KR" : "EN"}
        </div>
      </div>
    </>
  );
};

export default Header;
