import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react"
import { dbService, storageService } from "../firebase/firebase";
import { addDoc , collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { PersonCircleOutline } from "react-ionicons";
import { PickerProps } from "emoji-mart";
import data from "@emoji-mart/data";

export default function Input(props){
  console.log(props.photoURL);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(dbService, "posts"),{
      // id: session.user.uid,
      // username: session.user.name,
      // userImg: session.user.image,
      // tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storageService, `posts/${docRef.id}/image`);
    if(selectedFile){
      await uploadString(imageRef, selectedFile, "data_url").then(async()=>{
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(dbService, "posts", docRef.id),{
          image: downloadURL,
        })
      })
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  }

  // 이미지 미리보기
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    }
  }

  // 이모지 인터페이스
  interface EmojiPickerProps {
    onEmojiSelect: (e: PickerProps) => void;
  }

  // 이모지 피커
  const EmojiPicker: React.FC<EmojiPickerProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null);

    import("emoji-mart").then(
      ({ Picker }: any) => new Picker({ ...props, data, ref })
    );

    return <div ref={ref} className="absolute mt-[360px] ml-[10px] scale-75"/>;
  };

  const addEmoji = (e: any) => {
    let sym = e.unified.split("-");
    let codesArray: any = [];
    sym.forEach((el: any) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  return (
    <div className={`border-b-[.6px] border-solid border-gray-300 py-4 px-3 flex space-x-3 overflow-scroll scrollbar-hide ${loading && "opacity-60"}`}>
      <div className="h-11 w-11 rounded-full cursor-pointer flex justify-center items-center overflow-hidden">
        {props.photoURL ? 
          <img src={props.photoURL} alt="" className=" h-full" /> :
          <PersonCircleOutline
            width={"32px"}
            height={"32px"}
            color={"white"}
          />
        }
      </div>
      <div className="divide-y divide-gray-700 w-[calc(100%-42px)]">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
          <textarea
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows={Number(2)}
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[70px]"
          />

          {selectedFile && (
            <div className="relative">
              <div 
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer textbox"
                onClick={()=>setSelectedFile(null)}
              >
                <XIcon className="text-white h-5"/>
              </div>
              {/* <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              /> */}
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
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]"/>
            </div>

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]"/>
            </div>
            {showEmojis && <EmojiPicker onEmojiSelect={addEmoji}/>}
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