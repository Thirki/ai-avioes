import Skeleton from "@mui/material/Skeleton";
import React from "react";

interface ISkeletonRowProps {
  gap?: string;
}

export const SkeletonRow: React.FC<ISkeletonRowProps> = ({ gap = "10px" }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      <Skeleton variant="rectangular" height={50} width="100vw" />
      <Skeleton variant="rectangular" height={50} width="100vw" />
      <Skeleton variant="rectangular" height={50} width="100vw" />
      <Skeleton variant="rectangular" height={50} width="100vw" />
    </div>
  );
};
