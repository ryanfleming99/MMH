import React from "react";

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <h1 className="text-white opacity-20 font-bold lg:text-1xl md:text-2xl sm:text-1xl py-2">
      {breadcrumb}
    </h1>
  );
};

export default Breadcrumb;
