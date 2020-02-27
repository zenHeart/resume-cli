import React from 'react';
import Piece from './Piece';
import Period from './Period';

import './experience.scss';

export default Experience;

const ExperienceItem = (item: ExperienceItem) => (
  <li className="experience-item">
    <Period title={item.company} period={item.period}></Period>
    <Piece name="工作职位:" content={item.title}></Piece>
    <Piece name="工作内容:" content={item.description}></Piece>
  </li>
);

function Experience(props: ResumeSection<ExperienceItem>) {
  return (
    <section className="experience">
      <h2>{props.text}</h2>
      <ul>
        {props.items.map(el => (
          <ExperienceItem key={el.company} {...el}></ExperienceItem>
        ))}
      </ul>
    </section>
  );
}
