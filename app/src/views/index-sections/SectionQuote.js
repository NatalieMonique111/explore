/* eslint-disable jsx-a11y/label-has-associated-control */
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
import { Card, Container, Col } from "reactstrap";

// core components

function SectionQuote() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <Container>
          <Col className="ml-auto mr-auto text-center">
            <Card style={{ backgroundColor: "transparent", color: "white" }}>
              <br />
              <blockquote className="blockquote">
                <br />
                <p className="mb-0" style={{ color: "white" }}>
                  "Heritage is our legacy from the past, what we live with
                  today, and what we pass on to future generations. Our cultural
                  and natural heritage are both irreplaceable sources of life
                  and inspiration.”
                </p>
                <br />

                <footer className="blockquote-footer">
                  UNESCO World Heritage Centre{" "}
                  <cite title="source Title">World Heritage</cite>
                </footer>
              </blockquote>
            </Card>
          </Col>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionQuote;
