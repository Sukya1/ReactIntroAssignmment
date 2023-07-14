import { useState } from "react";
import "./movies.css";
import PropTypes from "prop-types";

function Movies({ text, handleDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);
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
            style={isCompleted ? { textDecoration: "line-through" } : {}}
            className="text"
          >
            {text}
          </p>
        </div>
        <div className="row">
          <div className="col-md-2 p-0">
            <button
              onClick={handleDelete}
              className="btn btn-danger w-75 px-0 m-0 my-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Movies.defaultProps = {
  text: "Untitled To Do Item",
};

Movies.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Movies;

