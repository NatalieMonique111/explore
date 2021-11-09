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
import { createMarkup } from "../utils.js";

///////////////////////////////Site Page///////////////////////////////
function Site() {
  const { id } = useParams();
  const [site, setSite] = React.useState({});

  React.useEffect(() => {
    // Check if component is mounted after promise returns,
    // otherwise error occurs and hook will not be loaded with response.
    let isMounted = true;

    if (isMounted) {
      apiClient.getSite(id).then((resp) => {
        if (isMounted) {
          return setSite(resp[0]);
        }
      });
    }

    return () => (isMounted = false);
  }, []);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  }, []);

  ////////////////////Header//////////////////
  let pageHeader = React.createRef();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <IndexNavbar />
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/sunrise.jpeg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 dangerouslySetInnerHTML={createMarkup(site.site)} />
          </div>
        </Container>
      </div>
      {/* site header end */}
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 dangerouslySetInnerHTML={createMarkup(site.states)} />
                <br />
                <h3 dangerouslySetInnerHTML={createMarkup(site.category)} />
                <br />
                <div dangerouslySetInnerHTML={createMarkup(site.description)} />
                <br />
              </Col>
            </Row>
            <br />
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Gallery</h2>
            <Gallery siteName={site.site} state={site.states} />
            <br />
          </Container>
        </div>

        <div
          className="section pt-o"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Container className="text-center">
            <Button
              className="btn-round"
              color="info"
              href={site.http_url}
              target="_blank"
              // onClick={(e) => e.preventDefault()}
            >
              View More at UNESCO
            </Button>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default Site;
