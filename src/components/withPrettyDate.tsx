import React from 'react';
import moment from 'moment';
import { DateTimeProps } from './DateTime';

export const withPrettyDate = <P extends DateTimeProps>(Component: React.ComponentType<P>) => {
  return function DateTimePretty(props: P) {
    const formatDate = (date: string) => {
      const currentDate = moment();
      const inputDate = moment(date);

      const diffMinutes = currentDate.diff(inputDate, 'minutes');
      const diffHours = currentDate.diff(inputDate, 'hours');
      const diffDays = currentDate.diff(inputDate, 'days');

      if (diffMinutes < 60) {
        return `${diffMinutes} минут назад`;
      } else if (diffHours < 24) {
        return `${diffHours} часов назад`;
      } else {
        return `${diffDays} дней назад`;
      }
    };

    const formattedDate = formatDate(props.date);

    return <Component {...props} date={formattedDate} />;
  };
};
