import React from "react";
import { ShimmerTable, ShimmerText } from "react-shimmer-effects";

const TableShimmer = ({ data }) => {
  return (
    <>
      <ShimmerTable
        row={data?.row ? data?.row : 10}
        col={data?.col ? data?.col : 5}
      />
    </>
  );
};

const TextShimmer = ({ data }) => {
  return (
    <>
      <ShimmerText
        line={data?.line ? data?.line : 5}
        gap={data?.gap ? data?.gap : 10}
        className={data?.className ? data?.className : ""}
      />
    </>
  );
};

export { TableShimmer, TextShimmer };
