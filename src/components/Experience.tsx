import React from 'react';
import ItemLabel from './ItemLabel';

export default Experience;

const ExperienceItem = (item: ExperienceItem) => (
  <li className="experience-item">
    <h3>
      <span>{item.period}</span>
      <span>{item.company}</span>
    </h3>
    <p>
      <ItemLabel text="工作职位:"></ItemLabel>
      {item.title}
    </p>
    <p>
      <ItemLabel text="工作内容:"></ItemLabel>
      {item.description}
    </p>
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
