import { useRouter } from "next/router"

interface LinkProps {
  Icon: any,
  text: string,
  active?: boolean
}

export default function SidebarLink({Icon, text, active}:LinkProps){
  const router = useRouter();
  return (
    <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`} onClick={()=> active && router.push("/")}>
      <Icon className="h-7"/>
      <span className="hidden  xl:inline">{text}</span>
    </div>
  )
}