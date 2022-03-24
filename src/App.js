import Movie from "./component/Movie";
import Header from "./component/Header";
import "./styles.css";
import { useEffect, useState } from "react";
import { actions, adventures } from "./component/DummyFiles";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const featureUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=a4fb2ae9";

  const searchUrl = "https://www.omdbapi.com/?s=tt3896198&apikey=a4fb2ae9";

  useEffect(() => {
    getMovies(featureUrl);
  }, []);

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((err) => console.log(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(searchUrl + search);
      setSearch("");
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Header />

      <section className="form">
        <p>Search</p>
        <form onSubmit={handleSubmit} className="">
          <input
            type="search"
            value={search}
            className="search"
            onChange={handleChange}
          />
        </form>
      </section>

      {/* {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)} */}

      {movies.length > 0 ? (
        <>
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </>
      ) : (
        <div>
          <div actions={actions} className="card-content">
            <h2 className="cart-header">Actions</h2>
            {actions.map((file) => (
              <div key={file.id} className="bgContent">
                <p>{file.title}</p>
              </div>
            ))}
          </div>

          <div adventures={adventures} className="card-content">
            <h2 className="cart-header">Adventures</h2>
            {adventures.map((file) => (
              <div key={file.id} className="bgContent">
                <p>{file.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
