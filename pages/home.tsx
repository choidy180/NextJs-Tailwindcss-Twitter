import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import RightBox from "../components/RightBox";
import SearchTwitt from "../components/SearchTwitt";
import Sidebar from "../components/Sidebar";


const Home: NextPage = (props) => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-x-[1500px] mx-auto relative">
        <Sidebar {...props["userObj"]}/>
        <Feed {...props["userObj"]}/>
        <RightBox/>
      </main>
    </div>
  )
}

export default Home;
