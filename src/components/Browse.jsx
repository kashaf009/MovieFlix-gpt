import Nav from "./Nav";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundryContainer from "./SecoundryContainer";


const Browse = () => {
  useNowPlayingMovies();
  



  return (
    <div>
      <Nav />
      <MainContainer  />
      <SecoundryContainer />
    </div>
  );
};

export default Browse;
