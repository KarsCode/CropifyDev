import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const base64Data = await convertFileToBase64(selectedFile);
      if (base64Data) {
        try {
          const response = await fetch('http://localhost:5555/plantDisease/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ base64Data : base64Data }),
          });

          if (response.ok) {
            console.log('Image uploaded successfully');
            const responseData = await response.json();
            const imageId = responseData.id;
            console.log(`going to ${imageId}`)
            navigate(`/plantDisease/${imageId}`);
            
          } else {
            console.error('Failed to upload image');
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }

      }
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result?.toString().split(',')[1] || '');
      reader.readAsDataURL(file);
    });

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
