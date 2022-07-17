import { getAuth } from "firebase/auth";
import Image from "next/image";
import { EllipsisHorizontal } from "react-ionicons";
import Moment from "react-moment";
import { AutoHeightImageWrapper } from "./AutoHeightImageBox";

export default function Post(props){
  const auth = getAuth();
  return (
    <div className="w-[calc(100% - 64px)] h-auto p-3 border-solid border-b-[.6px] border-gray-300 relative flex justify-start items-start">
      <div className="absolute w-[42px] h-[42px] left-3 bg-red-500 top-3 rounded-full overflow-hidden flex justify-center items-center">
        {props?.userImg && (
          <Image
            layout="fill"
            objectFit='contain'
            src={props?.userImg}
            alt={"image"}
            className="autoImage"
          />
        )}
      </div>
      {auth.currentUser.email == props?.useremail && (
        <EllipsisHorizontal
          width={"20px"}
          height={"20px"}
          color={"#e9e9e9"}
          style={{
            position: 'absolute',
            right: '12px',
            cursor: 'pointer',
          }}
        />
      )}
      <div>{props?.email}</div>
      <div className="w-full flex flex-col justify-start items-start">
        <p className="text-xl text-white font-semibold pl-[54px]">{props?.username}<Moment fromNow className="font-thin ml-4 text-[#95afc0]">{props?.timestamp?.toDate()}</Moment> </p>
        <p className="text-lg text-white mt-[0px] pl-[54px]" onClick={()=>{console.log(props)}}>{props?.text}</p>
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
    </div>
  )
}