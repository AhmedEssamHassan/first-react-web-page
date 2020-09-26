import React from "react";
import {
  HomeSection,
  HomeContainer,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDescreption,
  HomeBtn,
} from "./HomeStyle";

const Home = () => {
  return (
    <HomeSection>
      <HomeContainer className="container">
        <HomeInformation>
          <HomeTitle>Ahmed Essam</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDescreption>
            Iam a professional{" "}
            <span style={{ color: "#000" }}>UX Designer</span> and Front-End
            Developer creating modern and resposive designs to Web and Mobile.
            Let us work together. Thank you.
          </HomeDescreption>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;
