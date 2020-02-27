import React from 'react';
import Level from './Level';
import './Skill.scss';

export default Skill;

const SkillItem = (item: SkillItem) => (
  <li className="skill-item">
    <strong className="skill-item-name">{item.name}</strong>
    <p className="skill-item-description">{item.description}</p>
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
