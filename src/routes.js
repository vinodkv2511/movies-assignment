import { Navigate, createBrowserRouter} from 'react-router-dom';

import MovieDetails from './containers/MovieDetails/MovieDetails';
import CastDetails from './containers/CastDetails/CastDetails';
import Home from './containers/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/movie/:movie_id",
    element: <MovieDetails />
  },
  {
    path: "/cast/:cast_id",
    element: <CastDetails />
  }
]);

export default router;