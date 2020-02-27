import React from 'react';

import './Level.scss';

const LEVEL_LABEL = ['新手', '高级新手', '胜任者', '精通者', '专家'];
function LevelTip(props: { level: number }) {
  return (
    <span className="level-tip">
      <strong>{LEVEL_LABEL[props.level - 1]}</strong>
      参考
      <a href="https://zh.wikipedia.org/wiki/%E5%BE%B7%E9%9B%B7%E7%A6%8F%E6%96%AF%E6%A8%A1%E5%9E%8B">
        德雷福斯模型评估技能的学习程度
      </a>
    </span>
  );
}

class Level extends React.Component<{ level: number }, { showTips: boolean }> {
  constructor(props: Readonly<{ level: number }>) {
    super(props);
    this.state = {
      showTips: false
    };
  }
  triggerTipShow = (flag: boolean) => {
    this.setState({
      showTips: flag
    });
  };
  render() {
    return (
      <span
        className="level"
        onMouseEnter={this.triggerTipShow.bind(this, true)}
        onMouseLeave={this.triggerTipShow.bind(this, false)}
      >
        {Array.from({ length: this.props.level }).map((ele, index) => (
          <span className="star" key={index}>
            ⭐
          </span>
        ))}
        {this.state.showTips && <LevelTip level={this.props.level}></LevelTip>}
      </span>
    );
  }
}

export default Level;
