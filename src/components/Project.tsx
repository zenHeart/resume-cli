import React from 'react';
import ItemLabel from './ItemLabel';

export default Project;

const ProjectItem = (item: ProjectItem) => (
  <li className="project-item">
    <h3>
      <span>{item.period}</span>
      <span>{item.name}</span>
    </h3>
    <p>
      <ItemLabel text="项目描述:"></ItemLabel>
      {item.description}
    </p>
    <p>
      <ItemLabel text="项目职责:"></ItemLabel>
      {item.duty}
    </p>
    <p>
      <ItemLabel text="项目业绩:"></ItemLabel>
      {item.performance}
    </p>
  </li>
);

function Project(props: ResumeSection<ProjectItem>) {
  return (
    <section className="project">
      <h2>{props.text}</h2>
      <ul>
        {props.items.map(el => (
          <ProjectItem key={el.name} {...el}></ProjectItem>
        ))}
      </ul>
    </section>
  );
}
