import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <span class="brand-mark">PF</span>
          <div>
            <h1>Playoff Fantasy</h1>
            <p>Your playoff lineup companion</p>
          </div>
        </div>
        <nav>
          <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a routerLink="/teams" routerLinkActive="active">Teams</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
        </nav>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        <p>Built for fantasy playoff fans — clean, responsive, and easy to use.</p>
      </footer>
    </div>
  `
})
export class AppComponent {}
