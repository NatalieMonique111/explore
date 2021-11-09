import * as React from "react";

import { Routes, Route } from "react-router-dom";

// core components

import DemoFooter from "components/Footers/DemoFooter.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";

import Region from "../Region/Region.js";
import Site from "../Site/Site.js";

const App = () => (
  <>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/region/:code" element={<Region />} />
        <Route path="/site/:id" element={<Site />} />
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
    <header>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <p>{process.env.REACT_APP_SUBTITLE}</p>
    </header>
  </>
);

export default App;
