import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AuthModule } from "@auth0/auth0-angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";
import { TeamsComponent } from "./teams.component";
import { AboutComponent } from "./about.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, HomeComponent, TeamsComponent, AboutComponent],
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
