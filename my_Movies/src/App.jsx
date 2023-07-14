import Movies from "./movies.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();

  function addMovies() {
    let currentInputText = inputRef.current.value || undefined;
    setMovies([...movies, { text: currentInputText, id: Date.now() }]);
  }

  function handleDelete(id) {
    setMovies(
      movies.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <>
      <div className="container board mt-3">
        <div className="row text-center">
          <h1>Movies:</h1>
          <p>
            Click 'Add' to add a new to do and click a todo to cross it off!
          </p>
        </div>
        <div className="row justify-center text-center">
          {movies.map((movie, index) => {
            return (
              <Movies
                key={index}
                text={movie.text}
                handleDelete={() => handleDelete(movie.id)}
              />
            );
          })}
        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-6 ">
            <div className="input-group mb-3">
              <input
                type="text"
                ref={inputRef}
                className="form-control"
                placeholder="Write ToDo Task here..."
                aria-label="ToDoInput"
              />
              <div className="input-group-append">
                <button
                  onClick={addMovies}
                  className="btn btn-primary h-100 m-0"
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
