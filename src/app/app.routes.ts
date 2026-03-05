import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'projects/gitflex',
    loadComponent: () =>
      import('./features/projects/gitflex/gitflex.component').then(m => m.GitflexComponent),
  },
  {
    path: 'projects/gitflex/changelog',
    loadComponent: () =>
      import('./features/projects/gitflex/gitflex-changelog/gitflex-changelog.component').then(
        m => m.GitflexChangelogComponent
      ),
  },
  {
    path: 'projects/gitflex/features',
    loadComponent: () =>
      import('./features/projects/gitflex/gitflex-features/gitflex-features.component').then(
        m => m.GitflexFeaturesComponent
      ),
  },
  {
    path: 'projects/promptmd',
    loadComponent: () =>
      import('./features/projects/promptmd/promptmd.component').then(m => m.PromptmdComponent),
  },
  {
    path: 'projects/promptmd/changelog',
    loadComponent: () =>
      import('./features/projects/promptmd/promptmd-changelog/promptmd-changelog.component').then(
        m => m.PromptmdChangelogComponent
      ),
  },
  {
    path: 'projects/context-recall',
    loadComponent: () =>
      import('./features/projects/context-recall/context-recall.component').then(
        m => m.ContextRecallComponent
      ),
  },
  {
    path: 'projects/context-recall/changelog',
    loadComponent: () =>
      import('./features/projects/context-recall/context-recall-changelog/context-recall-changelog.component').then(
        m => m.ContextRecallChangelogComponent
      ),
  },
  {
    path: 'projects/gamepack',
    loadComponent: () =>
      import('./features/projects/gamepack/gamepack.component').then(m => m.GamepackComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
