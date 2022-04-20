import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { PersonaDetailsComponent } from './components/persona-details/persona-details.component';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';

const routes: Routes = [
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'personas', component: PersonasListComponent },
  { path: 'personas/:id', component: PersonaDetailsComponent },
  { path: 'add', component: AddPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
