import React from "react";
import Image from "next/image";

function SelectedMovies({
  title,
  year,
  type,
  nominate,
  poster,
  setNominate,
  movie,
}) {
  function handleDelete() {
    setNominate(nominate.filter(item => item.imdbID!= movie.imdbID))
  }
  return (
    <div>
      <div
        key={movie.imdbID}
        className="flex font-serif justify-between items-center px-5 text-[#FAF7ED] border border-purple-500 py-5 w-5/6 md:px-12"
      >
        <div className="flex space-x-6 items-center ">
          <img src={poster} height={80} width={80} alt={`movie: ${title}`} />
          <div className="flex flex-col">
            <h3 className="w-44 truncate font-bold text-[#FFE7CE]">{title}</h3>
            <h3>{type}</h3>
            <h3>{year}</h3>
          </div>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="transition translate-y-4 ease-in-out delay-150 bg-purple-900 p-[7px] rounded-full shadow-md cursor-pointer hover:-translate-y-1 hover:opacity-50 md:translate-y-0 "
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedMovies;
