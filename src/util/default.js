export default {
  profile: {
    name: '小明',
    email: 'zenheart_register@163.com'
  },
  experience: {
    text: '工作经历',
    items: [
      {
        timePeriod: [new Date(2015).getTime(), new Date(2016).getTime()],
        company: '公司 1',
        jobTile: '前端工程师',
        jobDescription: '职位描述'
      },
      {
        timePeriod: [new Date(2015).getTime(), new Date(2016).getTime()],
        company: '公司 2',
        jobTile: '前端工程师',
        jobDescription: '职位描述'
      }
    ]
  },

  project: {
    text: '项目经验',
    items: [
      {
        timePeriod: [new Date(2015).getTime(), new Date(2016).getTime()],
        projectName: '项目 1',
        projectDescription: '一套 xx 系统',
        projectDuty: '项目职责为 xxx',
        projectPerformance: '项目结果 xxx'
      },
      {
        timePeriod: [new Date(2015).getTime(), new Date(2016).getTime()],
        projectName: '项目 2',
        projectDescription: '一套 xx 系统',
        projectDuty: '项目职责为 xxx',
        projectPerformance: '项目结果 xxx'
      },
      {
        timePeriod: [new Date(2015).getTime(), new Date(2016).getTime()],
        projectName: '项目 3',
        projectDescription: '一套 xx 系统',
        projectDuty: '项目职责为 xxx',
        projectPerformance: '项目结果 xxx'
      }
    ]
  },
  skill: {
    text: '技能',
    items: [{ skillName: 'js', skillDescription: '熟悉 xxx ', skillLevel: '1' }]
  }
};
