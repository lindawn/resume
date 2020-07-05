import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { JobsTabComponent } from './jobs-tab/jobs-tab.component';
import { ProjectsTabComponent } from './projects-tab/projects-tab.component';
import { ClubsTabComponent } from './clubs-tab/clubs-tab.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    JobsTabComponent,
    ProjectsTabComponent,
    ClubsTabComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
