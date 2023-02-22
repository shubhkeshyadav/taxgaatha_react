import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonUi = (props) => {
  const height = props.height ? props.height : 30;
  return (
    <SkeletonTheme height={height} highlightColor="#444">
      <p>
        <Skeleton count={props.count} />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonUi;
