"use client";
import React, { useState } from "react";

function MovieCard({
  title,
  year,
  type,
  nominate,
  setNominate,
  movie,
  setError,
  
}) {
  const [isDisable, setIsDisable] = useState(false);
  function handleClick() {
    if (nominate.length < 5) {
      setNominate([...nominate, movie]);
      setError(null);
    } 
    // else if (nominate.length > 4) {
    //   setError("Nominated list can't include more than 5 movies!");
      
    // }
  }
  const hiden = nominate.includes(movie) ? "hidden" : "";
  return (
    <div className="border-t flex justify-between items-center mt-5 py-5 px-5 border-emerald-900">
      <div>
        <h3 className="font-bold  text-emerald-800 w-20 truncate md:w-48">
          {title}
        </h3>
        <h5 className="text-emerald-600">
          <span>{year}</span>•<span>{type}</span>
        </h5>
      </div>
      <div>
        <button
          onClick={handleClick}
          className={`px-4 py-2 border bg-emerald-900 text-white  rounded-lg hover:text-emerald-600  hover:bg-transparent hover:border hover:border-emerald-600 cursor-pointer ${hiden}`}
        >
          Nominate
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
