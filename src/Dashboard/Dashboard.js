// @flow
import React from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

import hatchling from "../img/green_hatchling.jpg";
import "./Dashboard.css";

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>North West Shelf Flatback Turtle Conservation Program</h1>
              <p>
                The North West Shelf Flatback Turtle Conservation Program (North
                West Shelf Flatbacks) is a 30-year, $32.5 million program that
                aims to conserve flatbacks in WA waters, at nesting beaches and
                throughout their range, which can include Commonwealth, Northern
                Territory and Queensland jurisdictions.
              </p>

              <p>
                Research is still needed to define the abundance and
                distribution of the flatback population of the Northwest Shelf
                and work being done includes:
              </p>
              <ul>
                <li>surveying, monitoring and research,</li>
                <li>
                  reducing interference to key breeding and feeding locations,
                  and
                </li>
                <li>establishing information and education programs.</li>
              </ul>
              <p>
                The North West Shelf Flatbacks program is one of two additional
                conservation programs delivered from the Gorgon Gas Project (via
                the 2009 Variation Agreement to the{" "}
                <a href="https://www.slp.wa.gov.au/legislation/statutes.nsf/main_mrtitle_76_homepage.html">
                  Barrow Island Act 2003
                </a>).
              </p>
            </Jumbotron>

            <Row className="mb10">
              <Col xs={12} sm={6} md={4}>
                <Card>
                  <CardImg
                    top
                    width="100px;"
                    src={hatchling}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <Card>
                  <CardImg
                    top
                    width="100px;"
                    src={hatchling}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <Card>
                  <CardImg
                    top
                    width="100px;"
                    src={hatchling}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Call to action: Participate</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Link to="/participate">
                      <Button>Participate</Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mb10">
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <CardTitle>News</CardTitle>
                    <CardSubtitle>News placeholder</CardSubtitle>
                    <CardText>News carousel goes here.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
