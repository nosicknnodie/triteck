/* eslint-disable jsx-a11y/alt-text */
import { useCallback, useState } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { MDBIcon, MDBNav, MDBNavItem, MDBNavbar, MDBNavbarNav } from "mdbreact";
import { useTranslation } from "react-i18next";
import "./Header.css";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const Header = () => {
  // const [, setToggleStateA] = useState(false);
  const { t } = useTranslation(["menu"]);
  const [toggled, setToggled] = useState(false);
  const handleToggleClickA = useCallback(() => {
    setToggled((f) => !f);
  }, []);

  const specialCaseNavbarStyles = {
    WebkitBoxOrient: "horizontal",
    flexDirection: "row",
  };
  return (
    <>
      <div className="mdb-skin">
        <SideBarComponent toggled={toggled} setToggled={setToggled} />
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
              className="top-menu-1"
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
                    {t("FIRE_FIGHTING")}
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
            <li className="barRightSpace">
              <LanguageToggleButton />
            </li>
          </MDBNavbarNav>
        </MDBNavbar>
      </div>
    </>
  );
};

const SideBarComponent = ({ toggled, setToggled }) => {
  const { t } = useTranslation(["menu"]);
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoToUrl = useCallback(
    (url) => {
      navigate(url);
      setToggled(false);
    },
    [navigate, setToggled]
  );

  return (
    <>
      <div
        style={{
          zIndex: 1050,
          display: "flex",
          position: "absolute",

          left: 0,
          top: 0,
        }}
      >
        <Sidebar
          backgroundColor="#fff"
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="all"
        >
          <div
            style={{
              marginTop: "40px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              onClick={() => handleGoToUrl("/")}
              style={{ objectFit: "cover" }}
              alt="logo"
              src="/img/logo/tritech-logo-light-xs.png"
            ></img>
          </div>
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    backgroundColor: active ? "#ddd" : undefined,
                  };
              },
            }}
          >
            <MenuItem
              active={location.pathname === "/"}
              onClick={() => handleGoToUrl("/")}
            >
              {t("HOME")}
            </MenuItem>
            <SubMenu
              active={location.pathname === "/pages/CeoFd/ceo"}
              label={t("INTRODUCTION")}
            >
              <MenuItem
                active={location.pathname === "/pages/CeoFd/ceo"}
                onClick={() => handleGoToUrl("/pages/CeoFd/ceo")}
              >
                {t("INTRODUCTION")}
              </MenuItem>
              <MenuItem
                active={location.pathname === ""}
                onClick={() => handleGoToUrl("/pages/CeoFd/ci")}
              >
                CI
              </MenuItem>
            </SubMenu>
            <SubMenu
              active={location.pathname.includes("/pages/FieldPageFd")}
              label={t("RESEARCH_FIELD")}
            >
              <MenuItem
                active={location.pathname === "/pages/FieldPageFd/FieldIndex"}
                onClick={() => handleGoToUrl("/pages/FieldPageFd/FieldIndex")}
              >
                {t("RESEARCH_FIELD")}
              </MenuItem>
              <MenuItem
                active={
                  location.pathname === "/pages/FieldPageFd/subPageFd/Field"
                }
                onClick={() =>
                  handleGoToUrl("/pages/FieldPageFd/subPageFd/Field")
                }
              >
                AR / VR
              </MenuItem>
              <MenuItem
                active={
                  location.pathname === "/pages/FieldPageFd/subPageFd/Rsa"
                }
                onClick={() =>
                  handleGoToUrl("/pages/FieldPageFd/subPageFd/Rsa")
                }
              >
                ART Technology
              </MenuItem>
              <MenuItem
                active={
                  location.pathname ===
                  "/pages/FieldPageFd/subPageFd/CleanEnergy"
                }
                onClick={() =>
                  handleGoToUrl("/pages/FieldPageFd/subPageFd/CleanEnergy")
                }
              >
                Clean Energy
              </MenuItem>
            </SubMenu>
            <SubMenu
              active={location.pathname.includes("/pages/AboutIndexFd")}
              label={t("RESEARCH_RESULTS")}
            >
              <MenuItem
                active={location.pathname === "/pages/AboutIndexFd/aboutIndex"}
                onClick={() => handleGoToUrl("/pages/AboutIndexFd/aboutIndex")}
              >
                {t("RESEARCH_RESULTS")}
              </MenuItem>
              <MenuItem
                active={
                  location.pathname === "/pages/AboutIndexFd/subPageFd/dlpp"
                }
                onClick={() =>
                  handleGoToUrl("/pages/AboutIndexFd/subPageFd/dlpp")
                }
              >
                {t("NUCLEAR_POWER_PLANT_DECOMMISSIONING")}
              </MenuItem>
              <MenuItem
                active={
                  location.pathname === "/pages/AboutIndexFd/subPageFd/kstar"
                }
                onClick={() =>
                  handleGoToUrl("/pages/AboutIndexFd/subPageFd/kstar")
                }
              >
                {t("NUCLEAR_FUSION")}
              </MenuItem>
              <MenuItem
                active={
                  location.pathname === "/pages/AboutIndexFd/subPageFd/Voucher"
                }
                onClick={() =>
                  handleGoToUrl("/pages/AboutIndexFd/subPageFd/Voucher")
                }
              >
                {t("VOUCHER_BUSINESS")}
              </MenuItem>
              <MenuItem
                active={
                  location.pathname === "/pages/AboutIndexFd/subPageFd/clean"
                }
                onClick={() =>
                  handleGoToUrl("/pages/AboutIndexFd/subPageFd/clean")
                }
              >
                {t("CLEAN_ENERGY")}
              </MenuItem>
              <MenuItem
                active={
                  location.pathname === "/pages/AboutIndexFd/subPageFd/fire"
                }
                onClick={() =>
                  handleGoToUrl("/pages/AboutIndexFd/subPageFd/fire")
                }
              >
                {t("FIRE_FIGHTING")}
              </MenuItem>
            </SubMenu>
            <MenuItem
              active={location.pathname === "/pages/ContactFd/contact"}
              onClick={() => handleGoToUrl("/pages/ContactFd/contact")}
            >
              {t("CUSTOMER_INQUIRY")}
            </MenuItem>
            <SubMenu
              active={location.pathname.includes(
                "/pages/PromotionFd/subPageFd"
              )}
              label={t("BLOG")}
            >
              <MenuItem
                active={
                  location.pathname ===
                  "/pages/PromotionFd/subPageFd/NewsArticle"
                }
                onClick={() =>
                  handleGoToUrl("/pages/PromotionFd/subPageFd/NewsArticle")
                }
              >
                {t("RELATED_ARTICLES")}
              </MenuItem>
              <MenuItem
                active={
                  location.pathname ===
                  "/pages/PromotionFd/subPageFd/ThesisPatent"
                }
                onClick={() =>
                  handleGoToUrl("/pages/PromotionFd/subPageFd/ThesisPatent")
                }
              >
                {t("THESES_PATENTS")}
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
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
