import { useState } from "react";
import { getVideoInfo, makeCsv } from "./ParserLib";

const InputTextBox = ({ setVideoInfo }) => {
  const [inputText, setText] = useState("");
  const [videoInfoArray, setVideoInfoArray] = useState([]);

  const startParse = () => {
    if (inputText !== "") {
      const tmpVideoInfoArray = getVideoInfo(inputText);
      setVideoInfoArray(tmpVideoInfoArray);
      setVideoInfo(tmpVideoInfoArray);
    }
  };

  const downloadCsv = () => {
    if (videoInfoArray.length > 0) {
      const outputCsv = makeCsv(videoInfoArray);

      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([outputCsv], { type: "text/csv" }));
      a.download = "YouTubeChannelVideoInfo.csv";

      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="input-text-box">
      <textarea cols="50" rows="5" onChange={(e) => setText(e.currentTarget.value)} />
      <p>
        <button onClick={startParse}>解析開始</button>　
        <button onClick={downloadCsv}>CSVダウンロード</button>
      </p>
    </div>
  );
};

export default InputTextBox;
