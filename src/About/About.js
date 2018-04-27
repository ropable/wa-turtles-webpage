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

import "./About.css";
import ghlogo from "../img/gh32.png";

export default class About extends React.Component {
  render() {
    return (
      <div className="content">
        <Container>
          <Row className="mb10">
            <Card>
              <CardBody>
                <h1>Program</h1>
                <p>
                  The North West Shelf Flatback Turtle Conservation Program
                  (North West Shelf Flatbacks) is a 30-year, $32.5 million
                  program that aims to conserve flatbacks in WA waters, at
                  nesting beaches and throughout their range. Research is still
                  needed to define the abundance and distribution of the
                  flatback population of the North West Shelf and work being
                  done includes:
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
                  The North West Shelf Flatbacks program is one of two
                  additional conservation programs delivered from the Gorgon Gas
                  Project (via the 2009 Variation Agreement to the Barrow Island
                  Act 2003).
                </p>
                <h2>The need for a large-scale conservation program</h2>
                <p>
                  Barrow Island has long been known for being a modern day
                  ‘Noah’s Ark’ with species like the golden bandicoot and the
                  burrowing bettong surviving here, despite extinctions on the
                  mainland. Possibly less well-known is that Barrow Island is
                  used by thousands of female flatback turtles each year, who
                  migrate to the island to lay their eggs. Flatbacks only nest
                  across Northern Australia, so this rookery is not just
                  significant for flatbacks in WA, but potentially for global
                  abundance. The island hosts the production facility for
                  Australia’s largest onshore oil field and more recently a
                  liquefied natural gas plant. With the approval of the Gorgon
                  Gas Project came funding to conserve the flatback turtle and
                  determine whether the Gorgon Gas Project is having a
                  significant impact on the population of flatbacks nesting
                  there.
                </p>
                <h2>The enigmatic flatback</h2>
                <p>
                  Flatback turtles are the least studied of the seven species of
                  marine turtle, and they have some unique features. They were
                  only recognised as a separate species from green turtles in
                  the 1970’s. Part of the reason for this is that they nest on
                  remote beaches and forage in murky water, which is often
                  shared with sharks and salt water crocodiles.
                </p>
                <p>
                  Flatbacks nest on mainland and island beaches from Exmouth
                  Gulf (WA) to Bundaberg (QLD). They migrate to offshore feeding
                  grounds as far north as Papua. Flatback foraging grounds are
                  contained by the continental shelf, quite different to other
                  turtle species which have an oceanic phase to the lifecycle.
                  Flatbacks feed on soft-bottomed sea beds at 10-100m depth.
                  They have a unique skin-like carapace which makes them
                  sensitive to touch, and not suited to reef environments.
                </p>
                <p>
                  There are many fundamental questions about flatbacks that this
                  program will address:
                </p>
                <ul>
                  <li>
                    Where are the rookeries and how do they rank against each
                    other?
                  </li>
                  <li>Where are foraging habitats, what do they eat?</li>
                  <li>
                    How do hatchlings disperse, which habitats do they use?
                  </li>
                  <li>
                    Where do they mate, what do they do between laying clutches
                    of eggs?
                  </li>
                  <li>
                    How quickly do flatback turtles grow, how old are they at
                    maturity?
                  </li>
                  <li>
                    How does sand temperature in the nest affect sex ratios and
                    mortality rates of eggs?
                  </li>
                </ul>
                <h2>Geographic scope</h2>
                The scope of this program currently covers all summer nesting
                flatback turtles throughout their nesting beaches (yellow) and
                foraging grounds (pink): [map of nesting beaches and foraging
                grounds]
                <h2>Threats to Flatbacks</h2>
                <p>
                  Flatback turtles are a threatened species; they are listed as
                  vulnerable, both in WA and more broadly in Australia – meaning
                  that they are vulnerable to extinction. On the IUCN red list
                  flatbacks are listed as data deficient, meaning we need more
                  detail about their abundance and distribution. This program
                  and others around Australia are aiming to clarify this status.
                  The North West Shelf Flatbacks face many threats and the
                  management plan identifies and ranks their threats to
                  prioritise conservation action.
                </p>
                <p>Pressure - Threat - Priority</p>
                <p>OA Overarching actions H P1</p>
                <p>
                  Light impact (on and offshore) on nesting adults and
                  hatchlings H P2
                </p>
                <p>Introduced animals predating on eggs and hatchlings H P3</p>
                <p>Global temperature increase (climate change) M P4</p>
                <p>Modification of beaches (coastal development) M P5</p>
                <p>Sea level rise (climate change) M P6</p>
                <p>Marine debris (entanglement and ingestion) M</p>
                <p>
                  The North West Shelf Flatback Turtle Conservation Program –
                  Strategic Conservation Plan can be accessed here.
                </p>
                <h2>Governance</h2>
                <p>
                  {" "}
                  The Department of Biodiversity, Conservation and Attractions
                  administers North West Shelf Flatbacks through the Director
                  General. The Director General receives advice from an Advisory
                  Committee and Scientific Panel of Experts.
                </p>
                <p>Advisory Committee Members:</p>
                <ul>
                  <li>Simon Woodley, Chair</li>
                  <li>
                    Keith Morris, Department of Biodiversity, Conservation and
                    Attractions
                  </li>
                  <li>Fiona Bartlett, Department of Environment and Energy</li>
                  <li>Andrew Smith, Chevron Australia</li>
                </ul>
                <p>Marine Turtle Expert Panel:</p>
                <ul>
                  <li>Dr Milani Chaloupka</li>
                  <li>Dr Kellie Pendoley</li>
                  <li>Dr Colin Limpus</li>
                </ul>
              </CardBody>
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
                  <CardTitle>Scott Whiting</CardTitle>
                  <CardSubtitle>Principal Research Scientist</CardSubtitle>
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
          <Row className="mb10">
            <Card>
              <CardBody>
                <h1>Participate</h1>
                We run two monitoring programs each year, which provide
                opportunities for volunteers to get involved with and learn more
                about the program.
                <h3>Thevenard Island</h3>
                <h4>Accommodation</h4>
                <p>
                  Thevenard Island is one of the Mackerel Islands, a group of 10
                  islands off the coast of Onslow, WA. The island is accessed by
                  a 45-minute boat trip. Staff and volunteers will stay at fully
                  self-contained cabins. Cabins have two to five bedrooms with
                  two single beds in each bedroom, so staff and volunteers will
                  be expected to share. When possible, gender specific rooms
                  will be allocated.
                </p>
                <h4>Cost</h4>
                Covered:
                <ul>
                  <li>
                    Transport from Perth to Onslow by plane and from Onslow to
                    Thevenard Island by boat and return.
                  </li>
                  <li>Food and accommodation on Thevenard Island.</li>
                </ul>
                <p>Not covered:</p>
                <ul>
                  <li>
                    Food and accommodation in Perth/Onslow prior to and after
                    the trip to Thevenard Island.
                  </li>
                  <li>Transport to and from the airport in Perth.</li>
                  <li>
                    International volunteers are expected to have their own
                    personal travel and health insurance.
                  </li>
                  <li>Personal expenses.</li>
                </ul>
                <h3>Delambre Island</h3>
                <h4>Accommodation</h4>
                <p>
                  Delambre Island is one of the islands of the Dampier
                  Archipelago, off Point Sampson. Staff and volunteers will camp
                  on the beach, so staff and volunteers will be expected to
                  share. When possible, gender specific tents will be allocated.
                </p>
                <h4>Cost</h4>
                <p>Covered:</p>
                <ul>
                  <li>
                    Transport Karratha and from Karratha to Delambre Island by
                    boat and return.
                  </li>
                  <li>Food and accommodation on Delambre Island.</li>
                  <p>Not covered:</p>
                  <li>
                    Food and accommodation in Perth/Onslow prior to and after
                    the trip to Thevenard Island.
                  </li>
                  <li>Transport to and from the airport in Perth.</li>
                  <li>
                    International volunteers are expected to have their own
                    personal travel and health insurance.
                  </li>
                  <li>Personal expenses.</li>
                </ul>
                <h3>Major responsibilities</h3>
                <p>
                  Volunteers will help with research on flatback turtles. Duties
                  will include:
                </p>
                Patrolling the beach at night for nesting turtles; tagging;
                measuring; taking skin biopsy; deploying satellite tags;
                patrolling the beach and counting tracks during the day;
                monitoring nesting success and hatching success; data entry.
                <p>
                  Shifts will vary due to tides, the number of turtles on the
                  beach and the number of staff/volunteers available, however
                  volunteers should expect long hours working under difficult
                  conditions (approximately 5-8 hours per night).
                </p>
                <h3>Requirements</h3>
                <p>All participants must be physically able to</p>
                <ul>
                  <li>
                    walk the beach at night for five/six hours carrying 6kg
                  </li>
                  <li>walk on uneven terrain (rocks, soft sand)</li>
                  <li>walk 6 - 12km in hot (30-40°C) daytime conditions</li>
                  <li>lift 15kg</li>
                  <li>
                    Applicants must, present fit for work whilst on duty and act
                    in accordance with the Department of Parks and Wildlife’s
                    Code of Conduct. Senior First Aid qualification is
                    desirable.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Row>
          <Row className="mb10">
            <Card>
              <CardBody>
                <h1>Page</h1>
                <CardSubtitle />
                <CardText>
                  This page aims to incorporate the{" "}
                  <a
                    href="http://gcio.wa.gov.au/wp-content/uploads/2016/05/FINAL-Website-Visual-Design-and-Functional-Standard-April-2018-1.pdf"
                    target="_"
                    title="Design guidelines (PDF)"
                  >
                    design guidelines
                  </a>{" "}
                  published by the GCIO in April 2018. Since no functioning
                  template is available as yet, the implementation of the
                  guidelines is a work in progress. This page works offline and
                  can be installed as an app on mobile devices.
                  <span className="text-muted credit">
                    <a
                      href="https://github.com/dbca-wa/wa-turtles-webpage"
                      target="_"
                    >
                      <img src={ghlogo} alt="GitHub" />
                    </a>
                  </span>
                  <span className="text-muted credit">
                    <a
                      href="https://travis-ci.org/dbca-wa/wa-turtles-webpage"
                      target="_"
                    >
                      <img
                        src="https://travis-ci.org/dbca-wa/wa-turtles-webpage.svg?branch=master"
                        alt="Build Status"
                      />
                    </a>
                  </span>
                  <span className="text-muted credit">
                    <a
                      href="https://coveralls.io/github/dbca-wa/wa-turtles-webpage"
                      target="_"
                    >
                      <img
                        src="https://coveralls.io/repos/github/dbca-wa/wa-turtles-webpage/badge.svg"
                        alt="Test Coverage"
                      />
                    </a>
                  </span>
                  <span className="text-muted credit">
                    <a
                      href="http://waffle.io/dbca-wa/wa-turtles-webpage"
                      target="_"
                    >
                      <img
                        src="https://badge.waffle.io/dbca-wa/wa-turtles-webpage.svg?columns=all"
                        alt="To do"
                      />
                    </a>
                  </span>
                </CardText>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}
