// @flow
import React from "react";
import { Grid, Well, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import TurtleYoutube from "../TurtleYoutube/TurtleYoutube";
import "./Dashboard.css";

export default class Dashboard extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col md={12} xsHidden>
              <Well className="videoWell">
                <TurtleYoutube />
              </Well>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} mdOffset={0}>
              <Well className="jumboWell">
                <h1>North West Shelf Flatback Turtle Conservation Program</h1>
                <p>
                  The North West Shelf Flatback Turtle Conservation Program
                  (North West Shelf Flatbacks) is a 30-year, $32.5 million
                  program that aims to conserve flatbacks in WA waters, at
                  nesting beaches and throughout their range, which can include
                  Commonwealth, Northern Territory and Queensland jurisdictions.
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
                  The North West Shelf Flatbacks program is one of two
                  additional conservation programs delivered from the Gorgon Gas
                  Project (via the 2009 Variation Agreement to the
                  <a href="https://www.slp.wa.gov.au/legislation/statutes.nsf/main_mrtitle_76_homepage.html">
                    Barrow Island Act 2003
                  </a>).
                </p>
                <p>
                  <strong>More content to come soon.</strong>
                </p>
              </Well>

              <Well>
                Get Involved Volunteering opportunities We run two monitoring
                programs each year, which provide opportunities for volunteers
                to get involved with and learn more about the program: Thevenard
                Island Accommodation Thevenard Island is one of the Mackerel
                Islands, a group of 10 islands off the coast of Onslow, WA. The
                island is accessed by a 45-minute boat trip. Staff and
                volunteers will stay at fully self-contained cabins. Cabins have
                two to five bedrooms with two single beds in each bedroom, so
                staff and volunteers will be expected to share. When possible,
                gender specific rooms will be allocated. Cost Covered: -
                Transport from Perth to Onslow by plane and from Onslow to
                Thevenard Island by boat and return. - Food and accommodation on
                Thevenard Island. Not covered: - Food and accommodation in
                Perth/Onslow prior to and after the trip to Thevenard Island. -
                Transport to and from the airport in Perth. - International
                volunteers are expected to have their own personal travel and
                health insurance. - Personal expenses. Delambre Island
                Accommodation Delambre Island is one of the islands of the
                Dampier Archipelago, off Point Sampson. Staff and volunteers
                will camp on the beach, so staff and volunteers will be expected
                to share. When possible, gender specific tents will be
                allocated. Cost Covered: - Transport Karratha and from Karratha
                to Delambre Island by boat and return. - Food and accommodation
                on Delambre Island. Not covered: - Food and accommodation in
                Perth/Onslow prior to and after the trip to Thevenard Island. -
                Transport to and from the airport in Perth. - International
                volunteers are expected to have their own personal travel and
                health insurance. - Personal expenses. Major responsibilities
                Volunteers will help with research on flatback turtles. Duties
                will include: Patrolling the beach at night for nesting turtles;
                tagging; measuring; taking skin biopsy; deploying satellite
                tags; patrolling the beach and counting tracks during the day;
                monitoring nesting success and hatching success; data entry
                Shifts will vary due to tides, the number of turtles on the
                beach and the number of staff/volunteers available, however
                volunteers should expect long hours working under difficult
                conditions (approximately 5-8 hours per night). Requirements All
                participants must be physically able to - walk the beach at
                night for five/six hours carrying 6kg - walk on uneven terrain
                (rocks, soft sand) - walk 6 - 12km in hot (30-40°C) daytime
                conditions - lift 15kg - Applicants must, present fit for work
                whilst on duty and act in accordance with the Department of
                Parks and Wildlife’s Code of Conduct. Senior First Aid
                qualification is desirable.
              </Well>

              <Well>
                The flatback story About Flatback Turtles The first written
                description of the flatback turtle is thought to be from Lort
                Stokes, form his “Discoveries in Australia with an account of
                the coasts and rivers explored and surveyed during the voyage of
                H.M.S. Beagle In the years 1837-43” “DELAMBRE ISLAND On the 27th
                [August, 1840] we crossed over to Delambre Island, on which a
                large party landed in the afternoon. A few turtle were here
                taken, of a different kind from any we had seen before, and
                apparently a cross between the Hawk's Bill and the Green
                Turtle.“ Despite this early recognition that they looked
                superficially different to hawksbill and green turtles it took
                over 100 years for flatbacks to be officially described as a
                separate species. The scientific name Natator depressus comes
                from the Latin: Natator meaning swimmer and depressus meaning
                sunken or low, referring to the low, flattened dome of the
                carapace. Flatback turtles have a smooth shell with scales that
                don’t overlap. They are an olive green colour. They are
                distinguished from other species by scale pattern and typically
                have four pairs of costal scales, one pair of prefrontal scales
                and one pre-occular scale between each eye and nostril. [Insert
                interactive turtle scale images – 20170422 Flatback Turtle body
                interactive_draft2.pdf] Conservation status: Vulnerable Adult
                female turtles have a curved carapace length of 88cm-98cm and
                weigh 50-125 kg. - Distribution: Flatback turtles have a
                restricted distribution compared to other turtle species, all
                recorded nests are in northern Australia, from the Pilbara and
                Kimberley in WA through the NT down to southern QLD. Flatbacks
                feed in waters over the Australian continental shelf and as far
                as Papua New Guinea and southern Indonesia. There are several
                management units across northern Australia, these are distinct
                breeding groups, so turtles from Western Australia would not,
                for example, migrate to Queensland. Major rookeries in WA
                include the east coast of Barrow Island with about 1,700 nesting
                females per year and Mundabullangana Beach with about 1,600
                nesting females per year. Several other areas host hundreds to
                thousands of nesting females each year, including Eighty Mile
                Beach, Cape Dommett, Montebello Islands, Dampier Archipelago
                Islands and the island chains between Dampier and Exmouth Gulf.
                - Diet: Flatback turtles are carnivorous, however, little is
                known about what flatback turtles eat and it is the subject of
                current research. Hatchlings appear to feed on macro zooplankton
                and adults on soft-bodied sea creatures that live on the ocean
                floor such as sponges, soft corals, feather stars and sea pens.
                Much of the historical information on diet comes from looking at
                the stomach contents of turtles that strand on beaches
                throughout WA. More recently, however, we have been able to put
                satellite trackers on to female turtles after they finish laying
                eggs, see www.seaturtle.org. By following the tracks of several
                female flatback turtles when they migrate after laying we have
                been able to determine hotspots of activity which point to where
                flatbacks are feeding. Near-shore feeding grounds are 10-100m
                deep, whilst further offshore there are larger foraging grounds
                off the northwest Kimberley coast between 50-100m deep. A
                collaborative project with WAMSI has been able to determine the
                types of sea creatures that are abundant in these areas. To read
                more about this and to see some great videos of creatures on the
                sea floor see these news articles:
                http://northwestatlas.org/node/1667
                http://northwestatlas.org/node/1665 - Life Cycle: - [animation:
                typical turtle life cycle] Most marine turtles have a similar
                life cycle. The eggs are left to incubate in the sand and once
                the hatchlings emerge they make their own way down the beach
                into the ocean. Most turtle species nest on beaches next to
                oceanic currents that take the hatchlings out into open ocean
                for the next phase of the juvenile turtle, known as the “lost
                years”, where the turtles live a pelagic lifestyle out in the
                open ocean. Flatbacks are a little different from this.
                Hatchling flatback turtles have an active swimming phase once
                they reach the ocean. Flatbacks tend to nest on sheltered
                beaches, the hatchlings must swim out to deeper waters quickly
                to avoid predator- rich near-shore waters. We know that flatback
                hatchlings and juveniles stay closer to shore than other species
                of turtles, foraging in water over the continental shelf. Very
                little else is known about this post-hatchling phase. When the
                hatchlings mature the juvenile turtles come back closer to shore
                and mature further until they are old enough to breed. Breeding
                often occurs in breeding aggregations close to the shore and
                females may mate with more than one male. The females then haul
                themselves up onto suitable beaches to choose a spot to lay a
                clutch of eggs. Turtles can lay several clutches of eggs during
                a season and females may emerge every two weeks to do this. -
                [video: flatback nesting]
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
