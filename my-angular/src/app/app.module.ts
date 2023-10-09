import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Shared Components..
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AlertComponent } from './shared/alert/alert.component';

//Not Found Components...
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicComponent } from './layouts/public.component';
import { SecureComponent } from './layouts/secure.component';

//Module Imports...
import { PublicModule } from "./public/public.module";
import { SecureModule } from "./secure/secure.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AlertComponent,
    NotFoundComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    SecureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
