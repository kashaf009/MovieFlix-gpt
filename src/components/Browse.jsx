import Nav from "./Nav";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Nav />
    </div>
  );
};

export default Browse;
