import { SparklesIcon } from "@heroicons/react/outline";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../firebase/firebase";
import Input from "./Input";
import Post from "./Post";

export default function Feed(props){
  const[newContent, setNewContent] = useState([]);
  const getNewPost = async () => {
    const posts = await getDocs(collection(dbService, "posts"));
    const responseDataList = await Promise.all(
      posts.docs.map(document => {
        const postObj = {
          ...document.data(),
          id: document.id,
        }
        setNewContent((prev) => [postObj, ...prev]);
      })
    )
  }
  useEffect(()=>{
    getNewPost();
    onSnapshot(collection(dbService, "posts"), (snapshot) => {
      const PostArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNewContent(PostArray);
    })
  },[])
  return (
    <div className="flex-grow border-solid border-l-[.5px] border-gray-400 max-w-2xl sm:ml-[68px] xl:ml-[340px] border-r-[.5px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-3 px-6 sticky top-0 z-50 bg-black border-b-[.5px] border-solid border-gray-400">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white"/>
        </div>
      </div>
      <Input {...props}/>
      {newContent.map((post, i)=> (
        <Post {...post} key={i}/>
      ))}
    </div>
  )
}