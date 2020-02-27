import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../style/index.scss';

import Resume from '../layouts/default';
import defaultData from '../util/default';

const App = (props: { resume: Resume }) => {
  return (
    <div className="resume">
      <Resume {...props.resume}></Resume>
    </div>
  );
};

ReactDOM.render(<App {...defaultData} />, document.getElementById('root'));
