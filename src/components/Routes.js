/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Route, Routes as LRoutes, Switch } from "react-router-dom";

import About from "../components/pages/AboutFd/About";
import Kstar from "../components/pages/AboutIndexFd/subPageFd/Kstar";
import Rsa from "../components/pages/FieldPageFd/subPageFd/Rsa";
import Ceo from "../components/pages/CeoFd/Ceo";
import Ci from "../components/pages/CeoFd/Ci";
import Clean from "../components/pages/AboutIndexFd/subPageFd/Clean";
import Field from "../components/pages/FieldPageFd/subPageFd/Field";
import Dlpp from "../components/pages/AboutIndexFd/subPageFd/Dlpp";
import Promotion from "../components/pages/PromotionFd/Promotion";
import Contact from "../components/pages/ContactFd/Contact";
import Voucher from "../components/pages/AboutIndexFd/subPageFd/Voucher";
import CleanEnergy from "../components/pages/FieldPageFd/subPageFd/CleanEnergy";
import CounterPage from "../components/pages/StudyPageFd/CounterPage";
import AboutIndex from "../components/pages/AboutIndexFd/AboutIndex";
import FieldPage from "../components/pages/FieldPageFd/FieldPage";
import ModalFormPage from "../components/pages/ModalFormPageFd/ModalFormPage";
import ApiTestPage from "../components/pages/ApiTestPageFd/ApiTestPage";
import FieldIndex from "../components/pages/FieldPageFd/FieldIndex";
import NewsArticle from "../components/pages/PromotionFd/subPageFd/NewsArticle";
import ThesisPatent from "../components/pages/PromotionFd/subPageFd/ThesisPatent";
import VideoNews from "../components/pages/PromotionFd/subPageFd/VideoNews";
import NewsPageSafe from "../components/pages/PromotionFd/subPageFd/newsPages/NewsPageSafe";
import NewsPageSp from "../components/pages/PromotionFd/subPageFd/newsPages/NewsPageSp";
import NewsPageTet from "../components/pages/PromotionFd/subPageFd/newsPages/NewsPageTet";
import NewsPageWm_2 from "../components/pages/PromotionFd/subPageFd/newsPages/NewsPageWm_2";
import NewsPageWm from "../components/pages/PromotionFd/subPageFd/newsPages/NewsPageWm";

const Routes = () => {
  return (
    <LRoutes>
      <Route path="*" element={<About />} />
      <Route path="/pages/AboutFd/About" element={<About />} />
      <Route path="/pages/AboutIndexFd/AboutIndex" element={<AboutIndex />} />
      <Route path="/pages/FieldPageFd/FieldPage" element={<FieldPage />} />
      <Route path="/pages/AboutIndexFd/subPageFd/Kstar" element={<Kstar />} />
      <Route
        path="/pages/FieldPageFd/subPageFd/CleanEnergy"
        element={<CleanEnergy />}
      />
      <Route path="/pages/FieldPageFd/subPageFd/Rsa" element={<Rsa />} />
      <Route path="/pages/CeoFd/Ceo" element={<Ceo />} />
      <Route path="/pages/CeoFd/Ci" element={<Ci />} />
      <Route path="/pages/FieldPageFd/subPageFd/Field" element={<Field />} />
      <Route path="/pages/AboutIndexFd/subPageFd/Dlpp" element={<Dlpp />} />
      <Route path="/pages/PromotionFd/Promotion" element={<Promotion />} />
      <Route path="/pages/ContactFd/Contact" element={<Contact />} />
      <Route path="/pages/AboutIndexFd/subPageFd/Clean" element={<Clean />} />
      <Route
        path="/pages/AboutIndexFd/subPageFd/Voucher"
        element={<Voucher />}
      />
      <Route path="/pages/StudyPageFd/CounterPage" element={<CounterPage />} />
      <Route
        path="/pages/ModalFormPageFd/ModalFormPage"
        element={<ModalFormPage />}
      />
      <Route
        path="/pages/ApiTestPageFd/ApiTestPage"
        element={<ApiTestPage />}
      />
      <Route path="/pages/FieldPageFd/FieldIndex" element={<FieldIndex />} />
      <Route
        path="/pages/PromotionFd/subPageFd/NewsArticle"
        element={<NewsArticle />}
      />
      <Route
        path="/pages/PromotionFd/subPageFd/ThesisPatent"
        element={<ThesisPatent />}
      />
      <Route
        path="/pages/PromotionFd/subPageFd/VideoNews"
        element={<VideoNews />}
      />
      <Route
        path="/pages/PromotionFd/subPageFd/newsPages/NewsPageSafe"
        element={<NewsPageSafe />}
      />
      <Route
        path="/pages/PromotionFd/subPageFd/newsPages/NewsPageSp"
        element={<NewsPageSp />}
      />
      <Route
        path="/pages/PromotionFd/subPageFd/newsPages/NewsPageTet"
        element={<NewsPageTet />}
      />
      <Route
        path="/pages/PromotionFd/subPageFd/newsPages/NewsPageWm_2"
        element={<NewsPageWm_2 />}
      />
      <Route
        path="/pages/PromotionFd/subPageFd/newsPages/NewsPageWm"
        element={<NewsPageWm />}
      />
      {/* <Route
        render={function () {
          return <h1>Not Found</h1>;
        }}
      /> */}
    </LRoutes>
  );
};

export default Routes;
