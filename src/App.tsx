import React, { useReducer } from "react";
import "./App.css";

import Swatch from "./components/Swatch";
import Slider from "./components/Slider";

interface State {
  hue: string,
  sat: string,
  light: string
}
interface Action { 
  type: string
  payload: string

}

const initialState = {
  hue: '250',
  sat: '100',
  light: '50'
}
const colorReducer = (state:State, action:Action) => {
  switch (action.type) {
    case 'HUE':
      return {...state, hue: action.payload}
    case 'SAT':
      return {...state, sat: action.payload}
    case 'LIGHT':
      return {...state, light: action.payload}
    default:
      return {...state}
  }
}

const App = () => {
  // const [hue, setHue] = useState<string>("204");
  // const [saturation, setSaturation] = useState<string>("100");
  // const [light, setLight] = useState<string>("50");
  // const [alpha, setAlpha] = useState<string>("1");
  const [state, dispatch] = useReducer(colorReducer, initialState)


  const newColor: string = state ? `hsl(${state.hue}, ${state.sat}%, ${state.light}%)` : 'hsl(100, 100%, 50%)';

  const onSliderChange = (e:any, type:string) => {
    const value = e.target.value 
    dispatch({ type: type, payload: value})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typescript Color Picker</h1>
      </header>
      <Swatch newColor={newColor}/>
      <Slider changeInput={onSliderChange} sliderType={"HUE"} max="360" value={state.hue} />
      <Slider changeInput={onSliderChange} sliderType={"SAT"} max="100" value={state.sat} /> 
      <Slider changeInput={onSliderChange} sliderType={"LIGHT"} max="100" value={state.light} />

    </div>
  );
};

export default App;
