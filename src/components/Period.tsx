import React from 'react';
import './Period.scss';
import dayjs from 'dayjs';

export default Period;

function Period(props: { title: string; period: [number, number] }) {
  return (
    <h3 className="period">
      <span className="period-title">{props.title}</span>
      <span className="period-range">
        {props.period.map(el => dayjs(el).format('YYYY.M')).join('-')}
      </span>
    </h3>
  );
}

function formatDate(d: number): string {
  var options = {
    year: 'numeric',
    month: 'numeric',
    timeZone: 'Asia/Shanghai'
  };
  return new Intl.DateTimeFormat('chinese', options).format(d);
}
