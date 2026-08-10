import React from "react";

export default function FocalImage({ src, alt, focalPoint, className = "", style = {}, ...props }) {
  const x = focalPoint?.x ?? 50;
  const y = focalPoint?.y ?? 50;

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      style={{
        ...style,
        objectPosition: `${x}% ${y}%`
      }}
      {...props}
    />
  );
}
