import { withPopularity } from './withPopularity';

interface ArticleProps {
  title: string;
  content: string;
  views: number;
}

const ArticleBase = (props: ArticleProps) => {
  return (
    <div className="article">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export const Article = withPopularity(ArticleBase);
