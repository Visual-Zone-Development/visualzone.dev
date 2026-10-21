import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { DeckFrameComponent } from '../../../shared/components/deck-frame/deck-frame.component';
import { PushplayShipDemoComponent } from '../../../shared/components/pushplay-ship-demo/pushplay-ship-demo.component';
import {
  CarouselSlide,
  ScreenshotCarouselComponent,
} from '../../../shared/components/screenshot-carousel/screenshot-carousel.component';

@Component({
  selector: 'app-pushplay',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, ScreenshotCarouselComponent, DeckFrameComponent, PushplayShipDemoComponent],
  templateUrl: './pushplay.component.html',
  styleUrl: './pushplay.component.scss',
})
export class PushplayComponent {
  readonly screenshots: CarouselSlide[] = [
    {
      src: 'assets/images/pushplay/library.webp',
      alt: 'PushPlay library with game covers in a grid, filters down the side and the focused game\'s details above',
      caption: 'Your Library',
      title: 'Your Library',
      description:
        'Game covers in a grid, with favorites, filters and what\'s new, all reachable on the d-pad.',
      width: 1280,
      height: 800,
    },
    {
      src: 'assets/images/pushplay/detail.webp',
      alt: 'A game page with banner art, a Play button, tags and stats',
      caption: 'Game Pages',
      title: 'Game Pages',
      description:
        'Every game gets a page with its art, tags and versions, plus a roll back if an update misbehaves.',
      width: 1280,
      height: 800,
    },
    {
      src: 'assets/images/pushplay/add-github.webp',
      alt: 'Connect GitHub screen with a short code and a QR code to scan',
      caption: 'Sign In With Your Phone',
      title: 'Sign In With Your Phone',
      description:
        'Scan a QR code to connect GitHub, so there\'s no typing on the handheld. Public and private repos both work.',
      width: 1280,
      height: 800,
    },
    {
      src: 'assets/images/pushplay/playing.webp',
      alt: 'A neon twin-stick shooter being played full screen',
      caption: 'Playing',
      title: 'Playing',
      description: 'Web games and native builds, full screen and controller-first.',
      width: 1280,
      height: 800,
    },
    {
      src: 'assets/images/pushplay/pause.webp',
      alt: 'The pause menu over a game with Resume, Restart game and Quit to library',
      caption: 'Pause Menu',
      title: 'Pause Menu',
      description: 'Hold Start + Select in any web game to resume, restart or quit to the library.',
      width: 1280,
      height: 800,
    },
  ];
}
