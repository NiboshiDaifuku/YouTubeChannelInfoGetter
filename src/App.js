import { useState } from "react";
import InputTextBox from "./InputTextBox";
import VideoInfos from "./VideoInfos";
import "./styles.css";

export default function App() {
  const [videoInfo, setVideoInfo] = useState([]);

  return (
    <div className="App">
      <h1>YouTubeの動画情報一括取得ツール</h1>
      <h3>好きなチャンネルの動画のサムネイル・タイトル・URLを一括で取得できます</h3>
      <InputTextBox setVideoInfo={setVideoInfo} />
      <h2>使い方（PC）</h2>
      <ol>
        <li>好きなYouTubeチャンネルにアクセスする</li>
        <li>動画タブを開く</li>
        <li>最古の動画までスクロールする</li>
        <li>F12を押して開発ツールを開く</li>
        <li>動画のitem一覧を格納している親要素を探し、要素をコピーする</li>
        <ul>
          <li>サイトの作りが変わらない限りは、以下の要素をコピーすればOK</li>
          <li>{`<div id="items" class="style-scope ytd-grid-renderer">`}</li>
        </ul>
        <li>テキストボックスに張り付ける</li>
        <li>解析開始ボタンを押す（※2回押さないと動かないときがある）</li>
        <li>csvファイルが出力されるので自由に使う</li>
      </ol>
      <hr />
      {<VideoInfos videoInfo={videoInfo} />}
    </div>
  );
}
