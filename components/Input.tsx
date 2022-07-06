import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic";
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'
import { addDoc } from "@firebase/firestore";

export default function FeedInput(props){
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    // const docRef = await addDoc
  }

  const addImageToPost = (e) => {
  }

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  }
  useEffect(() => {
    console.log('window.innerHeight', window.innerHeight);
    // new Picker({...props, data});
  },[]);
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-scroll scrollbar-hide ${loading && "opacity-60"}`}>
      <div className="h-11 w-11 rounded-full cursor-pointer flex justify-center items-center overflow-hidden">
        <img src="/5F5DA47C-79D5-45AD-ACCA-5E15B09E015A.jpeg" alt="" />
      </div>
      <div className="divide-y divide-gray-700 w-full">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
          <textarea
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows={Number(2)}
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h[50px]"
          />

          {selectedFile && (
            <div className="relative">
              <div 
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={()=>setSelectedFile(null)}
              >
                <XIcon className="text-white h-5"/>
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        {/* {!loading && (*/}
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={()=>filePickerRef.current.click()}>
              <PhotographIcon className="text-[#1d9bf0] h-[22px]"/>
              <input
                type="file"
                ref={filePickerRef}
                hidden
                onChange={addImageToPost}
              />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon" onClick={()=> {
              setShowEmojis(!showEmojis)
            }}>
              <EmojiHappyIcon className="text-[#f00] h-[22px]"/>
            </div>

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]"/>
            </div>
              {/* <Picker
                // onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "456px",
                  marginLeft: "-40px",
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              /> */}
          </div>
          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50"
            disabled={!input && !selectedFile}
            onClick={sendPost}
          >
            Tweet
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  )
}