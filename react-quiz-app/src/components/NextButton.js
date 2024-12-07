import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  const isLastQuestion = index === numQuestions - 1;
  const actionType = isLastQuestion ? "finished" : "nextQuestion";

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: actionType })}>
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;

//way2 before modifications
// import React from "react";

// function NextButton({ dispatch, answer, index, numQuestions }) {
//   if (answer === null) return;
//   //   if (!answer) return;

//   if (index < numQuestions - 1)
//     return (
//       <button
//         className="btn btn-ui"
//         onClick={() => dispatch({ type: "nextQuestion" })}>
//         Next
//       </button>
//     );

//   if (index === numQuestions - 1)
//     return (
//       <button
//         className="btn btn-ui"
//         onClick={() => dispatch({ type: "finish" })}>
//         Finish
//       </button>
//     );
// }

// export default NextButton;
