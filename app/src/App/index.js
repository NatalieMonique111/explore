import * as React from "react";

import { Routes, Route } from "react-router-dom";

// core components
// import { Featured } from "components/Featured";

import Region from "Region";
import Site from "Site";
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
        <Route path="/region" element={<Region />} />
        <Route path="/site" element={<Site />} />

        {/* <Route path="/arab-states" element={<Dashboard />} />
        <Route path="/europe-america" element={<Dashboard />} />
        <Route path="/asia-oceania" element={<Dashboard />} />
        <Route path="/latin-caribbean" element={<Dashboard />} /> */}
      </Routes>
    </main>
  </>
);

const Home = () => (
  <>
    <IndexNavbar />
    <IndexHeader />
    <section style={{ paddingTop: 50 }}>
      <h2 className="text-center">Featured UNESCO Sites</h2>
    </section>
    <SectionCarousel />
    <div>
      <section className="text-center">
        <SectionNavbars />
      </section>
      <SectionDark />
      <SectionLogin />
      <DemoFooter />
    </div>
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <IndexNavbar />
    <IndexHeader />
    <div className="main">
      {/* <Featured /> */}
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
    <Tasks />
  </>
);

export default App;
