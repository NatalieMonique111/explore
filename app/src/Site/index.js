/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";

// reactstrap components
import Gallery from "Gallery/Gallery.js";
// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

import * as apiClient from "../apiClient";
import JsonData from "../unesco.json"; // temp for debugging

// FOR CREATING DB DATA, until backend is impemented
function preProcessRegionTable(data) {
  return data
    .map((row) => {
      return {
        unique_number: row.unique_number,
        site: row.site,
        states: row.states, // state are string, despite holding multiple states sometimes.
        description: row.short_description,
        category: row.category,
        http_url: row.http_url,
      };
    })
    .filter((el) => el);
}

///////////////////////////////Site Page///////////////////////////////
function findSite(data, id) {
  return data.find((row) => row.unique_number === id);
}

function Site() {
  //hooks
  const [site, setSites] = React.useState([]);

  const loadSites = async () => setSites(await apiClient.getRegions(site));

  React.useEffect(() => {
    loadSites();
  }, []);
  //
  let { id } = useParams();
  const data = findSite(JsonData.query.row, id);
  console.log("Site Data", data, id);
  const preprocessed = preProcessRegionTable(JsonData.query.row);
  console.log(
    "Preprocessed data",
    JSON.stringify(preprocessed).replace(/'/g, "&apos;"),
  );

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  ////////////////////Header//////////////////
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <IndexNavbar />
      {/* site header */}
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>{data.site}</h1>
          </div>
        </Container>
      </div>
      {/* site header end */}
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">{data.states}</h2>
                <br />
                <h3>{data.category}</h3>
                <br />
                <p className="description">{data.short_description}</p>

                <br />
              </Col>
            </Row>
            <br />
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Gallery</h2>
            <Gallery />
            <br />
          </Container>
        </div>

        <div
          className="section pt-o"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Container>
            <Button
              className="btn-round"
              color="info"
              href={data.http_url}
              target="_blank"
              // onClick={(e) => e.preventDefault()}
            >
              UNESCO
            </Button>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default Site;
