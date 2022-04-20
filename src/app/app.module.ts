import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';
import { PersonaDetailsComponent } from './components/persona-details/persona-details.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonaComponent,
    PersonaDetailsComponent,
    PersonasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
