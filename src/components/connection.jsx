import React from "react";

import LinkedIn from "../assets/image/Homepage/SVG/Asset 455.svg";
import Twitter from "../assets/image/Homepage/SVG/Asset 456.svg";
import FaceBook from "../assets/image/Homepage/SVG/Asset 457.svg";
import Discord from "../assets/image/Homepage/SVG/Asset 458.svg";

// interface logDescription {
//   source: string
//   alt: string
// };

const ConnectionItem = ({ source, alt }) => {
  return (
    <img src={source} alt={alt} className="h-20 w-25 mx-10" />);
};

const ConnecttionItems = () => {

  const logDescriptions = [
    {
      source: LinkedIn,
      alt: 'linkedIn'
    },
    {
      source: Twitter,
      alt: 'twitter'
    },
    {
      source: FaceBook,
      alt: 'facebook'
    },
    {
      source: Discord,
      alt: 'discord'
    },
  ]

  return (
    <>
      {logDescriptions.map((p, index) => (<ConnectionItem key={index} source={p.source} alt={p.alt} />))}
    </>

  );
};

export default ConnecttionItems;