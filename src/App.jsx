import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NavLayout from "./layouts/NavLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ShowsPage from "./pages/ShowsPage";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import ShowReviews from "./pages/ShowReviews";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/shows/:showId" element={<ShowDetailsPage />}>
            <Route path="" element={<ShowReviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
