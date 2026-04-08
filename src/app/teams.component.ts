import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  template: `
    <section class="page-section">
      <h1>Top Fantasy Teams</h1>
      <p>Choose from several lineup themes with proven playoff potential.</p>
      <ul class="team-list">
        <li>
          <h3>Powerhouse Attack</h3>
          <p>High scoring offensive players that deliver explosive results.</p>
        </li>
        <li>
          <h3>Balanced Defense</h3>
          <p>A strategic roster built for consistency and steady points.</p>
        </li>
        <li>
          <h3>Upset Special</h3>
          <p>A bold lineup that rewards risk with major fantasy upside.</p>
        </li>
      </ul>
    </section>
  `
})
export class TeamsComponent {}
