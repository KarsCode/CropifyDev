import React, { useState, ChangeEvent } from 'react';
import { VITE_API_URL} from '../setupEnv.tsx';
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"// Use this line wh
import { Button } from './ui/button.tsx';
import { useToast } from "./ui/use-toast"

interface ImageProcessingProps {
  endpoint: string; // Prop to determine the dynamic part of the URL
}

const DisaManImg: React.FC<ImageProcessingProps> = ({ endpoint }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { toast } = useToast()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Test");
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      console.log(e.target.files[0])
    }
  };
// change the handle upload fucntion to do what you want with the base64 data
  const handleUpload = async () => { 
    if (selectedFile) {
      const base64Data = await convertFileToBase64(selectedFile);
      if (base64Data) {
        try {
          const response = await fetch(`${VITE_API_URL}/${endpoint}/upload`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: base64Data }),
          });

          if (response.ok) {
            const responseData = await response.json();
            const detect = responseData.value;



            console.log(detect);
            if(detect === 1)
            toast({
              variant:"destructive",
              title: "Your submission was succesfully recorded: ",
              description: (
                <pre className="mt-2 w-[340px] rounded-md p-4">
                  Fire Detected.
                </pre>
              ),  
            })

            if(detect === 0)
            toast({
              title: "Your submission was succesfully recorded: ",
              description: (
                <pre className="mt-2 w-[340px] rounded-md bg-crophover p-4">
                  No Fire Detected.
                </pre>
              ),  
            })

            if(typeof detect === "string")
            toast({
              title: "Your submission was succesfully recorded: ",
              description: (
                <pre className="mt-2 w-[340px] rounded-md p-4">
                  {detect}
                </pre>
              ),  
            })



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
    <div className='flex flex-col gap-12'>

      <div className='flex flex-col gap-2'>
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" onChange={handleFileChange} className='border-2' />
      </div>
      {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button> */}  
      {/* ugly as hell  */}

      <Button  onClick={handleUpload}> Upload Image </Button>
    </div>
  );
};

export default DisaManImg;
