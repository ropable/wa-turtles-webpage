// @flow
import React from "react";
import PropTypes from "prop-types";
import { Col, Grid, Panel, Row } from "react-bootstrap";
import axios from "axios";
import { TagCloud } from "react-tagcloud";
// import { WordFreq } from "wordfreq";
import Spinner from "react-spinkit";

import "./Projects.css";
import ProjectRow from "./ProjectRow";
import SearchBar from "./SearchBar";
import AlertRow from "../AlertRow/AlertRow";

type Props = {
  webUrl: string,
  apiParams: string,
  stopWords: PropTypes.array
};

type State = {
  projects: PropTypes.array,
  status: string,
  filterText: string,
  tags: PropTypes.array
};

export default class Projects extends React.Component<Props, State> {
  static defaultProps = {
    webUrl: process.env.REACT_APP_SDIS_URL || "https://sdis.dpaw.wa.gov.au",
    apiParams: "/api/projects/?format=json",
    stopWords: [
      "-",
      "1",
      "2",
      "3",
      "4",
      "5",
      "a",
      "along",
      "an",
      "as",
      "at",
      "and",
      "areathe",
      "be",
      "between",
      "by",
      "for",
      "from",
      "into",
      "in",
      "is",
      "it",
      "its",
      "new",
      "of",
      "on",
      "other",
      "the",
      "their",
      "to",
      "using",
      "will",
      "with"
    ]
  };

  state = {
    projects: [],
    status: "loading",
    filterText: "",
    tags: [
      { value: "adaptive", count: 25 },
      { value: "woylie", count: 18 },
      { value: "management", count: 38 },
      { value: "fire", count: 30 },
      { value: "marine", count: 28 },
      { value: "turtle", count: 25 },
      { value: "flatback", count: 33 }
    ]
  };

  handleFilterTextInput = (filterText: string) => {
    this.setState({ filterText: filterText });
  };

  clearFilterTextInput = () => {
    this.setState({ filterText: "" });
  };

  /**
  * Tokenize SDIS project title_plain and tagline_plain
  *
  * Join SDIS project title and tagline into one string,
  * strip punctuation,
  * split into an array of individual words (incl duplicates),
  * drop stopwords (props.stopWords).
  */
  sdisTokenizer = (projectArray: PropTypes.array) => {
    return projectArray
      .reduce((acc, curr) => {
        return acc + curr.title_plain + curr.tagline_plain;
      }, [])
      .replace(/![a-zA-Z]/g, " ")
      .replace(/[():.]/g, " ")
      .toLowerCase()
      .split(/\s/)
      .filter(x => this.props.stopWords.indexOf(x) < 0);
  };

  /**
   * Calculate word frequencies
   *
   * https://stackoverflow.com/a/30907349
   * wordFreq(["the", "the", "stuff"]) = [{the: 2}, {stuff: 1}]
   */
  wordFreq = (stringArray: PropTypes.array) => {
    return stringArray.reduce(
      (map, wrd) => Object.assign(map, { [wrd]: map[wrd] ? map[wrd] + 1 : 1 }),
      {}
    );
  };

  /**
   * Turn wordFreq output into TagCloud input (update state.tags)
   */
  makeTags = (wfreq: PropTypes.array, cutoff: number) => {
    cutoff = cutoff || 0;
    let ta = [];
    Object.keys(wfreq).forEach(function(k) {
      if (wfreq[k] > cutoff) {
        ta.push({ value: k, count: wfreq[k] });
      }
    });
    return ta;
  };

  componentDidMount() {
    const main = this;
    axios
      .get(main.props.webUrl + main.props.apiParams)
      .then(res => {
        main.setState({
          projects: res.data,
          status: "loaded",
          tags: main.makeTags(main.wordFreq(main.sdisTokenizer(res.data)), 3)
        });
      })
      .catch(error => {
        main.setState({ status: "error" });
      });
  }

  render() {
    const { projects, status, filterText } = this.state;

    if (status === "loaded") {
      let rows = [];
      projects
        .filter(
          project =>
            filterText
              ? project.title_plain
                  .toLowerCase()
                  .indexOf(filterText.toLowerCase()) > -1 ||
                project.tagline_plain
                  .toLowerCase()
                  .indexOf(filterText.toLowerCase()) > -1
              : project
        )
        .forEach(project => {
          rows.push(
            <ProjectRow
              project={project}
              key={project.id}
              webUrl={this.props.webUrl}
            />
          );
        });
      return (
        <div className="content">
          <Grid>
            <Row>
              <Col xs={12}>
                <SearchBar
                  filterText={filterText}
                  onFilterTextInput={this.handleFilterTextInput}
                />
              </Col>

              <Col xs={12}>
                <Panel className="blackbg thumbnail">
                  <TagCloud
                    minSize={16}
                    maxSize={40}
                    tags={this.state.tags}
                    className="simple-cloud"
                    onClick={tag => {
                      this.setState({ filterText: tag.value });
                    }}
                  />
                </Panel>
              </Col>

              {rows}
            </Row>
          </Grid>
        </div>
      );
    } else if (status === "loading") {
      return (
        <div>
          <AlertRow />
          <div className="content">
            <Grid>
              <Row>
                <Col xs={12} md={4}>
                  <Spinner name="ball-beat" color="orange" />
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      );
    } else if (status === "error") {
      const msg = `Error loading data from ${this.props.webUrl}`;
      return (
        <div className="content">
          <AlertRow bsStyle="danger" message={msg} />
        </div>
      );
    }
  }
}
