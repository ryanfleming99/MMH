import React from "react";

const HeroHeading = ({ title }) => {
  return (
    <h2 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl">
      {title}
    </h2>
  );
};

export default HeroHeading;
