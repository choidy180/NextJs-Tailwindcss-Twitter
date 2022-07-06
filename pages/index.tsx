import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-x-[1500px] mx-auto">
        <Sidebar/>
        <Feed/>
        {/* Widgets */}
        
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home;
