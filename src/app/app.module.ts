import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { MapsService } from './maps.service';


import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { RoutesComponent } from './components/routes/routes.component';


const appRoutes: Routes = [
  { path: "home", component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'map', component: MapsComponent},
  { path: 'routes', component: RoutesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    NavComponent,
    LandingComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1whmEP6kmI3SzAUHot98q1bIyXQxTvJc'
    }),

  ],
  providers: [MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
