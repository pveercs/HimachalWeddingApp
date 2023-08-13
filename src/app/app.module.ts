import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { LayoutcomponentComponent } from './layoutcomponent/layoutcomponent.component';
import { HeadcomponentComponent } from './headcomponent/headcomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { ProfilecomponentComponent } from './profilecomponent/profilecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    LogincomponentComponent,
    RegistercomponentComponent,
    LayoutcomponentComponent,
    HeadcomponentComponent,
    FootercomponentComponent,
    ProfilecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
