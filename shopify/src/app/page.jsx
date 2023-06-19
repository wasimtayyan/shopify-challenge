"use client";

import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import MovieCard from "@/components/MovieCard";
import SelectedMovies from "@/components/SelectedMovies";
import Image from "next/image";
import shopping from "../../public/shopping.png";

export default function Home() {
  const [Search, setSearch] = useState("");
  const [value] = useDebounce(Search, 500);
  const [SearchResult, setSearchResult] = useState([]);
  const [nominate, setNominate] = useState([]);
  const [winner, setWinner] = useState('');
  const [Error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  //

  async function getMovies() {
    setIsLoading(true);
    setError(null);
    setWinner('')
    if (Search.trim() != "" && Search.length > 2) {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${Search}&apikey=6be19735`
      );
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setSearchResult(data.Search);
      } else if (data.Response === "False") {
        setError(data.Error);
        console.log("error");
      }
    } else {
      setSearchResult([]);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, [value]);
  //
  function handleWinner() {
    setSearchResult([]);
    const winnerNumber = Math.floor(Math.random(nominate) * nominate.length);
    setWinner(nominate[winnerNumber]);
    
  }
  
 

  return (
    <main className="flex flex-wrap w-full flex-col md:flex-row ">
      <div className="md:w-1/2 min-h-screen bg-orange-50">
        <div className="container mx-auto px-24">
          <div className="flex py-10 ">
            <Image src={shopping} alt="logo" height={25} width={30}></Image>
            <h2 className="font-bold italic text-lg self-center ">
              the shoppies
            </h2>
          </div>
          <div className="pt-20 pb-10">
            <h1 className=" font-bold text-[#906509] text-5xl">Nominate —</h1>
            <h1 className=" font-bold text-5xl text-[#004c3f]">
              amazing cinema{" "}
            </h1>
            <p className="text-2xl pt-3 font-light">
              Search below to nominate your top 5 favorite movies
            </p>
          </div>
          <SearchInput
            nominate={nominate}
            setSearch={setSearch}
            setIsDisable={setIsDisable}
            isDisable={isDisable}
          />

          {isLoading && (
            <div id="wifi-loader">
              <svg class="circle-outer" viewBox="0 0 86 86">
                <circle class="back" cx="43" cy="43" r="40"></circle>
                <circle class="front" cx="43" cy="43" r="40"></circle>
                <circle class="new" cx="43" cy="43" r="40"></circle>
              </svg>
              <svg class="circle-middle" viewBox="0 0 60 60">
                <circle class="back" cx="30" cy="30" r="27"></circle>
                <circle class="front" cx="30" cy="30" r="27"></circle>
              </svg>
              <svg class="circle-inner" viewBox="0 0 34 34">
                <circle class="back" cx="17" cy="17" r="14"></circle>
                <circle class="front" cx="17" cy="17" r="14"></circle>
              </svg>
              <div class="text" data-text="Searching"></div>
            </div>
          )}
          {Error && <p className="text-red-500 py-4 text-lg">{Error}</p>}
          {nominate.length >= 5 ? (
            <div>
              <h1 className="font-bold text-lg text-[#906509] py-4">
                you choose carefully. now it is time to reveal the winner
              </h1>
              <button
                onClick={handleWinner}
                className="text-white transition translate-y-4 ease-in-out delay-150 bg-[#004c3f] p-[7px] rounded-full shadow-md cursor-pointer hover:-translate-y-1 hover:opacity-50 md:translate-y-0"
              >
                Reveal Winner
              </button>
            </div>
          ) : null}
          {SearchResult?.slice(0, 5).map((movie) => {
            return (
              <MovieCard
                key={movie.imdbId}
                movie={movie}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
                setNominate={setNominate}
                setError={setError}
                setSearchResult={setSearchResult}
                nominate={nominate}
              />
            );
          })}
          {winner ? (
            <div className="py-5 flex flex-col  justify-center items-center">
              <img
                className="justify-self-center"
                src={winner.Poster}
                alt="poster"
                height={300}
                width={200}
              />
              <h2 className="text-xl text-center text-[#004c3f] py-3">
                {winner.Title}
              </h2>
            </div>
          ) : null}
        </div>
      </div>
      <div className="md:w-1/2 bg-emerald-900 min-h-screen">
        <h1 className="text-end p-5 text-[#ffffff] text-xl md:mb-32">
          Nominated {nominate.length} / 5
        </h1>
        {nominate?.map((movie) => {
          return (
            <SelectedMovies
              key={movie.imdbID}
              setNominate={setNominate}
              setIsDisable={setIsDisable}
              nominate={nominate}
              movie={movie}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
            />
          );
        })}
      </div>
    </main>
  );
}
