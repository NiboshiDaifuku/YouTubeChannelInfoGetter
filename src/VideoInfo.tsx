const VideoInfo = ({ thumbnail, title, url, id }) => {
  return (
    <tr>
      <td>
        <img src={thumbnail} alt="" width="80" />
      </td>
      <td align="center">{id + 1}</td>
      <td>
        <a href={url}>{title}</a>
      </td>
    </tr>
  );
};

export default VideoInfo;
