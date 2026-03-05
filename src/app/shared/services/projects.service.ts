import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly projects: Project[] = [
    {
      id: 'gitflex',
      title: 'GitFlex',
      tagline: 'Supercharge Your GitHub Workflow',
      description:
        'A browser extension that enhances GitHub with quality-of-life and productivity features — from smarter pull request views and comment tools to a global issue creator and multi-account support.',
      icon: 'assets/images/gitflex/gitflex-icon.png',
      tags: ['Free', 'Browser Extension', 'GitHub', 'Productivity'],
      categories: ['Chrome Extensions', 'Productivity Tools'],
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
    },
    {
      id: 'context-recall',
      title: 'Context Recall',
      tagline: 'Never Lose Your Place Again',
      description:
        'A VS Code extension that saves workspace snapshots — open files, cursor positions, and Git branches — so you can switch tasks in seconds without losing context.',
      icon: 'assets/images/context-recall/context-recall-logo.png',
      tags: ['Free', 'VS Code Extension', 'Productivity', 'Git'],
      categories: ['VS Code Extensions', 'Productivity Tools'],
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
    },
    {
      id: 'promptmd',
      title: 'PromptMD',
      tagline: 'Markdown Made Simple for AI Chats',
      description:
        'A browser extension that adds a markdown toolbar and live preview to ChatGPT and Google Gemini, so your prompts are perfectly formatted every time.',
      icon: 'assets/images/promptmd/promptmd-icon.png',
      tags: ['Free', 'Browser Extension', 'Markdown', 'Productivity'],
      categories: ['Chrome Extensions', 'Productivity Tools'],
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
    },
    {
      id: 'gamepack',
      title: 'GamePack',
      tagline: 'Be Social at a Distance',
      description:
        'A free online multiplayer party game platform with integrated video chat. No sign-up required — just share a room link and play.',
      icon: 'assets/images/gamepack/gamepack-stacked-logo.png',
      tags: ['Free', 'Web App', 'Multiplayer', 'Game'],
      categories: ['Games'],
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
