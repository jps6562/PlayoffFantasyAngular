import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-league',
  template: `
    <section class="page-section">
      <h1>League Page</h1>
      <p>Welcome to the league. This is the basic league page placeholder for your fantasy experience.</p>

      <div *ngIf="auth.user$ | async as user" class="welcome-card">
        <h2>Hello, {{ user.name || user.email }}!</h2>
        <p>You are signed in and can now explore league features.</p>
      </div>

      <div class="feature-grid">
        <article>
          <h2>League Standings</h2>
          <p>Placeholder content for league performance and standings.</p>
        </article>
        <article>
          <h2>Draft Board</h2>
          <p>Basic layout for draft and roster planning.</p>
        </article>
        <article>
          <h2>Matchups</h2>
          <p>A simple view of your upcoming playoff matchups.</p>
        </article>
      </div>
    </section>
  `
})
export class LeagueComponent {
  constructor(public auth: AuthService) {}
}

