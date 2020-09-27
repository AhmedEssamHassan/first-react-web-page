import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfoilioItem,
  BoxItem,
  BpxItemImg,
  Overlay,
  OverlaySpan,
} from "./PortfolioStyle.js";

const Portfolio = () => {
  const [imges, setImges] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImges(res.data.portfolio);
    });
  }, []);

  const portfilioImgs = imges.map((img) => {
    return (
      <BoxItem key={img.id}>
        <BpxItemImg src={img.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </BoxItem>
    );
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfoilioItem active>All</PortfoilioItem>
        <PortfoilioItem>HTML</PortfoilioItem>
        <PortfoilioItem>Photoshop</PortfoilioItem>
        <PortfoilioItem>Wordpress</PortfoilioItem>
        <PortfoilioItem>Mobile</PortfoilioItem>
      </PortfolioList>

      <div className="box">{portfilioImgs}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
