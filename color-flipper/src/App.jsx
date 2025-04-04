import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Purple",
    "Pink",
    "Black",
    "Orange",
    "Grey",
  ];

  return (
    <div>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}>
        <div className="bg-white">
          <h1 className=" font-bold text-5xl p-4 text-center  ">
            Color Flipper
          </h1>
          <p className="italic text-2xl text-center p-8">
            This is <span style={{ color: color }}>{color} </span>colour
          </p>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colors.map((clr) => (
              <button
                key={clr}
                className="outline-none px-4 py-1 rounded-full text-white"
                style={{ backgroundColor: clr }}
                onClick={() => setColor(clr)}>
                {clr}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
