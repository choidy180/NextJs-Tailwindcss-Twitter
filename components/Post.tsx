import Image from "next/image";
import { AutoHeightImageWrapper } from "./AutoHeightImageBox";

export default function Post(props){
  return (
    <div className="w-[calc(100% - 64px)] h-auto p-3 border-solid border-b-[.6px] border-gray-300 pl-[64px] relative flex justify-start items-start">
      <div className="absolute w-[42px] h-[42px] left-3 bg-red-500 top-3 rounded-full overflow-hidden flex justify-center items-center">
        <img src={props?.userImg} alt="" className="absolute w-[42px]" />
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <p className="text-xl text-white font-semibold">{props?.useremail}</p>
        <p className="text-lg text-white mt-[0px]">{props?.text}</p>
        {props?.image && (
          <AutoHeightImageWrapper>
            <Image
              layout="fill"
              objectFit='contain'
              src={props?.image}
              alt={"image"}
              className="autoImage"
            />
          </AutoHeightImageWrapper>
        )}
      </div>
      {/* <button className="absolute right-2 bottom-2" onClick={()=> console.log(props)}>데이터 보기</button> */}
    </div>
  )
}