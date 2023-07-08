import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Watchlist from "./components/watchlist/Watchlist";
import Contatct from "./components/contatct/Contatct";
import About from "./components/about/About";
import Error from "./components/error/Error";
import Search from "./components/search/Search";
import Details from "./components/details/Details";
import { useEffect, useState } from "react";
import PreLoader from "./components/loading/PreLoader";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2400);
  }, []);

  return (
    <>
      {pageLoading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/MovielixReactApp" element={<Home />} />
            <Route path="/MovielixReactApp/movies" element={<Movies />} />
            <Route
              path="/MovielixReactApp/movies/:movieId"
              element={<Details />}
            />
            <Route path="/MovielixReactApp/watchlist" element={<Watchlist />} />
            <Route path="/MovielixReactApp/search" element={<Search />} />
            <Route path="/MovielixReactApp/about" element={<About />} />
            <Route path="/MovielixReactApp/contact" element={<Contatct />} />
            <Route
              path="/MovielixReactApp/*"
              element={<Error msg="Page Not Found" btn="true" height={100} />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
