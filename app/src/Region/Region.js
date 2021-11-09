import React from "react";

// reactstrap components
import { useParams, Link } from "react-router-dom";
import { TabContent, TabPane, Container, Row, Col } from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import RegionPageHeader from "components/Headers/RegionPageHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import * as apiClient from "../apiClient";
import { createMarkup } from "../utils.js";

// Map Url param to region name for DB look up.
const paramsToRegion = {
  ena: "Europe and North America",
  asa: "Asia and the Pacific",
  lat: "Latin America and the Caribbean",
  afr: "Africa",
  arb: "Arab States",
};

// Formats backend data to be consumed by react.
function createStateToSite(data) {
  const statesToSite = new Map();
  for (const row of data) {
    if (!statesToSite.has(row.states)) {
      // Create state to sites, e.g. Ethiopia -> {Tiya, url id}
      statesToSite.set(row.states, []);
    }
    const site = {
      site: row.site,
      unique_number: row.unique_number,
    };
    statesToSite.get(row.states).push(site);
  }
  return statesToSite;
}

////////////////////////////////////Region Page////////////////////////////////////

function Region() {
  const { code } = useParams();
  const currentRegion = paramsToRegion[code];
  //hooks
  const [region, setRegion] = React.useState([]);
  const [statesToSite, setStatesToSite] = React.useState(new Map());

  const loadRegion = async () =>
    setRegion(await apiClient.getRegion(currentRegion));

  React.useEffect(() => {
    loadRegion();
  }, []);

  React.useEffect(() => {
    setStatesToSite(createStateToSite(region));
  }, [region]);

  const [activeTab, setActiveTab] = React.useState("1");

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <RegionPageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                style={{ backgroundColor: "transparent" }}
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/compass2.gif").default}
              />
            </div>
            <div className="name">
              <h1 className="title">
                {currentRegion}
                <br />
              </h1>
              {/* //region */}
              <h6 className="description">Region</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <br />
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation"></div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col
                          className="ml-auto mr-auto"
                          lg="2"
                          md="4"
                          xs="4"
                        ></Col>
                        <Col className="ml-auto mr-auto" lg="9" md="4" xs="4">
                          {/* states & site */}
                          <ul className="list-unstyled follows">
                            {[...statesToSite.keys()].map((state, i) => (
                              <>
                                <li key={i}>
                                  <h4
                                    dangerouslySetInnerHTML={createMarkup(
                                      state.split(",").join(", "),
                                    )}
                                  />
                                  <ul className="">
                                    {[...statesToSite.get(state)].map(
                                      (site, j) => (
                                        <li key={j}>
                                          <Link
                                            to={"/site/" + site.unique_number}
                                          >
                                            <span
                                              dangerouslySetInnerHTML={createMarkup(
                                                site.site,
                                              )}
                                            />
                                          </Link>
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                </li>
                              </>
                            ))}
                          </ul>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default Region;
