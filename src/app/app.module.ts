import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";
import { TeamsComponent } from "./teams.component";
import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, TeamsComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
