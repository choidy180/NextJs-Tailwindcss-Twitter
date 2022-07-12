import { BellIcon, BookmarkIcon, ClipboardListIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { PersonCircleOutline } from "react-ionicons";
import SidebarLink from "./SidebarLink";

export default function Sidebar(props){
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image 
          src={"/logo-twitter.svg"} 
          width={30} 
          height={30}
        />
      </div>
      <div className="relative w-full space-y-2.5 mt-4 mb-2.5 h-full xl:ml-24 xl:w-[calc(100%-70px)]">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[36px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
          Tweet
        </button>
        {props && 
        <div className="absolute flex left-0 bottom-0 w-[calc(100%-70px)] min-h-[42px] p-0 box-border xl:pl-[54px]">
          <div className="w-[42px] h-[42px] flex justify-center items-center absolute left-[5px] rounded-full overflow-hidden">
            {props.photoURL ? 
              <img src={props.photoURL} alt="" className="w-full h-full" /> :
              <PersonCircleOutline
                width={"42px"}
                height={"42px"}
                color={"white"}
              />
            }
          </div>
          <div className="w-full flex flex-col justify-center items-start">
            {props && 
              <div className="hidden xl:inline">
                <p className="text-lg">{props.email}</p>
                <p className="text-lg text-gray-300">{props.displayName}</p>
              </div>
            }
          </div>
        </div>
        }
      </div>
    </div>
  )
}