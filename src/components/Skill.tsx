import React from 'react';
import Level from './Level';

export default Skill;

const SkillItem = (item: SkillItem) => (
  <li className="skill-item">
    <strong>{item.name}</strong>
    <span>{item.description}</span>
    <Level level={item.level}></Level>
  </li>
);

function Skill(props: ResumeSection<SkillItem>) {
  return (
    <section className="skill">
      <h2>{props.text}</h2>
      <ul>
        {props.items.map(el => (
          <SkillItem key={el.name} {...el}></SkillItem>
        ))}
      </ul>
    </section>
  );
}
