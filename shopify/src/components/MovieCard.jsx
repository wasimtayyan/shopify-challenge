"use client";
import React, { useState } from "react";

function MovieCard({
  title,
  year,
  type,
  nominate,
  setNominate,
  movie
}) {
  const [isDisable, setIsDisable] = useState(false);
  function handleClick() {
    if (nominate.length < 5) {
      setNominate([...nominate, movie]);
      setIsDisable(true);
    }
  }
  return (
    <div className="border-t flex justify-between items-center py-5 px-5 border-slate-300">
      <div>
        <h3 className="font-bold  text-purple-700 w-20 truncate md:w-48">
          {title}
        </h3>
        <h5 className="text-purple-700">
          <span>{year}</span>•<span>{type}</span>
        </h5>
      </div>
      <div>
        <button
          onClick={handleClick}
          disabled={isDisable}
          className="px-4 py-2 border bg-purple-700 text-white  rounded-lg hover:text-purple-700  hover:bg-transparent hover:border hover:border-purple-700 cursor-pointer disabled:opacity-25"
        >
          Nominate
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
