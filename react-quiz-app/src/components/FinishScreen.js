import React from "react";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        <strong>Score: </strong> {points}/{maxPossiblePoints} ~ (
        {Math.ceil(percentage)})%
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}>
        Retake quiz
      </button>
    </>
  );
}

export default FinishScreen;
