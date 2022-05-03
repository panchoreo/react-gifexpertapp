import React, { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  // const categories= ['One Punch', 'Samaray X', 'Dragon Ball']
  const [categories, setCategories] = useState(["One Punch"]);
  return (
    <>
      <h2>Gif expert app</h2>
      <AddCategories setCategories={setCategories} />
      <hr />

      {categories.map((c, i) => (
        <GifGrid key={`cat-${i}-${c}`} category={c} />
      ))}
    </>
  );
}
