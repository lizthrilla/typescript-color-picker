import React, { useState, useReducer } from "react";
import "./App.css";

import Swatch from "./components/Swatch";
import Slider from "./components/Slider";

interface hslaColor {
  hue: string,
  saturation: string,
  light: string,
  alpha: string
}

const initialState: hslaColor = {
  hue: "204",
  saturation: "100",
  light: "50",
  alpha: "1"

}

const App = () => {
  const [hue, setHue] = useState<string>("204");
  const [saturation, setSaturation] = useState<string>("100");
  const [light, setLight] = useState<string>("50");
  const [alpha, setAlpha] = useState<string>("1");

  console.log(initialState)

  const hslaReducer = ({ initialState, action }: { initialState: State; action: Action; }) => {
    switch (action.type) {
      case 'SAT':
        return ({...initialState, sat: action.payload})
    }
  }



  // const hslaReducer = (hsla, action) => {
  //   switch (action.type) {
  //     case 'SAT':
  //       return hsla.map((color: any) => ({...color, saturation: action.payload}))
  //     default:
  //       return hsla
  //   }
  // }
  //   const [hsla, hslaDispatch] = useReducer(hslaReducer, initialState)
  //   console.log(hsla)

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
