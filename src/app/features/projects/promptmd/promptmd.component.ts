import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-promptmd',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective],
  templateUrl: './promptmd.component.html',
  styleUrl: './promptmd.component.scss',
})
export class PromptmdComponent {}
