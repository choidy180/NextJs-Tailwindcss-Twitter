import { EllipsisHorizontalOutline } from "react-ionicons"
import {IoEllipsisHorizontal} from "@react-icons/all-files/io5/IoEllipsisHorizontal"

export default function TrendForYou(){
  const array = [
    "다시 난 여기", 
    "Antifreeze", 
    "우주를 건너", 
    "Our love is great", 
    "Every letter I sent you.",
    "Tellusboutyourself",
    "I am not your ocean anymore",
    "homesweethome",
  ]
  return (
    <div className="flex flex-col justify-start items-start mt-6 bg-[#141414] w-full rounded-xl overflow-hidden">
      <p className="text-2xl font-bold p-6 ">Trend For you</p>
      {array.map((content, i ) => (
        <div key={i} className="relative w-full mt-6 flex flex-col justify-start items-start p-6  hover:bg-neutral-800 hover:cursor-pointer">
          <p className="text-gray-400 text-lg">Trending in South Korea</p>
          <p className="text-[#ffffff] text-[18px] font-medium">{content}</p>
          <p className="text-base text-slate-300">2,058 Tweets</p>
          <IoEllipsisHorizontal className="w-5 h-5 absolute right-6 top-6 cursor-pointer"/>
        </div>
      ))}
    </div>
  )
}