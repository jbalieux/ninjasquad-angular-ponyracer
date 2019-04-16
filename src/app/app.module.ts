import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { RaceComponent } from './race/race.component';
import { PonyComponent } from './pony/pony.component';
import { FromNowPipe } from './from-now.pipe';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RaceService } from './race.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent,
    RaceComponent,
    PonyComponent,
    FromNowPipe,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RaceService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
