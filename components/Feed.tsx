import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

export default function Feed(props){
  return (
    <div className="flex-grow border-solid border-l-[.5px] border-gray-400 max-w-2xl sm:ml-[68px] xl:ml-[340px] border-r-[.5px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-3 px-6 sticky top-0 z-50 bg-black border-b-[.5px] border-solid border-gray-400">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white"/>
        </div>
      </div>
      <Input {...props}/>
    </div>
  )
}