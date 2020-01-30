import React, { useState } from "react";
import "./App.css";

import Swatch from "./components/Swatch";
import Slider from "./components/Slider";

const App = () => {
  const [hue, setHue] = useState<string>("204");
  const [saturation, setSaturation] = useState<string>("100");
  const [light, setLight] = useState<string>("50");
  const [alpha, setAlpha] = useState<string>("1");

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    slider: string
  ): void => {
    const value: string = e.target.value;
    if (slider === "saturation") {
      setSaturation(value);
    } else if (slider === "hue") {
      setHue(value);
    } else if (slider === "light") {
      setLight(value);
    } else if (slider === "alpha") {
      setAlpha(value);
    }
  };

  const newColor: string = `hsla(${hue}, ${saturation}%, ${light}%, ${alpha})`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typescript Color Picker</h1>
      </header>
      <Swatch newColor={newColor}/>
      <Slider changeInput={changeInput} sliderType={"hue"} max="360" value={hue} />
      <Slider changeInput={changeInput} sliderType={"saturation"} max="100" value={saturation} />
      <Slider changeInput={changeInput} sliderType={"light"} max="100" value={light} />
      <Slider changeInput={changeInput} sliderType={"alpha"} max="1" value={alpha} />

    </div>
  );
};

export default App;
