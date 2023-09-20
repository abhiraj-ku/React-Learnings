import { useState } from "react";
import InputBox from "./components/Inputbox";
import "./index.css";
function App() {
  return (
    <>
      <h1 className="text-3xl bg-orange-500">Currency Convertor</h1>
      <InputBox />
    </>
  );
}

export default App;
