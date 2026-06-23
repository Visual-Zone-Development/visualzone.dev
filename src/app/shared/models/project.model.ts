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

export type ProjectStatus = 'live' | 'soon';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  /** Smaller mark used in the hero orbit cluster. Falls back to `icon`. */
  heroIcon?: string;
  /** Render the icon "contained" (with a padded tile) instead of filling it. */
  iconContain?: boolean;
  tags: string[];
  categories: ProjectCategory[];
  badges: ProjectBadge[];
  links: ProjectLink[];
  hasChangelog: boolean;
  hasFeatures: boolean;
  /** Internal detail-page route for live products; coming-soon products omit it. */
  route?: string;
  status: ProjectStatus;
  /** Mono status pill shown on the card, e.g. "v6.4.1 · LIVE" or "◷ COMING SOON". */
  statusLabel: string;
  /** Card call-to-action label, e.g. "Download extension →". */
  cardCta: string;
}

export type ProjectCategory =
  | 'Developer Tools'
  | 'Productivity'
  | 'Games & Play';

export const ALL_CATEGORIES: ProjectCategory[] = [
  'Developer Tools',
  'Productivity',
  'Games & Play',
];
