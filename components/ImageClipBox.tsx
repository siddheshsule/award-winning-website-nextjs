import React from "react";

export const ImageClipBox = ({
  src,
  clipClass,
}: {
  src: string;
  clipClass: string;
}) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);
