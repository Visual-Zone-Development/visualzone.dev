import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-context-recall',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective],
  templateUrl: './context-recall.component.html',
  styleUrl: './context-recall.component.scss',
})
export class ContextRecallComponent {}
