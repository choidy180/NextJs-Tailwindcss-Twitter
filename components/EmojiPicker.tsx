import React, { useRef } from "react";
import { PickerProps } from "emoji-mart";
import data from "@emoji-mart/data";

const EmojiPicker: React.FC<any> = (props) => {
	const ref = useRef<HTMLDivElement>(null);
	import("emoji-mart").then(
    ({Picker}) => new Picker({...props, data, ref})
  );
	return <div ref={ref} />;
};

export default EmojiPicker;