import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

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

        <div class="topbar-actions">
          <nav>
            <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
            <a routerLink="/teams" routerLinkActive="active">Teams</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
          </nav>

          <div class="auth-actions">
            <button *ngIf="!(auth.isAuthenticated$ | async)" (click)="login()">Log in</button>
            <button *ngIf="auth.isAuthenticated$ | async" (click)="logout()">Log out</button>
            <span *ngIf="auth.user$ | async as user" class="user-label">
              {{ user.name || user.email }}
            </span>
          </div>
        </div>
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
export class AppComponent {
  constructor(public auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
