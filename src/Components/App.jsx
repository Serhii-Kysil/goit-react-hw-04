import "./App.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchArticles } from "../api";
import { Gallery } from "./ImgGallery/ImgGallery";
import { Loader } from "./Loader/Loader";
import { LoadMore } from "./LoadMore/LoadMore";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  const searchArticles = async (newQuery) => {
    setQuery(`${nanoid()}/${newQuery}`);
    setPage(1);
    setArticles([]);
    setTotalPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchArticles(query.split("/")[1], page);
        setArticles((prevArticles) => [
          ...prevArticles,
          ...fetchedData.results,
        ]);
        setTotalPage(fetchedData.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchArticles} />
      {error && toast.error("Oops,something went wrong, try to reload")}
      {articles.length > 0 && <Gallery items={articles} />}
      {loading && <Loader />}
      {articles.length > 0 && !loading && page !== totalPage && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
