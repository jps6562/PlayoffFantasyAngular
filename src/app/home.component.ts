import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="page-section">
      <h1>Welcome to Playoff Fantasy</h1>
      <p>Create your perfect playoff lineup, track your team, and explore strategy tips.</p>
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
export class HomeComponent {}
