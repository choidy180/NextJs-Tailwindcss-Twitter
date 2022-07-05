import { 
  BookmarkOutline, 
  ChatbubbleEllipsesOutline, 
  DocumentTextOutline, 
  FileTrayOutline, 
  HomeOutline, 
  NotificationsOutline, 
  PersonOutline, 
  PlanetOutline 
} from "react-ionicons";

interface LinkProps {
  Icon: string,
  text: string,
  active?: boolean
}

export default function SidebarLink({Icon, text, active}:LinkProps){
  return (
    <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 ${active && "font-bold"}`}>
      {Icon == "Home" && 
        <HomeOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      {Icon == "Explore" && 
        <PlanetOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      {Icon == "Notifications" && 
        <NotificationsOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      {Icon == "Message" &&
        <FileTrayOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      {Icon == "Bookmarks" &&
        <BookmarkOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      {Icon == "Lists" &&
        <DocumentTextOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      {Icon == "Profile" &&
        <PersonOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      {Icon == "More" &&
        <ChatbubbleEllipsesOutline
          width={"26px"}
          height={"26px"}
          color={"#fff"}
        />
      }
      <span className="hidden  xl:inline">{text}</span>
    </div>
  )
}