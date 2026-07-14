export interface Project {
  id: string;
  title: string;
  titleJa?: string;
  description: string;
  descriptionJa?: string;
  longDescription?: string;
  longDescriptionJa?: string;
  iconName: string;
  tags: string[];
  tagsJa?: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: "Released" | "Beta" | "Alpha" | "In Development";
  statusJa?: string;
  features?: string[];
  featuresJa?: string[];
  techStack?: string[];
}

export interface Experiment {
  id: string;
  title: string;
  titleJa?: string;
  version: string;
  date: string;
  description: string;
  descriptionJa?: string;
  type: "release" | "update" | "research" | "milestone";
  icon: string;
  tags: string[];
  tagsJa?: string[];
}

export interface ResearchTopic {
  id: string;
  title: string;
  titleJa?: string;
  description: string;
  descriptionJa?: string;
  iconName: string;
  status: string;
  statusJa?: string;
  progress: number; // 0 to 100
  details: string[];
  detailsJa?: string[];
}

export interface NowBuilding {
  id: string;
  title: string;
  titleJa?: string;
  status: string;
  statusJa?: string;
  progress: number;
  icon: string;
  badgeColor: string;
}
