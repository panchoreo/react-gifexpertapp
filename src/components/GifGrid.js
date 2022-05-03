import React from "react";

import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const {data, loading} = useFetchGifs( category );

  console.log('state', data, loading);
  
  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__shakeX">Loading...</p>}

      <div className="card-grid">
        {data.map((g) => (
          <GifGridItem key={g.id} {...g} />
        ))}
      </div>
    </>
  );
};
