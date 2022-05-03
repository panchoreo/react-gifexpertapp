import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="animate__animated animate__fadeInDown card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
