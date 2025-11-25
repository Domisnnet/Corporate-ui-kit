import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService, CukThemeConfig } from 'corporate-ui-kit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = signal('corporate-ui-kit-showcase');
  private themeService = inject(ThemeService);

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const corporateTheme: CukThemeConfig = {
      primary: '#1A73E8',
      primaryDark: '#1765cf',
      secondary: '#5f6368',
      secondaryDark: '#4d5156',
    };
    this.themeService.applyTheme(corporateTheme);
  }
}
