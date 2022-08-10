// 不要なHTMLタグを含んだ文字列から、欲しい要素のみを持つ配列を取り出して返す関数
const divideTarget = (target: string, regExp: RegExp, unnecessaryTag: string): string[] => {
  const tmpArray = target.match(regExp);
  return tmpArray.map((element) => element.replace(unnecessaryTag, "").replace('"', ""));
};

export const getVideoThumbnail = (analysisTarget: string) => {
  return divideTarget(analysisTarget, /src=.*jpg/g, 'src="');
};

// 回答履歴
export interface videoInfoArray {
  thumbnail: string;
  title: string;
  url: string;
}

export const getVideoInfo = (analysisTarget: string) => {
  const thumbArray = divideTarget(analysisTarget, /src=.*\.jpg/g, 'src="');
  const infoArray = divideTarget(
    analysisTarget,
    /id="video-title".*?">/g,
    'id="video-title" class="yt-simple-endpoint style-scope ytd-grid-video-renderer" '
  );

  const titleArray = [];
  const urlArrayWithAmp = [];
  const urlArray = [];

  infoArray.forEach((info: string) => {
    titleArray.push(divideTarget(info, /title=".*?"/g, 'title="')[0]);
    urlArrayWithAmp.push(divideTarget(info, /href=".*?"/g, 'href="/watch?v=')[0]);
  });

  const youTubeUrlHeader = "https://youtu.be/";

  urlArrayWithAmp.forEach((url: string) => {
    if (url.indexOf("&amp;") !== -1) {
      urlArray.push(youTubeUrlHeader + url.split("&amp;")[0]);
    } else {
      urlArray.push(youTubeUrlHeader + url);
    }
  });

  const videoInfo: videoInfoArray[] = [];
  for (let i = 0; i < titleArray.length; ++i) {
    videoInfo.push({ thumbnail: thumbArray[i], title: titleArray[i], url: urlArray[i] });
  }

  return videoInfo;
};

export const makeCsv = (videoInfoArray: videoInfoArray[]) => {
  let outputCsv = "ID,サムネイル,タイトル,URL\n";
  videoInfoArray.forEach((e, idx) => {
    outputCsv += idx + 1 + "," + e.thumbnail + "," + e.title + "," + e.url + "\n";
  });

  return outputCsv;
};
