import SearchTwitt from "./SearchTwitt";
import TrendForYou from "./TrendForYou";

export default function RightBox(){
  return (
    <div className="pt-3 pb-16 w-[360px] flex-col justify-start items-center pl-4 hidden lg:flex">
      <SearchTwitt/>
      <TrendForYou/>
    </div>
  )
}