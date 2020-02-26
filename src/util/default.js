export default {
  profile: {
    name: '小明',
    email: 'zenheart_register@163.com',
    avatar:
      ' https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    workingYears: 1,
    school: 'xxx 学校',
    state: '离职'
  },
  experience: {
    text: '工作经历',
    items: [
      {
        period: [new Date(2015).getTime(), new Date(2016).getTime()],
        company: '公司 1',
        title: '前端工程师',
        description: '职位描述'
      },
      {
        period: [new Date(2015).getTime(), new Date(2016).getTime()],
        company: '公司 2',
        title: '前端工程师',
        description: '职位描述'
      }
    ]
  },

  project: {
    text: '项目经验',
    items: [
      {
        period: [new Date(2015).getTime(), new Date(2016).getTime()],
        name: '项目 1',
        description: '一套 xx 系统',
        duty: '项目职责为 xxx',
        performance: '项目结果 xxx'
      },
      {
        period: [new Date(2015).getTime(), new Date(2016).getTime()],
        name: '项目 2',
        description: '一套 xx 系统',
        duty: '项目职责为 xxx',
        performance: '项目结果 xxx'
      },
      {
        period: [new Date(2015).getTime(), new Date(2016).getTime()],
        name: '项目 3',
        description: '一套 xx 系统',
        duty: '项目职责为 xxx',
        performance: '项目结果 xxx'
      }
    ]
  },
  skill: {
    text: '技能',
    items: [
      { name: 'js', description: '熟悉 sdffsxxx ', level: 5 },
      {
        name: 'Vue',
        description:
          '熟悉sdfsfsdfsdfsdf xxx 熟悉sdfsfsdfsdfsdf xxx 熟悉sdfsfsdfsdfsdf xxx 熟悉sdfsfsdfsdfsdf xxx 熟悉sdfsfsdfsdfsdf xxx 熟悉sdfsfsdfsdfsdf xxx ',
        level: 4
      },
      { name: 'html', description: '熟悉 xxx ', level: 3 },
      { name: 'css', description: '熟悉 xxx ', level: 2 },
      { name: 'sql', description: '熟悉 xxx ', level: 1 }
    ]
  }
};
