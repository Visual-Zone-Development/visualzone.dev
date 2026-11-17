import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { DeckFrameComponent } from '../../../shared/components/deck-frame/deck-frame.component';
import { DeviceFrameComponent } from '../../../shared/components/device-frame/device-frame.component';
import {
  CarouselSlide,
  ScreenshotCarouselComponent,
} from '../../../shared/components/screenshot-carousel/screenshot-carousel.component';

export interface LandfallPlatform {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-landfall',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AnimateOnScrollDirective,
    ScreenshotCarouselComponent,
    DeckFrameComponent,
    DeviceFrameComponent,
  ],
  templateUrl: './landfall.component.html',
  styleUrl: './landfall.component.scss',
})
export class LandfallComponent {
  /** The Android app's store listing. Add the App Store link here when the iOS app is published. */
  readonly googlePlayUrl = 'https://play.google.com/store/apps/details?id=gg.landfall.app';

  /** Every screen Landfall plays on, in the same words as landfall.gg's own platforms list. */
  readonly platforms: LandfallPlatform[] = [
    { icon: '💻', name: 'Web browser', description: 'Any laptop or desktop. Nothing to install.' },
    { icon: '📱', name: 'Phones & tablets', description: 'The same game in a mobile browser, built for touch.' },
    { icon: '📲', name: 'iOS & Android apps', description: 'On Google Play now, with the App Store coming soon.' },
    { icon: '🕹️', name: 'Steam Deck & handhelds', description: 'Full controller play in the PushPlay launcher.' },
    { icon: '📺', name: 'TV & shared screen', description: "The board on the big screen, everyone's hand on their phone." },
    { icon: '🎮', name: 'Controllers', description: 'Plug in a gamepad on any screen and take a seat.' },
  ];

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
      src: 'assets/images/landfall/shared-screen-lobby.webp',
      alt: 'The shared screen lobby on a TV: a big QR code and room code, four ready seats and the room settings',
      caption: 'Shared Screen',
      title: 'Shared Screen',
      description:
        'Put the room on the TV. Everyone scans the code from the couch and plays their hand on their own phone, while the big screen shows the board for the whole room.',
      width: 1600,
      height: 1000,
    },
    {
      src: 'assets/images/landfall/steam-deck.webp',
      alt: 'The handheld layout: players, the turn, resource cards and actions in a side panel beside a full-height board',
      caption: 'Steam Deck',
      title: 'Steam Deck',
      description:
        'A layout built for the Deck and other handhelds, played entirely on the controller through the PushPlay launcher.',
      width: 1600,
      height: 1000,
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
