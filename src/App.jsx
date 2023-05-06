import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex rounded-3xl bg-white overflow-hidden font-hanken">
        <div className="p-10 text-center bg-gradient-to-b from-indigo-900 to-indigo-950">
          <p>Your Result</p>
          <div className="w-60 flex justify-center items-center mx-auto m-10 h-60 rounded-full bg-gradient-to-b from-indigo-950 to-indigo-900">
            <p>
              <span className="text-5xl font-bold">76</span> <br />
              of 100{" "}
            </p>
          </div>{" "}
          <div>
            <p className="font-bold text-2xl">Great</p>
          </div>
          <p>
            {" "}
            You scored higher than 65% of the people who have taken these tests.
            Summary Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72
            / 100 Continue
          </p>
        </div>
        <div className="text-black p-10 pr-0 flex items-center text-left w-full">
          <div className="w-full">
            <p className="mb-5 font-bold text-xl">Summary</p>
            <ul className="mr-0 w-full">
              <li className="bg-red-100 p-3 rounded-lg w-full flex items-center gap-80 mb-3">
                <div className="flex gap-3">
                  <img src="/assets/images/icon-reaction.svg" alt="" />
                  <p className="text-red-600">Reaction</p>
                </div>
                <p>
                  <span className="font-bold">72</span> /100
                </p>
              </li>
              <li className="bg-yello-100 p-3 rounded-lg w-full flex items-center gap-80 mb-3">
                <div className="flex gap-3">
                  <img src="/assets/images/icon-memory.svg" alt="" />
                  <p className="text-yellow-600">Memory</p>
                </div>
                <p>
                  <span className="font-bold">72</span> /100
                </p>
              </li>
              <li className="bg-green-100 p-3 rounded-lg w-full flex items-center gap-80 mb-3">
                <div className="flex gap-3">
                  <img src="/assets/images/icon-verbal.svg" alt="" />
                  <p className="text-green-600">verbal</p>
                </div>
                <p>
                  <span className="font-bold">72</span> /100
                </p>
              </li>
              <li className="bg-indigo-100 p-3 rounded-lg w-full flex items-center gap-80 mb-3">
                <div className="flex gap-3">
                  <img src="/assets/images/icon-visual.svg" alt="" />
                  <p className="text-indigo-900">Visual</p>
                </div>
                <p>
                  <span className="font-bold">72</span> /100
                </p>
              </li>
            </ul>
          </div>
        </div>
        Challenge by{" "}
      </div>
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Your Name Here</a>.
    </>
  );
}

export default App;
