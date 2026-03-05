import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  signal,
  inject,
} from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private router = inject(Router);

  isHome = signal(true);
  mobileOpen = signal(false);
  scrolled = signal(false);

  private routerSub!: Subscription;

  ngOnInit(): void {
    this.checkRoute(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.checkRoute(e.urlAfterRedirects);
        this.mobileOpen.set(false);
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  private checkRoute(url: string): void {
    this.isHome.set(url === '/' || url === '');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMenu(): void {
    this.mobileOpen.set(false);
  }

  scrollToSection(id: string): void {
    this.mobileOpen.set(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
