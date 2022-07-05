import Image from "next/image";
import { LogoTwitter } from "react-ionicons";

export default function Sidebar(){
  return (
    <div className="
      hidden sm:flex flex-col items-center
      xl:items-start xl:w-[340px] p-2 fixed
    ">
      <div className="
        flex items-center justify-center w-14 h-14
        hoverAnimation p-0 xl:ml-24
      ">
        <LogoTwitter
          width={'30px'}
          height={'30px'}
          color={'red'}
        />
      </div>
    </div>
  )
}