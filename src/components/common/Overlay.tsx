import React from "react";

const Overlay = ({ children }: { children: React.ReactNode }) => {
  return { children };
};

Overlay.Modal = () => {
  return <div className="overlay absolute inset-0 bg-black bg-opacity-50" />;
};

Overlay.StatusMedia = () => {
  return (
    <div className="wrapper__image-content z-5 absolute inset-2.5 rounded-md bg-[rgba(0,0,0,0.1)]" />
  );
};

export default Overlay;
