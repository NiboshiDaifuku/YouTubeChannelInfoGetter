const VideoInfo = (props) => {
  return (
    <tr>
      <td>
        <img src={props.thumbnail} alt="" width="90" />
      </td>
      <td align="center">{props.id + 1}</td>
      <td>
        <a href={props.url}>{props.title}</a>
      </td>
    </tr>
  );
};

export default VideoInfo;
