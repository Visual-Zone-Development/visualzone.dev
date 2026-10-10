import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, ViewChild, computed, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ImageModalComponent, ModalImage } from '../image-modal/image-modal.component';

export interface CarouselSlide extends ModalImage {
  title: string;
  description: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-screenshot-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, AnimateOnScrollDirective, ImageModalComponent],
  templateUrl: './screenshot-carousel.component.html',
  styleUrl: './screenshot-carousel.component.scss',
})
export class ScreenshotCarouselComponent {
  @ViewChild(ImageModalComponent) modal?: ImageModalComponent;

  @Input({ required: true }) set slides(value: CarouselSlide[]) {
    this.items.set(value);
    this.activeIndex.set(0);
  }
  /** Small uppercase label above the slide title, e.g. "Featured game". */
  @Input() eyebrow = '';

  readonly items = signal<CarouselSlide[]>([]);
  readonly activeIndex = signal(0);
  readonly showModal = signal(false);

  readonly current = computed(() => this.items()[this.activeIndex()]);

  select(index: number): void {
    this.activeIndex.set(index);
  }

  showPrevious(): void {
    const count = this.items().length;
    this.activeIndex.update((index) => (index - 1 + count) % count);
  }

  showNext(): void {
    this.activeIndex.update((index) => (index + 1) % this.items().length);
  }

  openModal(index: number): void {
    this.showModal.set(true);
    setTimeout(() => this.modal?.open(index));
  }

  onModalClosed(): void {
    this.showModal.set(false);
  }
}
