import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../shared/services/projects.service';
import { ALL_CATEGORIES, Project, ProjectCategory } from '../../shared/models/project.model';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface Spotlight {
  id: string;
  title: string;
  meta: string;
  icon: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private projectsService = inject(ProjectsService);

  /** "All" plus the real categories, for the filter chips. */
  readonly filters: (ProjectCategory | 'All')[] = ['All', ...ALL_CATEGORIES];
  activeFilter = signal<ProjectCategory | 'All'>('All');

  readonly projects = this.projectsService.projects;

  /** Marks used in the floating hero cluster. */
  readonly heroCluster = this.projects.map(p => ({
    id: p.id,
    icon: p.heroIcon ?? p.icon,
    title: p.title,
  }));

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'All'
      ? this.projects
      : this.projectsService.filterByCategory(f);
  });

  readonly spotlights: Spotlight[] = [
    {
      id: 'landfall',
      title: 'Landfall',
      meta: 'landfall.gg · LIVE',
      icon: 'assets/images/landfall-logo.png',
      description:
        'Online Catan, taken seriously. Leagues, tournaments, team play and detailed stats, on the web, the iOS and Android apps and the Steam Deck. Put the board on the TV and everyone plays their hand from their phone.',
      tags: ['Leagues', 'Tournaments', 'Mobile Apps', 'TV Mode'],
    },
    {
      id: 'fullpress',
      title: 'FullPress',
      meta: 'fullpress.app · LIVE',
      icon: 'assets/images/fullpress-logo.png',
      description:
        "Your fantasy league deserves a newsroom. FullPress keeps a living history of every season and spins up AI-written articles about your matchups, rivalries, and champions — so the league feels as real as the real thing.",
      tags: ['League History', 'AI Articles', 'Fantasy Sports'],
    },
    {
      id: 'pushplay',
      title: 'PushPlay',
      meta: 'pushplay.gg · LIVE',
      icon: 'assets/images/pushplay/pushplay-icon.png',
      description:
        'Push code. Press play. Your games on every screen you play on: Steam Deck, Windows, Mac and Linux, with a phone and tablet app on the way. Add games from GitHub, a folder or a website, and they update on their own every time you push.',
      tags: ['Steam Deck', 'Desktop', 'Mobile', 'Game Dev'],
    },
  ];

  /** External destination for a live project that has no internal detail page. */
  primaryUrl(p: Project): string | undefined {
    return (p.links.find(l => l.primary) ?? p.links[0])?.url;
  }

  setFilter(filter: ProjectCategory | 'All'): void {
    this.activeFilter.set(filter);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
