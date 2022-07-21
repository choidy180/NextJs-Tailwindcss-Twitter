import { ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { PickerProps } from "emoji-mart";
import React, { useRef, useState } from "react";
import data from "@emoji-mart/data";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { dbService, storageService } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Comment: React.FC = (props) => {
	const [comment, setComment] = useState("");
	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const filePickerRef = useRef(null);
	const [showEmojis, setShowEmojis] = useState(false);
	const id = props["id"];
	const auth = getAuth();
	// 댓글 쓰기
	const sendComment = async () => {
		if(loading) return;
		setLoading(true);

		const docRef = await addDoc(collection(dbService, "reply"),{
			post:id,
			useremail: auth.currentUser.email,
			username: auth.currentUser.displayName,
			userImg: auth.currentUser.photoURL,
			text: comment,
			timestamp: serverTimestamp(),
		});
		const imageRef = ref(storageService, `reply/${docRef.id}/image`);
		if(selectedFile){
			await uploadString(imageRef, selectedFile, "data_url").then(async()=>{
				const downloadURL = await getDownloadURL(imageRef);
				await updateDoc(doc(dbService, "reply", docRef.id),{
					image: downloadURL,
				})
			})
		}
		setLoading(false);
		setComment("");
		setSelectedFile(null);
		setShowEmojis(false);
	}

	// 이미지 미리보기
	const addImageToPost = (e) => {
		const reader = new FileReader();
		if(e.target.files[0]){
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		}
	}
	// 이모지 인터페이스
	interface EmojiPickerProps {
		onEmojiSelect: (e: PickerProps) => void;
	}
	// 이모지 피커
	const EmojiPicker: React.FC<EmojiPickerProps> = (props) =>{
		const ref = useRef<HTMLDivElement>(null);
		import("emoji-mart").then(
			({ Picker }: any) => new Picker({...props, data, ref})
		);
		return <div ref={ref} className="fixed mt-[330px] ml-[10px] translate-x-[-100px] scale-[70%] z-[999999] border-2 border-solid border-[rgb(87, 101, 116)] rounded-2xl"/>
	}

	const addEmoji = (e:any) => {
		let sym = e.unified.split("-");
		let codesArray: any = [];
		sym.forEach((el: any) => codesArray.push("0x" + el));
		let emoji = String.fromCodePoint(...codesArray);
		setComment(comment + emoji);
	};
	return (
		<>
			<div className="w-[calc(100%-32px)] pt-2 border-none border-transparent">
				<textarea
					value={comment}
					onChange={(e)=>setComment(e.target.value)}
					className="w-full text-2xl bg-transparent border-transparent text-white"
					placeholder="Tweet your reply"
					rows={Number(2)}
				/>
				{selectedFile && (
					<div className="relative">
						<div 
							className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left1 cursor-pointer textbox"
							onClick={()=>setSelectedFile(null)}
						>
							<XIcon className="text-white h-5"/>
						</div>
						<img
							src={selectedFile}
							alt=""
							className="rounded-2xl max-h-80 object-contain"
						/>
					</div>
				)}
			</div>
			<div className="flex items-center justify-between pt-2.5 w-[calc(100%-14px)]">
				<div className="flex items-center">
					<div className="icon" onClick={()=>filePickerRef.current.click()}>
						<PhotographIcon className="text-[#1d9bf0] h-[20px]"/>
						<input 
							type="file"
							ref={filePickerRef} 
							hidden
							onChange={addImageToPost}
						/>
					</div>
					<div className="icon rotate-90">
						<ChartBarIcon className="text-[#1d9bf0] h-[20px]"/>
					</div>
					<div className="icon" onClick={()=>{
						setShowEmojis(!showEmojis)
					}}>
						<EmojiHappyIcon className="text-[#1d9bf0] h-[20px]"/>
					</div>
					{showEmojis && <EmojiPicker onEmojiSelect={addEmoji}/>}
				</div>
				<button
					className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50"
					disabled={!comment && !selectedFile}
					onClick={sendComment}
				>
					Reply
				</button>
			</div>
		</>
	)
}

export default Comment;