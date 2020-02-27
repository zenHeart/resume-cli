import React from 'react';
import Piece from './Piece';
import Period from './Period';

import './Project.scss';

export default Project;

const ProjectItem = (item: ProjectItem) => (
  <li className="project-item">
    <Period title={item.name} period={item.period}></Period>
    <Piece name="项目描述:" content={item.description}></Piece>
    <Piece name="项目职责:" content={item.duty}></Piece>
    <Piece name="项目业绩:" content={item.performance}></Piece>
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
