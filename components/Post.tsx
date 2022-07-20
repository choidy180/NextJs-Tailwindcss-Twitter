import { getAuth } from "firebase/auth";
import Image from "next/image";
import { EllipsisHorizontal } from "react-ionicons";
import Moment from "react-moment";
import { VscTrash } from "@react-icons/all-files/vsc/VscTrash";
import { IoChatbubbleEllipsesOutline } from "@react-icons/all-files/io5/IoChatbubbleEllipsesOutline";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiOutlineShareAlt } from "@react-icons/all-files/ai/AiOutlineShareAlt";
import { AutoHeightImageWrapper } from "./AutoHeightImageBox";
import { HiOutlineChartBar } from "@react-icons/all-files/hi/HiOutlineChartBar"
import { dbService, storageService } from "../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export default function Post(props){
  const auth = getAuth();
  // 포스트삭제
  const deletePost = (id:string) => (event: any) => {
    const docRef = doc(dbService, "posts", id);
    deleteDoc(docRef)
    .then(()=>{
      console.log("Your post has been deleted.");
    })
    .catch(error => {
      console.log(error);
    })
    const desertRef = ref(storageService, `posts/${id}/image`);
    // Delete the file
    deleteObject(desertRef)
    .then(()=>{
      console.log("The image of the post you selected has been deleted.");
    })
    .catch(error => {
      console.log(error);
    })
    }
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
        <div className="mt-6 w-full flex justify-between items-center">
          <div className="w-full flex justify-center items-center p-2 pt-1">
            <IoChatbubbleEllipsesOutline className="text-[30px] font-this cursor-pointer hover:text-[#0abde3] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"/>
          </div>
          {auth.currentUser.email == props?.useremail && (
            <div className="w-full flex justify-center items-center p-2 pt-1">
              <VscTrash 
                className="text-[30px] font-this cursor-pointer hover:text-[#c8d6e5] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"
                onClick={deletePost(props?.id)}
              />
            </div>
          )}
          <div className="w-full flex justify-center items-center p-2 pt-1">
            <AiOutlineHeart className="text-[30px] font-this cursor-pointer hover:text-[#f53b57] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"/>
          </div>
          <div className="w-full flex justify-center items-center p-2 pt-1">
            <AiOutlineShareAlt className="text-[30px] font-this cursor-pointer hover:text-[#0be881] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"/>
          </div>
          <div className="w-full flex justify-center items-center p-2 pt-1">
            <HiOutlineChartBar className="text-[30px] font-this cursor-pointer hover:text-[#7efff5] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"/>
          </div>
        </div>
      </div>
    </div>
  )
}