import React from 'react'

interface Props {
    changeInput: () => void
}
const Slider = (Props: any) => {

    return (
        <input type="range" id="slider"
            onChange={e => Props.changeInput(e)}
            min={0}
            max={100}/>
    )
}

export default Slider
