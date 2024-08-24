import { Video } from './Video';
import { Popular } from './Popular';
import { New } from './New';
import './css/video.css';

interface VideoListProps {
  list: { url: string; date: string; views: number }[];
}

export function VideoList(props: VideoListProps) {
  const popularVideos = props.list.filter(item => item.views > 1000);
  const newVideos = props.list.filter(item => item.views <= 1000);

  return (
    <div className="video-list">
      <div className="section">
        <h2>Popular Videos</h2>
        <div className="tile-container">
          {popularVideos.map((item, index) => (
            <Popular key={index}>
              <Video url={item.url} date={item.date} views={item.views} />
            </Popular>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>New Videos</h2>
        <div className="tile-container">
          {newVideos.map((item, index) => (
            <New key={index}>
              <Video url={item.url} date={item.date} views={item.views} />
            </New>
          ))}
        </div>
      </div>
    </div>
  );
}
