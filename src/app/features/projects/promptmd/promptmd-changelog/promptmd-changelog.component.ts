import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promptmd-changelog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './promptmd-changelog.component.html',
  styleUrl: './promptmd-changelog.component.scss',
})
export class PromptmdChangelogComponent {}
