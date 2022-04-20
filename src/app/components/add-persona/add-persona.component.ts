import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  persona: Persona = {
    nombre: '',
    apellido: '',
    email: false
  };
  submitted = false;

  constructor(private tutorialService: PersonaService) { }

  ngOnInit(): void {
  }

  savePersona(): void {
    const data = {
      nombre: this.persona.nombre,
      apellido: this.persona.apellido
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevaPersona(): void {
    this.submitted = false;
    this.persona = {
      nombre: '',
      apellido: '',
      email: false
    };
  }

}
