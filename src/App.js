/* eslint-disable react/jsx-pascal-case */
import "./App.css";

import Header from "./components/Header";
import LRoutes from "./components/Routes";
import ScrollToTop from "./common/ScrollToTop.js";

const App = () => {
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
    </>
  );
};

export default App;
