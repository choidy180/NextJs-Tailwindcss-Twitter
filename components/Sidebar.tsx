import Image from "next/image";
import { LogoTwitter } from "react-ionicons";
import SidebarLink from "./SidebarLink";

export default function Sidebar(){
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed">
      <div className="flex items-center justify-center w-14 h-14 p-0 xl:ml-24">
        <LogoTwitter
          width={'30px'}
          height={'30px'}
          color={'red'}
        />
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <SidebarLink text="Home" Icon={"home"}/>
        </div>
      </div>
    </div>
  )
}