// @flow
import React from "react";
import { Container, Jumbotron, Card, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import TurtleYoutube from "../TurtleYoutube/TurtleYoutube";

import "./Story.css";

export default class Story extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>The Flatback Story</h1>
          <p>
            This page tells the entertaining and educational story of flatback
            turtles in Western Australia.
          </p>
        </Jumbotron>
        <Row>
          <Col>
            <Card>
              <Container>
                <h1>First beginnings</h1>
                <p>
                  The first written description of the flatback turtle is
                  thought to be from Lort Stokes, form his “Discoveries in
                  Australia with an account of the coasts and rivers explored
                  and surveyed during the voyage of H.M.S. Beagle In the years
                  1837-43”
                </p>

                <p>
                  “DELAMBRE ISLAND On the 27th [August, 1840] we crossed over to
                  Delambre Island, on which a large party landed in the
                  afternoon. A few turtle were here taken, of a different kind
                  from any we had seen before, and apparently a cross between
                  the Hawk's Bill and the Green Turtle.“
                </p>

                <p>
                  Despite this early recognition that they looked superficially
                  different to hawksbill and green turtles it took over 100
                  years for flatbacks to be officially described as a separate
                  species.
                </p>

                <p>
                  The scientific name Natator depressus comes from the Latin:
                  Natator meaning swimmer and depressus meaning sunken or low,
                  referring to the low, flattened dome of the carapace.
                </p>

                <p>
                  Flatback turtles have a smooth shell with scales that don’t
                  overlap. They are an olive green colour. They are
                  distinguished from other species by scale pattern and
                  typically have four pairs of costal scales, one pair of
                  prefrontal scales and one pre-occular scale between each eye
                  and nostril.
                </p>

                <p>
                  [Insert interactive turtle scale images – 20170422 Flatback
                  Turtle body interactive_draft2.pdf]
                </p>

                <p>Conservation status: Vulnerable</p>

                <p>
                  Adult female turtles have a curved carapace length of 88-98 cm
                  and weigh 50-125 kg.
                </p>

                <h1>Distribution</h1>
                <p>
                  Flatback turtles have a restricted distribution compared to
                  other turtle species, all recorded nests are in northern
                  Australia, from the Pilbara and Kimberley in WA through the NT
                  down to southern QLD. Flatbacks feed in waters over the
                  Australian continental shelf and as far as Papua New Guinea
                  and southern Indonesia. There are several management units
                  across northern Australia, these are distinct breeding groups,
                  so turtles from Western Australia would not, for example,
                  migrate to Queensland. Major rookeries in WA include the east
                  coast of Barrow Island with about 1,700 nesting females per
                  year and Mundabullangana Beach with about 1,600 nesting
                  females per year. Several other areas host hundreds to
                  thousands of nesting females each year, including Eighty Mile
                  Beach, Cape Dommett, Montebello Islands, Dampier Archipelago
                  Islands and the island chains between Dampier and Exmouth
                  Gulf.
                </p>

                <h1>Diet</h1>

                <p>
                  Flatback turtles are carnivorous, however, little is known
                  about what flatback turtles eat and it is the subject of
                  current research. Hatchlings appear to feed on macro
                  zooplankton and adults on soft-bodied sea creatures that live
                  on the ocean floor such as sponges, soft corals, feather stars
                  and sea pens.
                </p>

                <p>
                  Much of the historical information on diet comes from looking
                  at the stomach contents of turtles that strand on beaches
                  throughout WA. More recently, however, we have been able to
                  put satellite trackers on to female turtles after they finish
                  laying eggs, see www.seaturtle.org. By following the tracks of
                  several female flatback turtles when they migrate after laying
                  we have been able to determine hotspots of activity which
                  point to where flatbacks are feeding. Near-shore feeding
                  grounds are 10-100m deep, whilst further offshore there are
                  larger foraging grounds off the northwest Kimberley coast
                  between 50-100m deep.
                </p>

                <p>
                  A collaborative project with WAMSI has been able to determine
                  the types of sea creatures that are abundant in these areas.
                  To read more about this and to see some great videos of
                  creatures on the sea floor see these news articles:
                  http://northwestatlas.org/node/1667
                  http://northwestatlas.org/node/1665
                </p>

                <h1>Life Cycle</h1>

                <p>[animation: typical turtle life cycle]</p>

                <p>
                  Most marine turtles have a similar life cycle. The eggs are
                  left to incubate in the sand and once the hatchlings emerge
                  they make their own way down the beach into the ocean. Most
                  turtle species nest on beaches next to oceanic currents that
                  take the hatchlings out into open ocean for the next phase of
                  the juvenile turtle, known as the “lost years”, where the
                  turtles live a pelagic lifestyle out in the open ocean.
                </p>

                <p>
                  Flatbacks are a little different from this. Hatchling flatback
                  turtles have an active swimming phase once they reach the
                  ocean. Flatbacks tend to nest on sheltered beaches, the
                  hatchlings must swim out to deeper waters quickly to avoid
                  predator-rich near-shore waters. We know that flatback
                  hatchlings and juveniles stay closer to shore than other
                  species of turtles, foraging in water over the continental
                  shelf.
                </p>
                <p>
                  Very little else is known about this post-hatchling phase.
                  When the hatchlings mature the juvenile turtles come back
                  closer to shore and mature further until they are old enough
                  to breed. Breeding often occurs in breeding aggregations close
                  to the shore and females may mate with more than one male. The
                  females then haul themselves up onto suitable beaches to
                  choose a spot to lay a clutch of eggs. Turtles can lay several
                  clutches of eggs during a season and females may emerge every
                  two weeks to do this.
                </p>

                <TurtleYoutube />
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
