import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-gitflex-features',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './gitflex-features.component.html',
  styleUrl: './gitflex-features.component.scss',
})
export class GitflexFeaturesComponent {}
