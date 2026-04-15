import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AuthModule } from "@auth0/auth0-angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { LeagueComponent } from "./pages/league/league.component";
import { AboutComponent } from "./pages/about/about.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, HomeComponent, LeagueComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
