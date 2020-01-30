import React from 'react'

interface Props {
    changeInput: () => void,
    max: string,
    sliderType: string,
    value: string,
}
const Slider = (Props: any) => {

    return (
        <div className='slider-container'>
            <label>{Props.sliderType.toUpperCase()}</label>
            <input 
                type="range" 
                className="slider"
                onChange={e => Props.changeInput(e, Props.sliderType)}
                min={0}
                max={Props.max}
                step={Props.sliderType === 'alpha' ? '0.01' : '1'}
                value={Props.value}
            />
        </div>
    )
}

export default Slider
