import { useState } from "react";
import "./movies.css";
import PropTypes from "prop-types";

function Movies({ text, genre, handleDelete}) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isWatched, setIsWatched] = useState(false)
  return (
    <div className="row gy-3">
      <div
        onClick={() => setIsCompleted(!isCompleted)}
        style={isCompleted ? { backgroundColor: "gray" } : {}}
        className="col-md-8 todo m-auto"
      >
        <div className="row pt-3 text-box">
          {/* Note that we are using an embedded JS expression in our JSX */}
          <p
            // style={isCompleted ? { textDecoration: "line-through" } : {}}
            className="text"
          >
            <p> Movie: {text}</p>
            <p> Genre: {genre}</p>
          </p>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <button
              onClick={handleDelete}
              className="btn btn-danger w-50 px-0 m-0 my-1"
            >
              Delete
            </button>
          </div>
          <div className="col-12 p-0">
          <button
             onClick={() => setIsWatched(!isWatched)}
             className="btn btn-primary w-50 px-0 m-0 my-1">
            {isWatched ? "Already Watched" : "Not Watched"}

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Movies.defaultProps = {
  text: "Unamed Movie",
  // This does not work because amain choose as an input
  genre: "unknown", 
};

Movies.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Movies;

