import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";
import { TeamsComponent } from "./teams.component";
import { AboutComponent } from "./about.component";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent, TeamsComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: environment.auth0.authorizationParams
    }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
