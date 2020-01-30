import React from 'react';

interface Props {
    newColor: string
}

const Swatch = (Props: any) => {
    console.log(Props.newColor)
    return (
        <div className='swatch-square' style={{backgroundColor: Props.newColor}} />
    )
}

export default Swatch;
