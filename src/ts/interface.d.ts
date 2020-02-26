interface Profile {
  name: string;
  email: string;
  avatar?: string;
  workingYears?: string;
  school?: string;
  state?: string;
}
interface ExperienceItem {
  period: [number, number];
  company: string;
  title: string;
  description: string;
}
interface ProjectItem {
  period: [number, number];
  name: string;
  description: string;
  duty: string;
  performance: string;
}

interface SkillItem {
  name: string;
  description: string;
  level: number;
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
