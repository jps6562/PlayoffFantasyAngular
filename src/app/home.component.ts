import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  template: `
    <section class="page-section">
      <h1>Welcome to Playoff Fantasy</h1>
      <p>Create your perfect playoff lineup, track your team, and explore strategy tips.</p>

      <div *ngIf="auth.isAuthenticated$ | async; else loginPrompt" class="welcome-card">
        <h2>You're signed in</h2>
        <p>Great! You can now build lineups, save your favorites, and access personalized recommendations.</p>
      </div>

      <ng-template #loginPrompt>
        <div class="welcome-card">
          <h2>Sign in to get started</h2>
          <p>Tap the Log in button in the header to open the Auth0 sign-in flow.</p>
        </div>
      </ng-template>

      <div class="feature-grid">
        <article>
          <h2>Fast Picks</h2>
          <p>Review top players and build your squad before game day.</p>
        </article>
        <article>
          <h2>Live Scores</h2>
          <p>Monitor standings and adjust your roster as playoffs progress.</p>
        </article>
        <article>
          <h2>Team Insights</h2>
          <p>See lineup advice, matchup strength, and fantasy trends.</p>
        </article>
      </div>
    </section>
  `
})
export class HomeComponent {
  constructor(public auth: AuthService) {}
}
