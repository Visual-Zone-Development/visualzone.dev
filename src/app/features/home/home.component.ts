import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsService } from '../../shared/services/projects.service';
import { ALL_CATEGORIES, ProjectCategory } from '../../shared/models/project.model';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    AnimateOnScrollDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private projectsService = inject(ProjectsService);

  readonly categories = ALL_CATEGORIES;
  activeCategory = signal<ProjectCategory | null>(null);

  filteredProjects = computed(() =>
    this.projectsService.filterByCategory(this.activeCategory())
  );

  setCategory(cat: ProjectCategory | null): void {
    this.activeCategory.set(cat);
  }

  scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
