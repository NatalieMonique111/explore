import React from "react";

// reactstrap components
import { useParams, Link } from "react-router-dom";
import { TabContent, TabPane, Container, Row, Col } from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import * as apiClient from "../apiClient";
import JsonData from "../unesco.json"; // temp for debugging DO NOT COMMIT
// BELOW IS TEMP DB
const paramsToRegion = {
  ena: "Europe and North America",
  asa: "Asia and the Pacific",
  lat: "Latin America and the Caribbean",
  afr: "Africa",
  arb: "Arab States",
};

function preProcessRegionTable(data) {
  let idCnt = 0;
  return data
    .map((row) => {
      return {
        id: idCnt++,
        region: row.region,
        site: row.site,
        states: row.states, // state are string, despite holding multiple states sometimes.
        unique_number: row.unique_number,
      };
    })
    .filter((el) => el);
}

// simulates sql select * where region = region
function sqlQuerySimulation(data, param) {
  return data.filter((row) => row.region === paramsToRegion[param]);
}

// ABOVE IS TEMPORARY FOR DB PURPOSES

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
  const [region, setRegions] = React.useState([]);

  const loadRegions = async () =>
    setRegions(await apiClient.getRegions(region));

  React.useEffect(() => {
    loadRegions();
  }, []);

  const [activeTab, setActiveTab] = React.useState("1");
  let { code } = useParams();
  // remove below
  // const param = "afr"; // changes this to be real router string param
  let data = preProcessRegionTable(JsonData.query.row);
  console.log(JSON.stringify(data).replace(/'/g, "&apos;"));
  data = sqlQuerySimulation(data, code);
  console.log(data);
  const statesToSite = createStateToSite(data);
  // remove all above, for testing

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    // TODO query apiClient with incoming url param for region, e.g. ena/asa/lat/etc.
    // pass response into a hook, formatted by createStateToSite()
    // i.e. const statesToSite = createStateToSite(dataResponse);

    // api call will look like:
    //  const loadRegion = async () => setRegion(await apiClient.getRegion(paramsToRegion[param]));
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              {/* <img
                style={{ backgroundColor: "transparent" }}
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/globe.gif").default}
              /> */}
            </div>
            <div className="name">
              <h1 className="title">
                {data[0].region}
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
                                  <h3>{state}</h3>
                                  <ul className="">
                                    {[...statesToSite.get(state)].map(
                                      (site, j) => (
                                        <li key={j}>
                                          {/* TODO: make real link with router to Site page. */}
                                          <Link
                                            to={"/site/" + site.unique_number}
                                          >
                                            {site.site}
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
