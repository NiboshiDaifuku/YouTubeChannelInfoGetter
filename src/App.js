import { useState } from "react";
import InputTextBox from "./InputTextBox";
import "./styles.css";

export default function App() {
  const [videoInfo, setVideoInfo] = useState([]);

  return (
    <div className="App">
      <h1>YouTubeの動画情報一括取得ツール</h1>
      <h3>好きなチャンネルの動画のサムネイル・タイトル・URLを一括で取得できます</h3>
      <InputTextBox setVideoInfo={setVideoInfo} />
      <h2>使い方</h2>
      <ol>
        <li>好きなYouTubeチャンネルにアクセスする</li>
        <li>動画タブを開く</li>
        <li>最古の動画までスクロールする</li>
        <li>F12を押して開発ツールを開く</li>
        <li>HTML要素を丸コピする</li>
        <li>テキストボックスに張り付ける（10秒ほどかかる）</li>
        <li>解析開始ボタンを押す</li>
        <li>csvファイルが出力されるので自由に使う</li>
      </ol>
      {/*<VideoInfo videoInfo={videoInfo} />*/}
    </div>
  );
}
