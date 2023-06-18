import React from "react";

function SelectedMovies({
  title,
  year,
  type,
  nominate,
  poster,
  setNominate,
  movie,
  setIsDisable,
}) {
  function handleDelete() {
    setNominate(nominate.filter((item) => item.imdbID != movie.imdbID));
    setIsDisable(false)
  }
  return (
    <div>
      <div className="flex font-serif justify-between items-center  px-5 text-[#FAF7ED] border border-green-700   md:px-12 mx-8 mb-10">
        <div className="flex space-x-6 items-center mines">
          <img src={poster} height={100} width={100} alt={`movie: ${title}`} />
          <div className="flex flex-col">
            <h3 className=" truncate font-bold text-[#FFE7CE]">{title}</h3>
            <h3>{type}</h3>
            <h3>{year}</h3>
          </div>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="transition translate-y-4 ease-in-out delay-150 bg-green-700 p-[7px] rounded-full shadow-md cursor-pointer hover:-translate-y-1 hover:opacity-50 md:translate-y-0 "
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedMovies;
