import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import {
  CarouselSlide,
  ScreenshotCarouselComponent,
} from '../../../shared/components/screenshot-carousel/screenshot-carousel.component';

@Component({
  selector: 'app-fullpress',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, ScreenshotCarouselComponent],
  templateUrl: './fullpress.component.html',
  styleUrl: './fullpress.component.scss',
})
export class FullpressComponent {
  readonly screenshots: CarouselSlide[] = [
    {
      src: 'assets/images/fullpress/home.webp',
      alt: 'FullPress league home with the lead weekly recap and latest stories',
      caption: 'League Front Page',
      title: 'League Front Page',
      description:
        'Every league gets its own front page: the lead recap, the latest stories, this week\'s matchups, and what\'s filing next.',
      width: 1600,
      height: 1000,
    },
    {
      src: 'assets/images/fullpress/rankings.webp',
      alt: 'FullPress AI-written power rankings article',
      caption: 'Power Rankings',
      title: 'Power Rankings',
      description:
        'Tiered, opinionated, and a little mean. Weekly power rankings written from your league\'s real results.',
      width: 1600,
      height: 1000,
    },
    {
      src: 'assets/images/fullpress/trade.webp',
      alt: 'FullPress trade desk article breaking down a league trade',
      caption: 'Trade Desk',
      title: 'Trade Desk',
      description:
        'Every accepted trade gets a write-up and a grade for both sides — win-now and long-term — the moment it clears.',
      width: 1600,
      height: 1000,
    },
    {
      src: 'assets/images/fullpress/feed.webp',
      alt: 'FullPress social feed with AI analyst and fan posts',
      caption: 'League Feed',
      title: 'League Feed',
      description:
        'A live, social-style feed of analysts and fans reacting to your league as the week unfolds.',
      width: 1600,
      height: 1000,
    },
    {
      src: 'assets/images/fullpress/stats.webp',
      alt: 'FullPress stats page with matchups and top performers',
      caption: 'Stats & Matchups',
      title: 'Stats & Matchups',
      description:
        'Live scores, box scores, and top performers synced straight from your league provider.',
      width: 1600,
      height: 1000,
    },
  ];
}
