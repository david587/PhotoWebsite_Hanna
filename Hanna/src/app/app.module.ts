import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChunkPipe } from './pipes/chunk.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GaleryComponent } from './galery/galery.component';
import { PackComponent } from './pack/pack.component';
import { ConnectComponent } from './connect/connect.component';
import { PersonComponent } from './person/person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { EmitterService } from './shared/emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    ChunkPipe,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GaleryComponent,
    PackComponent,
    ConnectComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
