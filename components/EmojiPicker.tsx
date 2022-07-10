import React, { useRef } from "react";
import { PickerProps } from "emoji-mart";
import data from "@emoji-mart/data";

const EmojiPicker: React.FC<PickerProps> = (props) => {
	const ref = useRef<HTMLDivElement>(null);
	import("emoji-mart").then(
		({Picker}: any) => new Picker({...props, data, ref})
	);
	return <div ref={ref} className="absolute mt-[465px] -ml-8 mx-w-[250px] rounded-xl" />;
}

export default EmojiPicker;