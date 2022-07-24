import { SparklesIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import RightBox from "../components/RightBox";
import Sidebar from "../components/Sidebar";

const PostPage: NextPage = (props) => {
  const [getData, setGetData] = useState<any>();
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const idx = String(router.query.idx);
  // const getContent = async () => {
  //   const data = doc(dbService, "posts", idx);
  //   const dataSnap = await getDoc(data);
  //   setGetData(dataSnap.data());
  //   console.log("GET DATA COMPLETE!");
  //   return;
  // }
  // useEffect(()=>{
  //   onSnapshot(doc(dbService, "posts", idx), (snapshot) =>{
  //     setGetData(snapshot.data());
  //   })
  // })
  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(
  //         collection(dbService, "posts", idx, "reply"),
  //         orderBy("timestamp", "desc")
  //       ),
  //       (snapshot) => setComments(snapshot.docs)
  //     ),
  //   [dbService,idx]
  // );
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-x-[1500px] mx-auto relative">
        <Sidebar {...props["userObj"]}/>
        <div className="flex-grow border-solid border-l-[.5px] border-gray-400 max-w-2xl sm:ml-[68px] xl:ml-[340px] border-r-[.5px]">
        <div className="text-[#d9d9d9] flex items-center sm:justify-between py-3 px-6 sticky top-0 z-50 bg-black border-b-[.5px] border-solid border-gray-400">
          <h2 className="text-lg sm:text-xl font-bold">Twitt</h2>
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
            <SparklesIcon className="h-5 text-white" onClick={()=>console.log(comments)}/>
          </div>
        </div>
        </div>
        <RightBox/>
      </main>
    </div>
  )
}

export default PostPage;