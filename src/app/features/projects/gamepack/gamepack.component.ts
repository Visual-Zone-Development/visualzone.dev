import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-gamepack',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './gamepack.component.html',
  styleUrl: './gamepack.component.scss',
})
export class GamepackComponent {}
