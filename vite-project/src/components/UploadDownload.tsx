import { useState } from "react";
import "./styles/UploadDownload.css";

const UploadDownload = ({resizerImg, resizeBg, colors}: {
    resizerImg: number, 
    resizeBg: number, 
    colors: string}) => {

    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
        } else {
            setSelectedImage(null);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    const downloadImage = () => {
        if (selectedImage) {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(selectedImage);
            link.download = selectedImage.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            console.log("No img to download !");
        }
    };

    console.log(colors, "colors")

    return (
        <div className="upload-download-container">

            {selectedImage !== null ? (
                <div className="img-container">
                    <div className='img-box' style={{background: `${colors}`}}>
                        <img
                            alt="not found"
                            width={resizerImg}
                            src={URL.createObjectURL(selectedImage)}
                            style={{filter: `drop-shadow(10px 
                                10px ${resizeBg}px rgba(10, 10, 10, 0.8))`}}
                        />
                    </div>
                </div>
            ) : (
                <div className='img-container'>
                    <p>No img selected !</p>
                </div>
           )}

            <div className="box-btn">
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => handleFileChange(event)}
                    className="browser-input"
                />
                <button onClick={handleRemoveImage}>Remove</button>
                <button onClick={downloadImage}>Download</button>
            </div>

            <br />

        </div>
    );
};
export default UploadDownload;
