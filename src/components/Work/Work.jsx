import React, { Component } from "react";
import axios from "axios";
import {
  PartDescription,
  WorkPart,
  WorkSection,
  WorkTitle,
  Span,
  Icon,
  PartTitle,
  Line,
} from "./WorkStyle.js";
class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;
    const WorksList = works.map((work) => {
      return (
        <WorkPart key={work.id} first={work.id}>
          <Icon className={Work.icon_name}></Icon>
          <PartTitle>{work.title}</PartTitle>
          <Line />
          <PartDescription>{work.body}</PartDescription>
        </WorkPart>
      );
    });

    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {WorksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
