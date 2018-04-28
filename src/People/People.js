// @flow
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
  // CardImg
} from "reactstrap";

export default class People extends React.Component {
  render() {
    return (
      <div className="content">
        <Container>
          <Row className="mb10">
            <Card>
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <img
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    className="img-responsive"
                    alt="Name"
                  />
                  <h4>Scott Whiting</h4>
                  <h5>Principal Research Scientist</h5>
                </Col>
                <Col xs={12} sm={6} md={8} lg={9}>
                  <Row>
                    <Col xs={12}>
                      Dr. Scott Whiting is a Principal Research Scientist with
                      the Western Australian Department of Biodiversity,
                      Conservation and Attractions. He coordinates the long-term
                      North West Shelf Flatback Turtle Conservation Program and
                      the Kimberley Turtle Project (Western Australia Marine
                      Science Institution). Scott has worked for university,
                      non-government and government sectors across Queensland,
                      Northern Territory, Western Australian and Australian
                      Indian Ocean Territories (Ashmore Reef and Cocos Keeling
                      Islands). Research and management roles have included
                      marine turtles, sea snakes, birds, dugongs and marine
                      debris. He is currently focused on delivering marine
                      conservation outcomes through good science, knowledge
                      uptake to decision makers, partnerships, capacity building
                      and Indigenous collaborations. He is a member of the IUCN
                      Marine Turtle Specialist Group and has been involved in
                      the Australian marine turtle recovery process since the
                      early 2000s.
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Row>

          <Row className="mb10">
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Tony Tucker</CardTitle>
                  <CardSubtitle>Senior Research Scientist</CardSubtitle>
                  <CardText>
                    Tony’s research interests are centred in life history
                    evolution and conservation biology of vertebrates, with
                    specific interests in how fluctuating environments can
                    influence population dynamics. The approach has two
                    components - (1) development of testable predictions based
                    on life history models, and (2) testing of the predictions
                    with field-collected data by application of modern
                    mathematical and statistical methods. To fulfil these
                    objectives, he maintains active interests in many research
                    domains, including: conservation ecology, wildlife
                    management, evolutionary ecology, foraging behaviour,
                    resource partitioning, allometry of growth and reproduction,
                    stage-structured population models, bio-chronology,
                    quantitative methods in ecology, life history theory,
                    population viability analysis, meta-analysis, risk analysis,
                    advances in mark-recapture methodology, migratory species,
                    long-term population dynamics, integrated catchment
                    management, invasive species, stable isotope analysis,
                    satellite telemetry, and adaptive management.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Sabrina Fossette-Halot</CardTitle>
                  <CardSubtitle>Research Scientist</CardSubtitle>
                  <CardText>
                    Sabrina started working for the Department of Biodiversity,
                    Conservation and Attractions in November 2015. Her career as
                    a sea turtle biologist gave her the opportunity to live in
                    several different countries. She completed her PhD in
                    Behavioural Ecology and Marine Biology at the University of
                    Strasbourg, France in 2008. She was then awarded a research
                    fellowship to work at Swansea University in the UK. In 2012,
                    she moved to California, USA to work as a National Research
                    Council postdoctoral fellow at NOAA before moving to Perth,
                    Australia in 2015 as the recipient of an Endeavour
                    postdoctoral fellowship. She has published more than 45
                    peer-reviewed papers on sea turtles but also marine mammals
                    and jellyfish in the field of movement ecology,
                    eco-physiology and conservation biology. Her main research
                    interest is to investigate the impact of environmental
                    conditions and human activities on marine species movements
                    and behaviour.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Florian Mayer</CardTitle>
                  <CardSubtitle>Research Scientist Ecoinformatics</CardSubtitle>
                  <CardText>
                    Florian designs and builds the information systems
                    supporting and informing turtle conservation management from
                    digital data capture, on through data warehousing and
                    cataloguing to data analysis and visualisation. Florian has
                    a degree in Ecology and Computer Science from the University
                    of Munich.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Corrine Douglas</CardTitle>
                  <CardSubtitle>Technical Officer</CardSubtitle>
                  <CardText>
                    Corrine Douglas received her Bachelor of Science (Coastal
                    Zone Management) with honours in 2011 from Curtin University
                    in Western Australia. She began her marine science career in
                    2011 with the Department of Biodiversity, Conservation and
                    Attractions (then Department of Environment and
                    Conservation) as a Technical Officer, beginning with
                    information management where she learned the importance of
                    proper data collection and storage techniques. In 2014
                    Corrine became more involved in the monitoring of marine
                    turtles and dolphins under the Gorgon and Wheatstone offset
                    programs within the department. She now continues to enhance
                    her skills and experience with these species.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Ryan Douglas</CardTitle>
                  <CardSubtitle>Technical Officer</CardSubtitle>
                  <CardText>
                    Ryan Douglas spend his childhood growing up on a wheat and
                    sheep farm in the Great Southern where he gained an
                    appreciation for nature as well as the secrets that it
                    holds. This lead to him finishing his degree in Science
                    (Marine Science) through the University of Western Australia
                    (UWA) in 2009. His career in marine science started with
                    work analysing Stereo Baited Remote Underwater Videos and
                    Diver Operated Videos at the Centre for Marine Futures at
                    UWA as well as volunteering for multiple trips to Ningaloo
                    and the Abrolhos Islands. Since 2010 he has been working for
                    the Department of Biodiversity, Conservation and Attractions
                    and its predecessors on various projects. These have ranged
                    from coral and fish identification, monitoring and tracking
                    of dolphins and marine turtles to running a computer lab and
                    maintaining collected data.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Joanne King</CardTitle>
                  <CardSubtitle>Role</CardSubtitle>
                  <CardText>Info</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Hannah Hampson</CardTitle>
                  <CardSubtitle>
                    Education and Communication Officer
                  </CardSubtitle>
                  <CardText>
                    Hannah completed a bachelor’s degree with honours in
                    biological sciences at The University of Bristol, UK and a
                    master’s degree in science communication and education at
                    the University of Western Australia. She has worked for DBCA
                    since 2007. Hannah’s enthusiasm for education has seen her
                    leading school excursions for kindy through to university
                    students. With a hands-on focus she has supervised groups of
                    students in macroinvertebrate sampling in local creeks,
                    terrestrial invertebrate sampling and marsupial monitoring
                    and tagging in the south-west forests. She has managed and
                    trained passionate education staff, developed education
                    resources and delivered professional learning to teacher
                    groups. Hannah coordinated the Bush Ranger Cadets WA
                    program, engaging students from Esperance to Wyndham in
                    practical conservation partnerships within our National
                    Parks and Reserves. She supervised and developed reward
                    camps allowing cadets to gain experience in prescribed
                    burning, fauna monitoring and ranger activities. Hannah
                    assists with communication and education resources for North
                    West Shelf Flatbacks.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Liz Grant</CardTitle>
                  <CardSubtitle>Media and Communication Officer</CardSubtitle>
                  <CardText>Info</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  top
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Name"
                />
                <CardBody>
                  <CardTitle>Natasha Samuelraj</CardTitle>
                  <CardSubtitle>Clerical Officer</CardSubtitle>
                  <CardText>Info</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
