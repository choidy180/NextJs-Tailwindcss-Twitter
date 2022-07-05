interface LinkProps {
  Icon: string,
  text: string,
  active?: boolean
}

export default function SidebarLink({Icon, text}:LinkProps){
  return (
    <div className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        />
      <span className="hidden xl:inline">{text}</span>
      <h1>Hello</h1>
    </div>
  )
}