import VideoInfo from "./VideoInfo";

const VideoInfos = (props) => {
  const info = props.videoInfo.map((e, idx) => (
    <VideoInfo key={e.url} thumbnail={e.thumbnail} title={e.title} url={e.url} id={idx} />
  ));

  return (
    <table border="1">
      <thead align="center">
        <tr>
          <th>サムネイル</th>
          <th>ID</th>
          <th>タイトル</th>
        </tr>
      </thead>
      <tbody>{info}</tbody>
    </table>
  );
};

export default VideoInfos;
