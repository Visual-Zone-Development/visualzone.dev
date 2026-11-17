import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type DeviceKind = 'phone' | 'tablet' | 'laptop' | 'tv';

/**
 * A plain, brand-free device drawn in CSS with a screenshot on its screen. Pairs with
 * `app-deck-frame` (the Steam Deck) to show a product on every kind of screen.
 *
 * The screen takes the screenshot's own aspect ratio (`width` / `height`), so the bezel always
 * hugs the image: a portrait phone capture, a 4:3 tablet, a 16:10 laptop or TV capture.
 * Content projected into it is layered over the screenshot, clipped to the screen.
 */
@Component({
  selector: 'app-device-frame',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="device" [class]="'device device--' + kind()">
      <div class="bezel">
        <div class="screen" [style.aspect-ratio]="ratio()">
          <img
            [src]="src()"
            [alt]="alt()"
            [attr.width]="width()"
            [attr.height]="height()"
            loading="lazy"
            decoding="async"
          />
          <ng-content />
        </div>
        @if (kind() === 'phone') {
          <span class="camera" aria-hidden="true"></span>
        }
      </div>
      @if (kind() === 'laptop') {
        <div class="laptop-base" aria-hidden="true"></div>
      }
      @if (kind() === 'tv') {
        <div class="tv-stand" aria-hidden="true"></div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .device {
      position: relative;
      width: 100%;
      filter: drop-shadow(0 20px 32px rgb(0 0 0 / 0.45));
    }

    .bezel {
      position: relative;
      background: linear-gradient(135deg, #2f333c, #1a1c22);
      border: 1px solid #454a56;
    }

    .screen {
      position: relative;
      overflow: hidden;
      background: #0d0f14;
      container-type: inline-size;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }

    /* Phone: thin even bezel, rounded glass, a punch-hole camera. */
    .device--phone .bezel {
      padding: 3.2%;
      border-radius: 16% / 7.5%;
    }
    .device--phone .screen {
      border-radius: 12% / 5.5%;
    }
    .camera {
      position: absolute;
      top: 4.6%;
      left: 50%;
      width: 4%;
      aspect-ratio: 1;
      transform: translateX(-50%);
      border-radius: 50%;
      background: #050608;
      box-shadow: 0 0 0 1px #1e2128;
    }

    /* Tablet: even bezel, softer corners. */
    .device--tablet .bezel {
      padding: 2.6%;
      border-radius: 5.5%;
    }
    .device--tablet .screen {
      border-radius: 2.5%;
    }

    /* Laptop: lid with a slim bezel, a wider base seen at a slight angle. */
    .device--laptop .bezel {
      padding: 2% 2% 2.6%;
      border-radius: 2.4% 2.4% 0.6% 0.6%;
      background: #1d2026;
      border-color: #3d414c;
    }
    .device--laptop .screen {
      border-radius: 0.6%;
    }
    .laptop-base {
      position: relative;
      left: -7%;
      width: 114%;
      height: 0;
      padding-bottom: 3.6%;
      background: linear-gradient(#3a3e48, #1f2228);
      border: 1px solid #454a56;
      border-radius: 0 0 40% 40% / 0 0 100% 100%;
    }
    .laptop-base::after {
      content: '';
      position: absolute;
      top: 0;
      left: 43%;
      width: 14%;
      height: 35%;
      border-radius: 0 0 8px 8px;
      background: #16181d;
    }

    /* TV: a thin black frame on a low stand. */
    .device--tv .bezel {
      padding: 1.2%;
      border-radius: 1%;
      background: #0b0c10;
      border-color: #2a2d35;
    }
    .tv-stand {
      width: 34%;
      height: 0;
      padding-bottom: 2.2%;
      margin: 0 auto;
      background: linear-gradient(#2a2d35, #15171c);
      clip-path: polygon(18% 0, 82% 0, 100% 100%, 0 100%);
    }
  `,
})
export class DeviceFrameComponent {
  readonly kind = input.required<DeviceKind>();
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  /** The screenshot's pixel size, which sets the screen's aspect ratio. */
  readonly width = input.required<number>();
  readonly height = input.required<number>();

  readonly ratio = computed(() => `${this.width()} / ${this.height()}`);
}
