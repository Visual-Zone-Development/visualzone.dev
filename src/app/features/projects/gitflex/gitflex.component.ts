import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { ImageModalComponent, ModalImage } from '../../../shared/components/image-modal/image-modal.component';

@Component({
  selector: 'app-gitflex',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, AnimateOnScrollDirective, ImageModalComponent],
  templateUrl: './gitflex.component.html',
  styleUrl: './gitflex.component.scss',
})
export class GitflexComponent {
  @ViewChild(ImageModalComponent) modal!: ImageModalComponent;
  showModal = signal(false);

  readonly screenshots: ModalImage[] = [
    { src: 'assets/images/gitflex/gitflex-info.png',              alt: 'GitFlex info',           caption: 'More Information at a Glance' },
    { src: 'assets/images/gitflex/gitflex-work-efficiently.png',  alt: 'Work efficiently',       caption: 'Work More Efficiently' },
    { src: 'assets/images/gitflex/gitflex-comments.png',          alt: 'Comment creation',       caption: 'Easier Comment Creation' },
    { src: 'assets/images/gitflex/gitflex-settings.png',          alt: 'Settings',               caption: 'Configurable to Your Needs' },
    { src: 'assets/images/gitflex/gitflex-unobtrusive.png',       alt: 'Unobtrusive design',     caption: 'Unobtrusive by Design' },
  ];

  openModal(index: number): void {
    this.showModal.set(true);
    setTimeout(() => this.modal.open(index));
  }

  onModalClosed(): void {
    this.showModal.set(false);
  }
}
