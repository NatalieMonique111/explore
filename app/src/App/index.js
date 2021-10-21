import * as React from "react";

import { Routes, Route } from "react-router-dom";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionTypography from "views/index-sections/SectionTypography.js";

// Keep as example for e2e requests, then delete
import Tasks from "../Tasks";

// import styles from "./styles.module.scss";

const App = () => (
  <>
    {/* <header>
      <nav className={styles.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>{" "}
        | <NavLink to="dashboard">Dashboard</NavLink>
      </nav>
    </header> */}
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  </>
);

const Home = () => (
  <>
    <IndexNavbar />
    <IndexHeader />
    <div className="main">
      <SectionButtons />
      <SectionNavbars />
      <SectionNavigation />
      <SectionProgress />
      <SectionNotifications />
      <SectionTypography />
      <SectionJavaScript />
      <SectionCarousel />
      <SectionNucleoIcons />
      <SectionDark />
      <SectionLogin />
      <SectionExamples />
      <SectionDownload />
      <DemoFooter />
    </div>
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <Tasks />
  </>
);

export default App;
