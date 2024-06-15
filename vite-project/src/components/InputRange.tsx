import React from 'react';
import './styles/InputRange.css';

type IntputRangeProps = {
    sizeRange: string;
    bgRange: string;
    opacityBg: string;
    colors: string;
    handleSize: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBgRange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOpacityBg: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputRange({ colors, sizeRange, bgRange, opacityBg,
    handleSize,
    handleBgRange,
    handleOpacityBg,
    handleChangeColor }: IntputRangeProps) {    
    return (
        <div className='range-container'>

            <div className='lbl-input'>

                <label htmlFor="imgrange">Size</label>
                <input 
                    type="range" id="imgrange" name="imgrange"
                    value={sizeRange} onChange={(event) => handleSize(event)}
                    min="0" max="100" step="1" 
                />
                <p>{sizeRange}%</p>

            </div>
            
            <hr className='hr-tag' />

            <div className='lbl-input'>

                <label htmlFor="imgbackground">Background</label>
                <input 
                    type="range" id="imgbackground" name="imgbackground"
                    value={bgRange} onChange={(event) => handleBgRange(event)}
                    min="0" max="100" step="1" 
                />
                <p>{bgRange}%</p>
                
            </div>
            
            <hr className='hr-tag' />

            <div className='lbl-input'>

                <label htmlFor="opacitybg">Opacity</label>
                <input 
                    type="range" id="opacitybg" name="opacitybg"
                    value={opacityBg} onChange={(event) => handleOpacityBg(event)}
                    min="0" max="100" step="1" 
                />
                <p>{opacityBg}%</p>
                
            </div>

            <hr className='hr-tag' />

            <div className='lbl-input-color'>
                <label htmlFor="imgcolor">Color Image</label>
                <input 
                    type="color" id="imgcolor" name="imgcolor"
                    value={colors} onChange={(event) => handleChangeColor(event)}
                />
            </div>

        </div>
    );
}