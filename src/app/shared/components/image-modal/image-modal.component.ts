import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface ModalImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss',
})
export class ImageModalComponent {
  @Input() images: ModalImage[] = [];
  @Output() closed = new EventEmitter<void>();

  currentIndex = signal(0);

  get current(): ModalImage {
    return this.images[this.currentIndex()];
  }

  open(index: number): void {
    this.currentIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    document.body.style.overflow = '';
    this.closed.emit();
  }

  navigate(dir: 1 | -1): void {
    const next =
      (this.currentIndex() + dir + this.images.length) % this.images.length;
    this.currentIndex.set(next);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this.navigate(1);
    if (e.key === 'ArrowLeft') this.navigate(-1);
  }

  onBackdropClick(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close();
    }
  }
}
