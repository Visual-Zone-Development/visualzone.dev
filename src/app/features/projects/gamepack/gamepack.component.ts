import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ViewChild, computed, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import {
  ImageModalComponent,
  ModalImage,
} from '../../../shared/components/image-modal/image-modal.component';

interface GamepackGame extends ModalImage {
  title: string;
  description: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-gamepack',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    AnimateOnScrollDirective,
    ImageModalComponent,
  ],
  templateUrl: './gamepack.component.html',
  styleUrl: './gamepack.component.scss',
})
export class GamepackComponent {
  @ViewChild(ImageModalComponent) modal?: ImageModalComponent;

  readonly activeGameIndex = signal(0);
  readonly showModal = signal(false);

  readonly games: GamepackGame[] = [
    {
      src: 'assets/images/gamepack/wordplay.png',
      alt: 'Word Play gameplay screen',
      caption: 'Word Play',
      title: 'Word Play',
      description:
        'A team-based word association game inspired by classic party game strategy.',
      width: 2144,
      height: 1352,
    },
    {
      src: 'assets/images/gamepack/guessasketch.png',
      alt: 'Guess A Sketch drawing game screen',
      caption: 'Guess A Sketch',
      title: 'Guess A Sketch',
      description:
        'Draw fast, guess faster, and watch the chaos unfold in real time.',
      width: 2140,
      height: 1468,
    },
    {
      src: 'assets/images/gamepack/wordchain.png',
      alt: 'Word Chain game screen',
      caption: 'Word Chain',
      title: 'Word Chain',
      description:
        'Keep the chain alive with quick thinking and even quicker vocabulary.',
      width: 2144,
      height: 1352,
    },
    {
      src: 'assets/images/gamepack/thisorthat.png',
      alt: 'This or That voting game screen',
      caption: 'This or That',
      title: 'This or That',
      description:
        'Vote through funny dilemmas and see how your room stacks up.',
      width: 1280,
      height: 700,
    },
    {
      src: 'assets/images/gamepack/chess.png',
      alt: 'Chess game screen',
      caption: 'Chess',
      title: 'Chess',
      description:
        'A classic board game experience with live multiplayer and video chat.',
      width: 1280,
      height: 700,
    },
    {
      src: 'assets/images/gamepack/spectrum.png',
      alt: 'Spectrum drawing and color game screen',
      caption: 'Spectrum',
      title: 'Spectrum',
      description:
        'A colorful party challenge built around creative choices and group reactions.',
      width: 2075,
      height: 1417,
    },
    {
      src: 'assets/images/gamepack/wordrush.png',
      alt: 'Word Rush game screen',
      caption: 'Word Rush',
      title: 'Word Rush',
      description:
        'Race against the clock to find as many words as you can before time runs out.',
      width: 2158,
      height: 1484,
    },
  ];

  readonly currentGame = computed(() => this.games[this.activeGameIndex()]);

  selectGame(index: number): void {
    this.activeGameIndex.set(index);
  }

  showPreviousGame(): void {
    this.activeGameIndex.update(
      (index) => (index - 1 + this.games.length) % this.games.length,
    );
  }

  showNextGame(): void {
    this.activeGameIndex.update((index) => (index + 1) % this.games.length);
  }

  openModal(index: number): void {
    this.showModal.set(true);
    setTimeout(() => this.modal?.open(index));
  }

  onModalClosed(): void {
    this.showModal.set(false);
  }
}
