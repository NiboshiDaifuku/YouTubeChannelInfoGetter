import { useState } from "react";
import { getVideoInfo } from "./ParserLib";

const InputTextBox = (props) => {
  const [inputText, setText] = useState("");
  let videoInfoArray;

  const onClickParseStart = () => {
    videoInfoArray = getVideoInfo(inputText);
    console.log(videoInfoArray);
    props.setVideoInfo(videoInfoArray);
  };

  return (
    <div className="input-text-box">
      <textarea cols="50" rows="5" onChange={(e) => setText(e.currentTarget.value)} />
      <p>
        <button onClick={onClickParseStart}>解析開始</button>
      </p>
    </div>
  );
};

export default InputTextBox;
