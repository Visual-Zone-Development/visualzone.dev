import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';
import { DeckFrameComponent } from '../deck-frame/deck-frame.component';

/**
 * The pushplay.gg walk-through, phone → GitHub Actions → Deck: ask an agent for a game, the
 * workflow builds and checks it, and it appears in the library. Loops while on screen. The
 * markup is the finished state, so without JavaScript or with reduced motion it reads as a
 * still storyboard.
 */
@Component({
  selector: 'app-pushplay-ship-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DeckFrameComponent],
  templateUrl: './pushplay-ship-demo.component.html',
  styleUrl: './pushplay-ship-demo.component.scss',
})
export class PushplayShipDemoComponent implements OnDestroy {
  readonly prompt = 'Make a twin-stick shooter with neon geometry enemies.';
  readonly replies = ['games/neon-swarm created', 'check passed at 1280×800', 'pushed to main'];
  readonly jobs = ['Validate manifest', 'Build', 'Play check', 'Render art', 'Publish'];

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;
  private visible = false;
  private running = false;
  private destroyed = false;

  constructor() {
    afterNextRender(() => this.init());
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.visible = false;
    this.observer?.disconnect();
  }

  private init(): void {
    const root = this.host.querySelector<HTMLElement>('[data-demo]')!;
    const all = <T extends HTMLElement = HTMLElement>(sel: string) =>
      [...root.querySelectorAll<T>(sel)];
    const prompt = all('[data-prompt]')[0];
    const stages = all('[data-stage]');
    const reveals = all('[data-reveal]');
    const jobs = all('[data-job]');
    const status = all('[data-status]')[0];
    const statusText = all('[data-status-text]')[0];
    const toast = all('[data-toast]')[0];
    const playing = all('[data-playing]')[0];
    const full = this.prompt;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
    const alive = () => this.visible && !this.destroyed && !reduced.matches;

    const stage = (n: number) =>
      stages.forEach(s => s.classList.toggle('active', Number(s.dataset['stage']) === n));
    const reset = () => {
      prompt.textContent = '';
      reveals.forEach(r => r.classList.remove('shown'));
      jobs.forEach(j => (j.dataset['state'] = 'queued'));
      status.dataset['state'] = 'queued';
      statusText.textContent = 'Queued';
      toast.classList.remove('shown');
      playing.classList.remove('shown');
    };
    const finish = () => {
      stages.forEach(s => s.classList.remove('active'));
      root.classList.remove('animating');
      prompt.textContent = full;
      reveals.forEach(r => r.classList.add('shown'));
      jobs.forEach(j => (j.dataset['state'] = 'done'));
      status.dataset['state'] = 'done';
      statusText.textContent = 'Success';
      this.running = false;
    };

    const loop = async () => {
      if (this.running) return;
      this.running = true;
      root.classList.add('animating');
      while (alive()) {
        reset();
        stage(1);
        await wait(600);
        for (let i = 1; i <= full.length && alive(); i++) {
          prompt.textContent = full.slice(0, i);
          await wait(38);
        }
        for (const r of reveals) {
          await wait(700);
          r.classList.add('shown');
        }
        await wait(900);
        stage(2);
        status.dataset['state'] = 'running';
        statusText.textContent = 'In progress';
        for (const j of jobs) {
          j.dataset['state'] = 'running';
          await wait(750);
          j.dataset['state'] = 'done';
        }
        status.dataset['state'] = 'done';
        statusText.textContent = 'Success';
        await wait(900);
        stage(3);
        await wait(500);
        toast.classList.add('shown');
        await wait(2400);
        toast.classList.remove('shown');
        playing.classList.add('shown');
        await wait(3600);
      }
      finish();
    };

    this.observer = new IntersectionObserver(
      ([e]) => {
        this.visible = !!e?.isIntersecting;
        if (this.visible) void loop();
      },
      { threshold: 0.35 },
    );
    this.observer.observe(root);
  }
}
