import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // manually setting the step
  // const step = 3;

  // function handlePrevious() {
  //   alert("previous");
  // }

  // =======================================

  // setting the step using useState

  // for details
  // const arr= useState(1)
  // console.log(arr)

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // ===========================================
  // for experiment
  // const [test, setTest] = useState({fname: "jonas"})

  function handlePrevious() {
    if (step > 1)
      // setStep(step - 1);
      setStep((currStep) => currStep - 1);
  }
  function handleNext() {
    if (step < 3)
      // setStep(step + 1);

      // passing the curr state val as a cb while updating the state based on curr va of the state
      setStep((currStep) => currStep + 1);
    // setStep((currStep) => currStep + 1);

    // =============================

    // bad practice
    // test.fname= "fred"
    // good pra
    // setTest({fname:"fred"})
  }

  function handleClose() {
    // setIsOpen(!isOpen);

    setIsOpen((is) => !is);
  }

  return (
    <>
      <button
        className="close"
        onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.fname} */}
          {/* </p>  */}

          <StepMsg step={step}>{messages[step - 1]}</StepMsg>

          <div className="buttons">
            <Button
              bgclr={"#7950f2"}
              txtclr={"#fff"}
              onClick={handleNext}>
              👈 Previous
            </Button>

            <Button
              bgclr={"#7950f2"}
              txtclr={"#fff"}
              onClick={handleNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMsg({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ bgclr, txtclr, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgclr, color: txtclr }}
      onClick={onClick}>
      {children}
    </button>
  );
}
// function Button(props) {
//   return (
//     <button
//       style={{ backgroundColor: props.bgclr, color: props.txtclr }}
//       onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// }
