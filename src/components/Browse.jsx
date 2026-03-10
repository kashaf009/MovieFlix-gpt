import Nav from "./Nav";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundryContainer from "./SecoundryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector((Store) => Store.movies?.nowPlayingMovie);

  if (!movies) return;

  const mainMovies = movies[0];

  console.log(mainMovies);

  const { title, overview } = mainMovies;

  return (
    <div>
      <Nav />
      <MainContainer title={title} overview={overview} />
      <SecoundryContainer />
    </div>
  );
};

export default Browse;
