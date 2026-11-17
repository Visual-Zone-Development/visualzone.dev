# VisualzoneNg

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Product screenshots

Project pages show real screens from each product, copied into `public/assets/images/<project>/`.

- **PushPlay**: the icon and screenshots come from the `pushplay.gg` repo
  (`public/img/icon-256.png` and `public/img/shots/`). Copy the new files over when the site's
  brand or screens change.
- **Landfall**: the desktop screens (`board`, `team-lobby`, `league-standings`,
  `tournament-bracket`) are the dark-theme files from `landfall-ui/public/screenshots/`. The
  platform screens (Steam Deck, shared screen on a TV, phone hand view, phone and tablet board)
  are captured from `landfall-ui` with `scripts/capture/landfall-platforms.spec.ts`, which uses
  landfall-ui's own mocked game, so no API or login is needed:

  ```bash
  cp scripts/capture/landfall-platforms.spec.ts ../landfall-ui/tests/e2e/capture.spec.ts
  cd ../landfall-ui && CAP_OUT=/tmp/landfall-shots npx playwright test tests/e2e/capture.spec.ts --trace off
  rm tests/e2e/capture.spec.ts
  ```

  Then convert each PNG to WebP (1600px wide for the 16:10 shots, 780px for the phone shots)
  and replace the files in `public/assets/images/landfall/`.

Retired products (`status: 'retired'` in `ProjectsService`) keep their card on the home page as
past work, but render without a link: use this when a product's site goes offline.
