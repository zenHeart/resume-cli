import React from 'react';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skill from '../components/Skill';

function Resume(props: Resume) {
  return (
    <div className="resume-default-theme">
      <Profile {...props.profile}></Profile>
      <Experience {...props.experience}></Experience>
      <Project {...props.project}></Project>
      <Skill {...props.skill}></Skill>
    </div>
  );
}
export default Resume;
