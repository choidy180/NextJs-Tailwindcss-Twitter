import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LogoApple, LogoGithub, LogoGoogle, LogoTwitter } from "react-ionicons";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { authService } from "../firebase/firebase";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const [newAccount, setNewAccount] = useState<Boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    authService.signOut();
  },[]);

  // 회원가입 <-> 로그인
  const AccountChange = () => {
    setNewAccount((e) => !e);
  }

  // 로그인
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if(newAccount){
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        )
      } else {
        data = await signInWithEmailAndPassword(
          authService,
          email,
          password,
        )
      }
      return router.replace("/home");
    } catch (error) {
      console.log(error);
    }
  }
  // input 입력
  const onChange = (event) => {
    const {
      target: {name, value},
    } = event;
    {name === "email" && setEmail(value)}
    {name === "password" && setPassword(value)}
  }

  // 소셜로그인
  const onSocialClick = async (event) => {
    const name = event.currentTarget.childNodes[0].className.animVal;
    let provider;
    if (name.includes("google")){
      provider = new GoogleAuthProvider();
    }
    if (name.includes("github")){
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    return router.replace("/home");
  }
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black min-h-screen flex max-x-[1500px] mx-auto">
        <div className="w-[calc(100%-440px)] min-h-screen bg-slate-500 relative">
          <Image
            src="/background/292619074_566952298250527_6724294376891564770_n.jpg"
            layout="fill"
            objectFit="cover"
            className="brightness-[50%]"
          />
        </div>
        <form className="absolute min-w-[320px] min-h-[100px] flex justify-start items-center flex-col right-0 top-[80px] translate-x-[calc(-50%+104px)]" onSubmit={onSubmit}>
          <LogoTwitter
            width={"54px"}
            height={"54px"}
            color={"white"}
          />
          <div className="flex justify-start items-center relative w-full mt-11">
            {newAccount ?
              <span className="text-2xl">회원가입</span> :
              <span className="text-2xl">로그인</span>
            }
            {!newAccount && 
              <span className="absolute right-0">비밀번호를 잊어버리셨나요?</span>
            }
          </div>
          <input 
            type="text" 
            name="email"
            placeholder="이메일(example@email.com)" 
            className="HomeInput mt-3 w-full box-border bg-transparent border-gray-400 border-[1px] px-4 py-2 outline-none placeholder:font-medium text-xl"
            value={email}
            onChange={onChange}
          />
          <input 
            type="password"
            name="password" 
            placeholder="비밀번호" 
            className="HomeInput mt-3 w-full box-border bg-transparent border-gray-400 border-[1px] px-4 py-2 outline-none placeholder:font-medium text-xl"
            value={password}
            onChange={onChange}
          />
            <p className="mt-4 hover:underline cursor-pointer" onClick={AccountChange}>{newAccount ? "이미 가입된 아이디가 있으신가요?" : "가입된 아이디가 없으신가요?"}</p>
          <button type="submit" className="mt-6 w-full text-xl sign_button">
            {newAccount ? "회원가입" : "로그인"}
          </button>
          <div className="w-full mt-6 relative indexBorderLine">
            <span className="bg-black absolute p-1 px-4 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">또는</span>
          </div>
          <div className="w-full flex justify-center items-center mt-6 gap-[14.5px]">
            <LogoGoogle
              width={"32px"}
              height={"32px"}
              color={"white"}
              cssClasses={"Main_SocialIcon google"}
              onClick={onSocialClick}
            />
            <LogoGithub
              width={"32px"}
              height={"32px"}
              color={"white"}
              cssClasses={"Main_SocialIcon github"}
              onClick={onSocialClick}
            />
            <LogoApple
              width={"32px"}
              height={"32px"}
              color={"white"}
              cssClasses={"Main_SocialIcon apple"}
              onClick={onSocialClick}

            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Index;
