const Mock = require('mockjs');

const resume = Mock.mock({
  resume: {
    profile: {
      name: '@cname',
      email: '@email',
      avatar:
        ' https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      'workingYears|1-10': 1,
      school: 'xxx 学校',
      state: '离职'
    },
    experience: {
      text: '工作经历',
      items: [
        {
          period: [new Date().getTime(), new Date('2019').getTime()],
          company: '公司 1',
          title: '前端工程师',
          description: '@csentence(100,400)'
        },
        {
          period: [new Date('2019').getTime(), new Date('2018').getTime()],
          company: '公司 2',
          title: '前端工程师',
          description: '@csentence(100,400)'
        },
        {
          period: [new Date('2018').getTime(), new Date('2016').getTime()],
          company: '公司 3',
          title: '前端工程师',
          description: '@csentence(100,400)'
        }
      ]
    },
    project: {
      text: '项目经验',
      items: [
        {
          period: [new Date().getTime(), new Date('2019').getTime()],
          name: '项目 1',
          description: '@csentence(20,100)',
          duty: '@csentence(20,100)',
          performance: '@csentence(20,100)'
        },
        {
          period: [new Date('2019').getTime(), new Date('2018').getTime()],
          name: '项目 2',
          description: '@csentence(20,100)',
          duty: '@csentence(20,100)',
          performance: '@csentence(20,100)'
        },
        {
          period: [new Date('2018').getTime(), new Date('2015').getTime()],
          name: '项目 3',
          description: '@csentence(20,100)',
          duty: '@csentence(20,100)',
          performance: '@csentence(20,100)'
        }
      ]
    },
    skill: {
      text: '技能',
      items: [
        { name: 'js', description: '@csentence(20,100)', level: 5 },
        {
          name: 'Vue',
          description: '@csentence(20,100)',
          level: 4
        },
        { name: 'html', description: '@csentence(20,100)', level: 3 },
        { name: 'css', description: '@csentence(20,100)', level: 2 },
        { name: 'sql', description: '@csentence(20,100)', level: 1 }
      ]
    }
  }
});

module.exports = resume;
