import { LogoTwitter } from "react-ionicons";
import SidebarLink from "./SidebarLink";

export default function Sidebar(){
  return (
    <div className="hidden sm:flex flex-col items-start xl:items-start xl:w-[340px] p-2 fixed h-full
      space-y-8 mt-4 mb-2.5 xl:ml-24
    ">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <LogoTwitter
          width={'30px'}
          height={'30px'}
          color={'white'}
        />
      </div>
      <div className="space-y-8 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={"Home"} active/>
        <SidebarLink text="Explore" Icon={"Explore"}/>
        <SidebarLink text="Notifications" Icon={"Notifications"}/>
        <SidebarLink text="Message" Icon={"Message"}/>
        <SidebarLink text="Bookmarks" Icon={"Bookmarks"}/>
        <SidebarLink text="Lists" Icon={"Lists"}/>
        <SidebarLink text="Profile" Icon={"Profile"}/>
        <SidebarLink text="More" Icon={"More"}/>
      </div>
    </div>
  )
}