import { useState } from 'react';
import InputRange from './components/InputRange';
import UploadDownload from './components/UploadDownload';
import './App.css';

type AllStateProps = {
  sizeRange: string;
  bgRange: string;
  opacityBg: string;
  colors: string;
}

function App() {

  // One state for all !
  const [allState, setAllState] = useState<AllStateProps>({
    sizeRange: "50",
    bgRange: "50",
    opacityBg: "50",
    colors: "#f5f5f5",
  });

  // Convert to number
  const resizerImg: number = Number(allState.sizeRange) * 2;
  const reformatShadowBg: number = Number(allState.bgRange) / 2;
  const reformatOpacity: number = Number(allState.opacityBg) / 100;

  const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllState((prev) => ({...prev, sizeRange: event.target.value}));
  };

  const handleBgRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllState((prev) => ({...prev, bgRange: event.target.value}));
  };

  const handleOpacityBg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllState((prev) => ({...prev, opacityBg: event.target.value}));
  };

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllState((prev) => ({...prev, colors: event.target.value}));
  };

  return (
    <div className='main-div'>

      <div>
        <h1>Upload and Display Image</h1>
      </div>

      <div className='div-container'>
        <InputRange 
          sizeRange={allState.sizeRange}
          bgRange={allState.bgRange} 
          opacityBg={allState.opacityBg}
          colors={allState.colors}
          handleSize={handleSize}
          handleBgRange={handleBgRange}
          handleOpacityBg={handleOpacityBg}
          handleChangeColor={handleChangeColor}
        />  
        <UploadDownload
          resizerImg={resizerImg} 
          reformatShadowBg={reformatShadowBg} 
          reformatOpacity={reformatOpacity}
          colors={allState.colors}
        />
      </div>

    </div>
  )
}

export default App
