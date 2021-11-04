/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  // NavbarBrand,
  Navbar,
  // NavItem,
  // NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionNavbars() {
  return (
    <>
      <div className="section section-navbars ">
        <Container id="menu-dropdown">
          <div className="title">
            <h2>Select a Region</h2>
          </div>
          <br />
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Col md="1.5">
              <Navbar className="bg-primary" expand="lg">
                {/* <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Menu
                </NavbarBrand> */}
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-menu"
                  data-toggle="collapse"
                  id="navbar-menu"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-menu">
                  <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        nav
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                        Region
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem header tag="span">
                          Region
                        </DropdownItem>

                        <DropdownItem
                          href="/region/afr"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Africa
                        </DropdownItem>

                        <DropdownItem
                          href="/region/arb"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Arab States
                        </DropdownItem>

                        <DropdownItem
                          href="/region/asa"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Asia and Oceania
                        </DropdownItem>

                        <DropdownItem
                          href="/region/ena"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Europe and North America
                        </DropdownItem>

                        <DropdownItem
                          href="/region/lat"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Latin America and the Caribbean
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionNavbars;
