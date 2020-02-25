interface Profile {
  name: string;
  email: string;
}
interface ExperienceItem {
  timePeriod: [number, number];
  company: string;
  jobTile: string;
  jobDescription: string;
}
interface ProjectItem {
  timePeriod: [number, number];
  projectName: string;
  projectDescription: string;
  projectDuty: string;
  projectPerformance: string;
}

interface SkillItem {
  skillName: string;
  skillDescription: string;
  skillLevel: number;
}

interface Resume {
  profile: Profile;
  experience: ResumeSection<ExperienceItem>;
  project: ResumeSection<ProjectItem>;
  skill: ResumeSection<SkillItem>;
}

interface ResumeSection<T> {
  items: T[];
  text?: string;
}
