import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import {
  CarouselSlide,
  ScreenshotCarouselComponent,
} from '../../../shared/components/screenshot-carousel/screenshot-carousel.component';

@Component({
  selector: 'app-gamepack',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, ScreenshotCarouselComponent],
  templateUrl: './gamepack.component.html',
  styleUrl: './gamepack.component.scss',
})
export class GamepackComponent {
  readonly games: CarouselSlide[] = [
    {
      src: 'assets/images/gamepack/categories.png',
      alt: 'Categories gameplay screen',
      caption: 'Categories',
      title: 'Categories',
      description:
        'Give clues to your teammates to guess as many words as possible in a given category.',
      width: 2144,
      height: 1352,
    },
    {
      src: 'assets/images/gamepack/codewords.png',
      alt: 'Code Words gameplay screen',
      caption: 'Code Words',
      title: 'Code Words',
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
        'Compete head to head with other players to earn the most points guessing each other\'s sketches!',
      width: 2140,
      height: 1468,
    },
    {
      src: 'assets/images/gamepack/wordchain.png',
      alt: 'Word Chain game screen',
      caption: 'Word Chain',
      title: 'Word Chain',
      description:
        'Find as many words as you can in the alloted time.',
      width: 2144,
      height: 1352,
    },
    {
      src: 'assets/images/gamepack/thisorthat.png',
      alt: 'This or That voting game screen',
      caption: 'This or That',
      title: 'This or That',
      description:
        'A social game to see what your friends would rather do.',
      width: 1280,
      height: 700,
    },
    {
      src: 'assets/images/gamepack/chess.png',
      alt: 'Chess game screen',
      caption: 'Chess',
      title: 'Chess',
      description:
        'A classic board game experience.',
      width: 1280,
      height: 700,
    },
    {
      src: 'assets/images/gamepack/spectrum.png',
      alt: 'Spectrum drawing and color game screen',
      caption: 'Spectrum',
      title: 'Spectrum',
      description:
        'One person sees a target on a spectrum. Give a clue. Others guess where it lands.',
      width: 2075,
      height: 1417,
    },
    {
      src: 'assets/images/gamepack/lingo.png',
      alt: 'Lingo game screen',
      caption: 'Lingo',
      title: 'Lingo',
      description:
        'Race to solve Wordle puzzles! Guess words in a free-for-all competition.',
      width: 2158,
      height: 1484,
    },
    {
      src: 'assets/images/gamepack/tongue-tied.png',
      alt: 'Tongue Tied game screen',
      caption: 'Tongue Tied',
      title: 'Tongue Tied',
      description:
        'Describe the word without saying the forbidden clues — watch your tongue!',
      width: 2140,
      height: 1470,
    },
  ];
}
