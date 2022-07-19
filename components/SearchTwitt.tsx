import { BiSearch } from "@react-icons/all-files/bi/BiSearch"

export default function SearchTwitt(){
  return(
    <div className="w-full relative">
      <input 
        type="text" 
        placeholder="Search Twitter"
        className="w-full p-3 pl-16 text-xl rounded-full bg-transparent border-2 border-solid border-gray-300 focus:border-2 focus:bg-neutral-900 focus:border-solid"
      />
      <BiSearch className="w-8 h-8 text-white absolute top-3 left-5"/>
    </div>
  )
}