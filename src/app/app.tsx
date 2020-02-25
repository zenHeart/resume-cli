import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../style/index.scss';

import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skill from '../components/Skill';
import defaultData from '../util/default';

const App = (props: Resume) => {
  return (
    <div className="app">
      <Profile {...props.profile}></Profile>
      <Experience {...props.experience}></Experience>
      <Project {...props.project}></Project>
      <Skill {...props.skill}></Skill>
    </div>
  );
};

ReactDOM.render(<App {...defaultData} />, document.getElementById('root'));
