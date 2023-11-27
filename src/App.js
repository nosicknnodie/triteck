/* eslint-disable react/jsx-pascal-case */
import React, {
  createContext,
  useContext,
  useRef,
  useReducer,
  useState,
  useCallback,
} from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import LRoutes from "./components/Routes";
import Header from "./components/Header";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import schemaLink from "@/common/Mocking";
import ModalFormPage from "./components/pages/ModalFormPageFd/ModalFormPage";
import ScrollToTop from "./common/ScrollToTop.js";

const client = new ApolloClient({
  ssrMode: true,
  link: schemaLink,
  cache: new InMemoryCache(),
});

const MainPage = () => {
  return (
    <>
      <ScrollToTop />
      {/* <div className="flyout"> */}
      <Header />
      <main>
        {/* style={{ marginTop: '2vh' }} */}
        <div className="container-fluid">
          <LRoutes />
        </div>
      </main>
      {/* </div> */}
    </>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  );
};

export default App;
