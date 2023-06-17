"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import MovieCard from "@/components/MovieCard";
import SelectedMovies from "@/components/SelectedMovies";

const queryClient = new QueryClient();

export function Home() {
  const [Search, setSearch] = useState("");
  const [value] = useDebounce(Search, 700);
  const [SearchResult, setSearchResult] = useState([]);
  const [nominate, setNominate] = useState([]);
  const [isDisable, setIsDisable] = useState(false);

  //
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${Search}&apikey=6be19735`)
      .then((res) => res.json())
      .then((data) => setSearchResult(data.Search));
  }, [value]);

  //
  return (
    <main className="flex flex-wrap w-full flex-col md:flex-row ">
      <div className="md:w-1/2 ">
        <SearchInput 
        nominate={nominate}
        setSearch={setSearch} />

        {SearchResult?.slice(0, 5).map((movie) => {
          return (
            <MovieCard
              key={movie.imdbId}
              movie={movie}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              setNominate={setNominate}
              nominate={nominate}
            />
          );
        })}
      </div>
      <div className="md:w-1/2 ">
        {nominate?.map((movie) => {
          return (
            <SelectedMovies
              key={movie.imdbID}
              setNominate={setNominate}
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

function HomeProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
export default HomeProvider;
