import React, { Component } from "react";
import "./ProfileStyle.css";
import {
  ProfileSkills,
  ProfileComponent,
  ProfileList,
  ProfileItem,
  Span,
  Skills,
  SkillsDesc,
  Bar,
  BarPerc,
  BarParent,
  ParentSpan,
} from "./ProfileStyle.js";
class Profile extends Component {
  state = {
    BarList: [],
  };

  render() {
    let skill = "",
      prec = "",
      className = "";
    const barList = [];
    for (let x = 0; x <= 2; x++) {
      if (x === 0) {
        skill = "Bootstrap";
        prec = "100%";
        className = "sp1";
        /* this.setState({ skill, perc, className }); */
      } else if (x === 1) {
        skill = "css";
        prec = "90%";
        className = "sp2";
        /* this.setState({ skill, perc, className }); */
      } else if (x === 2) {
        skill = "React";
        prec = "70%";
        className = "sp3";
        /* this.setState({ skill, perc, className }); */
      }

      barList.push(
        <Bar key={x}>
          <SkillsDesc>{skill}</SkillsDesc>
          <BarPerc>{prec}</BarPerc>
          <BarParent>
            <ParentSpan className={className}></ParentSpan>
          </BarParent>
        </Bar>
      );
    }

    console.log(barList);

    return (
      <ProfileSkills>
        <div className="container">
          <ProfileComponent>
            <h2 className="profile-title">
              <span>My </span>Profile
            </h2>
            <ProfileList>
              <ProfileItem>
                <Span>Name</Span>
                Ahmed Essam
              </ProfileItem>
              <ProfileItem>
                <Span>Birthday </Span>
                10 - 11 - 1993
              </ProfileItem>
              <ProfileItem>
                <Span>Address</Span>
                Tanta
              </ProfileItem>
              <ProfileItem>
                <Span>Phone</Span>
                01116678685
              </ProfileItem>
              <ProfileItem>
                <Span>Email</Span>
                ahmedessamsakr22@gmail.com
              </ProfileItem>
              <ProfileItem>
                <Span>Website</Span>
                <Span className="web">www.google.com</Span>
              </ProfileItem>
            </ProfileList>
          </ProfileComponent>

          <Skills>
            <h2 className="skills-title">
              Some <span>skills</span>
            </h2>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            {barList}
          </Skills>
        </div>
      </ProfileSkills>
    );
  }
}

export default Profile;
