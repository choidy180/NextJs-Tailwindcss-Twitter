import { getAuth } from "firebase/auth";
import Image from "next/image";
import { EllipsisHorizontal} from "react-ionicons";
import Moment from "react-moment";
import { VscTrash } from "@react-icons/all-files/vsc/VscTrash";
import { IoChatbubbleEllipsesOutline } from "@react-icons/all-files/io5/IoChatbubbleEllipsesOutline";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiOutlineShareAlt } from "@react-icons/all-files/ai/AiOutlineShareAlt";
import { AutoHeightImageWrapper } from "./AutoHeightImageBox";
import { HiOutlineChartBar } from "@react-icons/all-files/hi/HiOutlineChartBar"
import { IoAddOutline } from "@react-icons/all-files/io5/IoAddOutline";
import { dbService, storageService } from "../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Comment from "./Comment";
import Link from "next/link";

export default function Post(props){
  const auth = getAuth();
  const SwalContent = withReactContent(Swal);
  const swalWithBootstrapButtons = SwalContent.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: true
  })
  // 포스트삭제
  const deletePost = (id:string) => (event: any) => {
    swalWithBootstrapButtons.fire({
      title: '정말로 삭제하시겠습니까?',
      text: '삭제하신 게시물은 더 이상 복구할 수 없습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '삭제합니다',
      cancelButtonText: '취소합니다',
      reverseButtons: true
    }).then((result) => {
      if(result.isConfirmed){
        const docRef = doc(dbService, "posts", id);
        deleteDoc(docRef)
        .then(()=>{
          console.log("선택하신 게시물이 삭제되었습니다.");
        })
        .catch(error => {
          console.log(error);
        })
        const desertRef = ref(storageService, `posts/${id}/image`);
        // Delete the file
        deleteObject(desertRef)
        .then(()=>{
        })
        .catch(error => {
          console.log(error);
        })
      } else if (
        result.dismiss === SwalContent.DismissReason.cancel
      ) {
      }
    })
  }
  const replyContent = () => (event: any)=> {
    event.preventDefault();
    SwalContent.fire({
      padding: '0px',
      customClass:{
        htmlContainer: '',
      },
      html: (
        <div className="w-full h-auto relative pt-14 pb-6 overflow-auto">
          <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden absolute left-4 top-4">
            <IoAddOutline className="rotate-45 hover:bg-zinc-800 text-white w-10 h-10 absolute top-0 left-0 cursor-pointer"/>
          </div>
          <div className="pl-[66px] pt-3 w-full relative">
            <div className="w-12 h-12 flex justify-center items-center absolute left-6 top-3 rounded-full overflow-hidden">
              <Image
                layout="fill"
                objectFit='contain'
                src={props?.userImg}
                alt={"image"}
              />
            </div> 
            <p className="w-full text-left text-white text-[14px] font-semibold">{props?.username}<Moment fromNow className="font-thin ml-[10px] text-[#95afc0]">{props?.timestamp?.toDate()}</Moment></p>
            <p className="w-full text-left mt-[2px] text-white text-[14px]">{props?.text}</p>     
            <p className="w-full text-left mt-[8px] text-zinc-600 text-[14px]">Replying to <span className="text-[#1D9BF0]">@MinSeok</span></p>   
          </div>
          <div className="pl-24 pt-3 w-full relative mt-6 overflow-auto">
            <div className="w-12 h-12 flex justify-center items-center absolute left-6 top-3 rounded-full overflow-hidden">
              <Image
                layout="fill"
                objectFit='contain'
                src={auth?.currentUser?.photoURL}
                alt={"image"}
              />
            </div>
            <Comment {...props}/>
          </div>
        </div>
      ),
      showConfirmButton: false
    })
  }
  return (
    <Link href={`${props?.id}`}>
      <div className="w-[calc(100% - 64px)] h-auto p-3 border-solid border-b-[.6px] border-gray-300 relative flex justify-start items-start cursor-pointer">
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
          <p className="text-lg text-white mt-[0px] pl-[54px]">{props?.text}</p>
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
          <div className="mt-4 w-full flex justify-between items-center">
            <div className="w-full flex justify-center items-center p-2 pt-1">
              <IoChatbubbleEllipsesOutline 
                className="text-[36px] font-this cursor-pointer hover:text-[#0abde3] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"
                onClick={replyContent()}
              />
            </div>
            {auth.currentUser.email == props?.useremail && (
              <div className="w-full flex justify-center items-center p-2 pt-1">
                <VscTrash 
                  className="text-[36px] font-this cursor-pointer hover:text-[#c8d6e5] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"
                  onClick={deletePost(props?.id)}
                />
              </div>
            )}
            <div className="w-full flex justify-center items-center p-2 pt-1">
              <AiOutlineHeart className="text-[36px] font-this cursor-pointer hover:text-[#f53b57] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"/>
            </div>
            <div className="w-full flex justify-center items-center p-2 pt-1">
              <AiOutlineShareAlt className="text-[36px] font-this cursor-pointer hover:text-[#0be881] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"/>
            </div>
            <div className="w-full flex justify-center items-center p-2 pt-1">
              <HiOutlineChartBar className="text-[36px] font-this cursor-pointer hover:text-[#7efff5] hover:bg-[#545658] p-2 rounded-full transition ease-in-out delay-0"/>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}