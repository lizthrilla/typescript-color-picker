import React from 'react';
import './App.css';

import Swatch from './components/Swatch';
import Slider from './components/Slider';

function App() {

    const changeInput = (e : React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value)
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Typescript Color Picker</h1>
            </header>
            <Swatch/>
            <Slider changeInput={changeInput} />
        </div>
    );
}

export default App;
