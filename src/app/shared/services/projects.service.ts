import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly projects: Project[] = [
    {
      id: 'gitflex',
      title: 'GitFlex',
      tagline: 'Supercharge your GitHub workflow',
      description:
        'A browser extension with smarter pull-request views, comment tools, a global issue creator, and multi-account support.',
      icon: 'assets/images/gitflex/gitflex-icon.png',
      tags: ['GitHub', 'Free', 'Extension'],
      categories: ['Developer Tools', 'Productivity'],
      badges: [
        { label: 'Featured Extension', type: 'featured', title: 'Featured on the Chrome Web Store' },
        { label: 'Trusted Publisher', type: 'trusted', title: 'Trusted Publisher on the Chrome Web Store' },
      ],
      links: [
        {
          label: 'Download Extension',
          url: 'https://chromewebstore.google.com/detail/gitflex-ux-enhancements-f/mchhhlkgpmiinbnonjpeillinmgaoein',
          primary: true,
        },
      ],
      hasChangelog: true,
      hasFeatures: true,
      route: '/projects/gitflex',
      status: 'live',
      statusLabel: 'v6.4.1 · LIVE',
      cardCta: 'Download extension →',
    },
    {
      id: 'context-recall',
      title: 'Context Recall',
      tagline: 'Never lose your place again',
      description:
        'A VS Code extension that saves workspace snapshots — open files, cursor positions, and Git branches — so you can switch tasks in seconds.',
      icon: 'assets/images/context-recall/context-recall-logo.png',
      tags: ['VS Code', 'Free', 'Git'],
      categories: ['Developer Tools', 'Productivity'],
      badges: [],
      links: [
        {
          label: 'Download Extension',
          url: 'https://marketplace.visualstudio.com/items?itemName=VisualZoneDevelopment.context-recall',
          primary: true,
        },
      ],
      hasChangelog: true,
      hasFeatures: false,
      route: '/projects/context-recall',
      status: 'live',
      statusLabel: 'LIVE',
      cardCta: 'Install for VS Code →',
    },
    {
      id: 'promptmd',
      title: 'PromptMD',
      tagline: 'Markdown made simple for AI chats',
      description:
        'Adds a markdown toolbar and live preview to ChatGPT and Gemini, so your prompts come out perfectly formatted every time.',
      icon: 'assets/images/promptmd/promptmd-icon.png',
      tags: ['Markdown', 'Free', 'Extension'],
      categories: ['Productivity'],
      badges: [
        { label: 'Trusted Publisher', type: 'trusted', title: 'Trusted Publisher on the Chrome Web Store' },
      ],
      links: [
        {
          label: 'Install on Chrome',
          url: 'https://chromewebstore.google.com/detail/promptmd/cnacaeojcleglddehgcgddcejmpleada',
          primary: true,
        },
      ],
      hasChangelog: true,
      hasFeatures: false,
      route: '/projects/promptmd',
      status: 'live',
      statusLabel: 'LIVE',
      cardCta: 'Install on Chrome →',
    },
    {
      id: 'gamepack',
      title: 'GamePack',
      tagline: 'Be social at a distance',
      description:
        'A free online party-game platform with built-in video chat. No sign-up — just share a room link and play together.',
      icon: 'assets/images/gamepack/gamepack-stacked-logo.png',
      heroIcon: 'assets/images/gamepack/gamepack-initials-no-padding.png',
      iconContain: true,
      tags: ['Multiplayer', 'Free', 'Web App'],
      categories: ['Games & Play'],
      badges: [],
      links: [
        {
          label: 'Visit GamePack',
          url: 'https://www.gamepack.app',
          primary: true,
        },
      ],
      hasChangelog: false,
      hasFeatures: false,
      route: '/projects/gamepack',
      status: 'live',
      statusLabel: 'LIVE',
      cardCta: 'Play now →',
    },
    {
      id: 'ranked-one',
      title: 'Ranked One',
      tagline: 'Build the ultimate college hoops roster',
      description:
        'Spin for a random conference and era, then draft the best 5-man college basketball roster you can. Multiple game modes and shareable seeds to challenge your friends.',
      icon: 'assets/images/ranked-one/ranked-one-icon.svg',
      tags: ['College Basketball', 'Free', 'Web App'],
      categories: ['Games & Play'],
      badges: [],
      links: [
        { label: 'Play Ranked One', url: 'https://ranked-one.com', primary: true },
      ],
      hasChangelog: false,
      hasFeatures: false,
      status: 'live',
      statusLabel: 'LIVE',
      cardCta: 'Play now →',
    },
    {
      id: 'landfall',
      title: 'Landfall',
      tagline: 'Online Catan, taken seriously',
      description:
        'Stats and reporting, ranked leagues, tournaments, and team play for competitive Catan. Launching soon at landfall.gg.',
      icon: 'assets/images/landfall-logo.png',
      tags: ['Catan', 'Leagues', 'Stats'],
      categories: ['Games & Play'],
      badges: [],
      links: [],
      hasChangelog: false,
      hasFeatures: false,
      status: 'soon',
      statusLabel: '◷ COMING SOON',
      cardCta: 'Get notified →',
    },
    {
      id: 'fullpress',
      title: 'FullPress',
      tagline: 'Your fantasy league, with a newsroom',
      description:
        'A living history of every fantasy season plus AI-written articles about your matchups and rivalries — making the league feel real.',
      icon: 'assets/images/fullpress-logo.png',
      tags: ['Fantasy', 'AI Articles', 'History'],
      categories: ['Games & Play'],
      badges: [],
      links: [],
      hasChangelog: false,
      hasFeatures: false,
      status: 'soon',
      statusLabel: '◷ COMING SOON',
      cardCta: 'Get notified →',
    },
  ];

  getById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  filterByCategory(category: string | null): Project[] {
    if (!category) return this.projects;
    return this.projects.filter(p => p.categories.includes(category as any));
  }
}
