import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import {
  CarouselSlide,
  ScreenshotCarouselComponent,
} from '../../../shared/components/screenshot-carousel/screenshot-carousel.component';

@Component({
  selector: 'app-landfall',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, ScreenshotCarouselComponent],
  templateUrl: './landfall.component.html',
  styleUrl: './landfall.component.scss',
})
export class LandfallComponent {
  readonly screenshots: CarouselSlide[] = [
    {
      src: 'assets/images/landfall/board.webp',
      alt: 'Landfall game board mid-match with player panels and build controls',
      caption: 'The Board',
      title: 'The Board',
      description:
        'A crisp, zoomable hex board with live player panels, trades, dev cards, and build controls — the game handles setup, turn order, and the robber.',
      width: 1600,
      height: 1001,
    },
    {
      src: 'assets/images/landfall/team-lobby.webp',
      alt: 'Landfall room lobby with two teams and the game mode picker',
      caption: 'Rooms & Team Play',
      title: 'Rooms & Team Play',
      description:
        'Open a room, share one link or code, and pick a mode. Split into teams that pool resources, fill empty seats with bots, and let an audience watch.',
      width: 1600,
      height: 1001,
    },
    {
      src: 'assets/images/landfall/league-standings.webp',
      alt: 'Landfall league standings table with form, VP average, and playoff cut line',
      caption: 'Leagues',
      title: 'Leagues',
      description:
        'Run a season of games with rounds, standings, form, and a playoff cut — one table that settles who is actually the best at the table.',
      width: 1600,
      height: 1001,
    },
    {
      src: 'assets/images/landfall/tournament-bracket.webp',
      alt: 'Landfall tournament bracket with quarterfinals, semifinals, and final',
      caption: 'Tournaments',
      title: 'Tournaments',
      description:
        'Live brackets that advance automatically. Launch every ready match with one click and watch players claim their seats.',
      width: 1600,
      height: 1001,
    },
  ];
}
