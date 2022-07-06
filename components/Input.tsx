import Image from "next/image";
import { useState } from "react"
import { ImageOutline } from "react-ionicons";

export default function Input(){
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
      <div className="w-11 h-11 rounded-full cursor-pointer flex justify-center items-center overflow-hidden">
        <img src="/5F5DA47C-79D5-45AD-ACCA-5E15B09E015A.jpeg" alt="" className="w-full" />
      </div>
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            rows={Number("2")}
            placeholder="What's happening?"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
          <div className="relative">
            <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer" onClick={() => setSelectedFile(null)}>
              <ImageOutline
                width={"10px"}
                height={"10px"}
                color={"#fff"}
              />
            </div>
            {/* <Image
              src={selectedFile}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-2xl max-h-80 object-contain"
            /> */}
            <img
              src={selectedFile}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}