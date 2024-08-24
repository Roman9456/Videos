import { Video } from './Video';
import { Article } from './Article';

interface ListProps {
  items: { type: 'video' | 'article'; url?: string; title?: string; content?: string; date?: string; views?: number }[];
}

export function List(props: ListProps) {
  return (
    <>
      {props.items.map((item, index) => {
        if (item.type === 'video') {
          if (item.url && item.date && item.views !== undefined) { 
            return <Video key={index} url={item.url} date={item.date} views={item.views} />;
          }
        } else if (item.type === 'article') {
          if (item.title && item.content) {
            return <Article key={index} title={item.title} content={item.content} views={item.views || 0} />;
          }
        }
        return null;
      })}
    </>
  );
}
