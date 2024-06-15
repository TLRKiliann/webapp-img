import { useState } from 'react';
import InputRange from './components/InputRange';
import UploadDownload from './components/UploadDownload';
import './App.css';

function App() {
  const [sizeRange, setSizeRange] = useState<string>("50");
  const [bgRange, setBgRange] = useState<string | undefined>("50");
  const [colors, setColors] = useState<string>("#f5f5f5");

  // convert to number
  const resizerImg: number = Number(sizeRange) * 3;
  const resizeBg: number = Number(bgRange) / 2;

  const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSizeRange(event.target.value);
  };

  const handleBgRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBgRange(event.target.value);
  };

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColors(event.target.value);
  };

  return (
    <div className='main-div'>

      <div>
        <h1>Upload and Display Image</h1>
      </div>

      <div className='div-container'>
        <InputRange sizeRange={sizeRange}
          bgRange={bgRange} 
          handleSize={handleSize}
          colors={colors}
          handleBgRange={handleBgRange}
          handleChangeColor={handleChangeColor}
        />  
        <UploadDownload 
          resizerImg={resizerImg} 
          resizeBg={resizeBg} 
          colors={colors}
        />
      </div>

    </div>
  )
}

export default App
