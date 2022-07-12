export default function Post(props){
  return (
    <div className="w-[calc(100% - 64px)] p-3 border-solid border-b-[.6px] border-gray-300 pl-[64px] relative min-h-[80px] flex justify-start items-start">
      <div className="absolute w-[42px] h-[42px] left-3 bg-red-500 top-3 rounded-full overflow-hidden flex justify-center items-center">
        <img src={props?.userImg} alt="" className="absolute w-[42px]" />
      </div>
      <div className="w-full flex justify-start items-center">
        <p></p>
      </div>
      <button className="absolute right-2 bottom-2" onClick={()=> console.log(props)}>데이터 보기</button>
    </div>
  )
}