import React from 'react';
import ItemLabel from './ItemLabel';
import Level from './Level';

export default Skill;

const SkillItem = (item: SkillItem) => (
  <li className="skill-item">
    <p>
      <ItemLabel text={item.skillName}></ItemLabel>
      <span>{item.skillDescription}</span>
      <Level level={item.skillLevel}></Level>
    </p>
  </li>
);

function Skill(props: ResumeSection<SkillItem>) {
  return (
    <section className="skill">
      <h2>{props.text}</h2>
      <ul>
        {props.items.map(el => (
          <SkillItem key={el.skillName} {...el}></SkillItem>
        ))}
      </ul>
    </section>
  );
}
