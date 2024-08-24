import React from 'react';
import { Popular } from './Popular';
import { New } from './New';

interface WithPopularityProps {
  views: number;
}

export const withPopularity = <P extends WithPopularityProps>(Component: React.ComponentType<P>) => {
  return function (props: P) {
    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    } else if (props.views <= 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else {
      return <Component {...props} />;
    }
  };
};
