import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * A Steam Deck drawn in SVG with a 1280×800 screenshot on its screen (same drawing as
 * pushplay.gg). Content projected into it is layered over the screenshot, clipped to the screen.
 */
@Component({
  selector: 'app-deck-frame',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="device">
      <svg viewBox="0 0 1000 400" aria-hidden="true">
    <defs>
      <linearGradient id="pp-deck-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2b2f38" />
        <stop offset="0.5" stop-color="#22252d" />
        <stop offset="1" stop-color="#1a1c22" />
      </linearGradient>
      <radialGradient id="pp-deck-stick" cx="0.42" cy="0.38" r="0.65">
        <stop offset="0" stop-color="#3a3e48" />
        <stop offset="1" stop-color="#16181d" />
      </radialGradient>
      <linearGradient id="pp-deck-pad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1d2026" />
        <stop offset="1" stop-color="#15171c" />
      </linearGradient>
    </defs>

    <!-- Shoulder buttons, behind the body -->
    <g fill="#1a1c22" stroke="#3a3e48" stroke-width="2">
      <rect x="70" y="2" width="150" height="30" rx="12" />
      <rect x="780" y="2" width="150" height="30" rx="12" />
    </g>

    <!-- Body: boxy middle, grips that drop a little at the ends -->
    <path
      d="M110 14 H890 C952 14 992 54 994 120 L998 300 C1000 360 968 396 908 396 C860 396 832 386 800 382 H200 C168 386 140 396 92 396 C32 396 0 360 2 300 L6 120 C8 54 48 14 110 14 Z"
      fill="url(#pp-deck-body)" stroke="#3d414c" stroke-width="2.5" />

    <!-- Glass around the screen -->
    <rect x="245" y="24" width="510" height="344" rx="14" fill="#08090b" stroke="#2a2d35" stroke-width="2" />

    <!-- Left: d-pad, stick, trackpad, View and Steam buttons -->
    <g fill="#14161a" stroke="#3a3e48" stroke-width="2">
      <path d="M68 70 h24 v26 h26 v24 h-26 v26 h-24 v-26 h-26 v-24 h26 z" />
    </g>
    <circle cx="180" cy="110" r="44" fill="#121418" />
    <circle cx="180" cy="110" r="34" fill="url(#pp-deck-stick)" stroke="#4a4f5c" stroke-width="2" />
    <rect x="118" y="205" width="108" height="108" rx="16" fill="url(#pp-deck-pad)" stroke="#33363f" stroke-width="2" />
    <rect x="206" y="40" width="22" height="13" rx="5" fill="#3a3e48" />
    <rect x="48" y="322" width="44" height="22" rx="8" fill="#14161a" stroke="#3a3e48" stroke-width="2" />

    <!-- Right: face buttons, stick, trackpad, Menu and quick-access buttons -->
    <g fill="#14161a" stroke="#3a3e48" stroke-width="2">
      <circle cx="920" cy="74" r="15" />
      <circle cx="890" cy="104" r="15" />
      <circle cx="950" cy="104" r="15" />
      <circle cx="920" cy="134" r="15" />
    </g>
    <g fill="#6b7180" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
      <text x="920" y="79">Y</text><text x="890" y="109">X</text><text x="950" y="109">B</text><text x="920" y="139">A</text>
    </g>
    <circle cx="820" cy="110" r="44" fill="#121418" />
    <circle cx="820" cy="110" r="34" fill="url(#pp-deck-stick)" stroke="#4a4f5c" stroke-width="2" />
    <rect x="774" y="205" width="108" height="108" rx="16" fill="url(#pp-deck-pad)" stroke="#33363f" stroke-width="2" />
    <rect x="772" y="40" width="22" height="13" rx="5" fill="#3a3e48" />
    <rect x="908" y="322" width="44" height="22" rx="8" fill="#14161a" stroke="#3a3e48" stroke-width="2" />
    <g fill="#6b7180"><circle cx="921" cy="333" r="2.5" /><circle cx="930" cy="333" r="2.5" /><circle cx="939" cy="333" r="2.5" /></g>
  </svg>
      <div class="screen">
        <img [src]="src()" [alt]="alt()" width="1280" height="800" loading="lazy" decoding="async" />
        <ng-content />
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .device {
      position: relative;
      width: 100%;
      aspect-ratio: 1000 / 400;
      filter: drop-shadow(0 24px 40px rgb(0 0 0 / 0.45));
    }
    svg { position: absolute; inset: 0; width: 100%; height: 100%; }
    .screen {
      position: absolute;
      left: 26.5%;
      top: 12.25%;
      width: 47%;
      height: 73.5%;
      overflow: hidden;
      border-radius: 3px;
      background: #0d0f14;
      container-type: inline-size;
    }
    img { display: block; width: 100%; height: 100%; object-fit: cover; }
  `,
})
export class DeckFrameComponent {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
}
