import { DateTime } from './DateTime';
import { withPrettyDate } from './withPrettyDate';
import { withPopularity } from './withPopularity';
import './css/video.css';

interface VideoProps {
  url: string;
  date: string;
  views: number;
}

const DateTimePretty = withPrettyDate(DateTime);

const VideoBase = (props: VideoProps) => {
  return (
    <div className="tile-content">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
      <p className="views">Views: {props.views}</p>
    </div>
  );
};

export const Video = withPopularity(VideoBase);