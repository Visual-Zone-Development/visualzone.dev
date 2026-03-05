export interface ProjectBadge {
  label: string;
  type: 'featured' | 'trusted';
  title?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  tags: string[];
  categories: ProjectCategory[];
  badges: ProjectBadge[];
  links: ProjectLink[];
  hasChangelog: boolean;
  hasFeatures: boolean;
  route: string;
}

export type ProjectCategory =
  | 'Chrome Extensions'
  | 'VS Code Extensions'
  | 'Productivity Tools'
  | 'Games';

export const ALL_CATEGORIES: ProjectCategory[] = [
  'Chrome Extensions',
  'VS Code Extensions',
  'Productivity Tools',
  'Games',
];
