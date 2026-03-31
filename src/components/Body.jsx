import Nav from "./Nav";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:id",
     element: <MovieInfo/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      
    </div>
  );
};

export default Body;
