// @flow
import React from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardText
  // CardImg
} from "reactstrap";

import "./About.css";

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
        </Container>
      </div>
    );
  }
}
