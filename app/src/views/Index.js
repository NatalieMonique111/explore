import React from "react";

// reactstrap components

// core components
import MainFooter from "components/Footers/MainFooter.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionQuote from "views/index-sections/SectionQuote";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionNavbars />
        <SectionCarousel />
        <SectionDark />
        <SectionQuote />
        <MainFooter />
      </div>
    </>
  );
}

export default Index;
