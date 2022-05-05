import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl">MAKERS</h1>
      <img 
        className="max-w-[300px] mt-7"
        src="https://w.namu.la/s/b84c22572038c86c7d73ec2de8310af4d5d6e76d599f08db5c47755be58f1d4533bf939e6af8af2c0ad4836ef9bf4c1f534c3d8a5a958541089ee6c4d8f7b0a1db79b65792b845712a21ca835c69719200f77104f7d579aa8e650f20981ffce7fdfea8fb3a9863641d9f646518f72d73" 
        alt="California" 
      />
      <h1 className="text-8xl mt-7">
        PRIME<b className="text-9xl -mt-4 leading-3 text-green-900">.</b>
      </h1>
    </div>
  )
}

export default Home;
