import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-home',
  template: `
    <section class="page-section">
      <h1>Welcome to Playoff Fantasy</h1>
      <p>Create your perfect playoff lineup, track your team, and explore strategy tips.</p>

      <div class="action-panel">
        <button type="button" (click)="fetchApi()" [disabled]="isCooldown">
          {{ isCooldown ? 'Wait ' + cooldownLeft + 's' : 'Fetch sample response' }}
        </button>
      </div>

      <div *ngIf="apiResult" class="response-box">
        <h2>API Response</h2>
        <pre>{{ apiResult | json }}</pre>
      </div>

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
  apiResult: any = null;
  isCooldown = false;
  cooldownLeft = 0;
  

  constructor(private http: HttpClient) {}

  fetchApi(): void {
    if (this.isCooldown) {
      return;
    }

    this.apiResult = null;
    this.isCooldown = true;
    this.cooldownLeft = 5;

    this.http.get<{message: string}>(environment.apiBaseUrl + '/HelloAzureFunction')
        .subscribe(
        {
            next: res => this.apiResult = res.message,
            error: err => this.apiResult = `Error: ${err.message}`
        });


    const interval = setInterval(() => {
      this.cooldownLeft -= 1;
      if (this.cooldownLeft <= 0) {
        clearInterval(interval);
        this.isCooldown = false;
      }
    }, 1000);
  }
}
