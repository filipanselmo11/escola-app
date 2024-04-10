import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: Router) {}

  goAluno() {
    this.route.navigateByUrl('/login-aluno');
  }
  goProfessor() {
    this.route.navigateByUrl('/login-professor');
  }
  goSecretario() {
    this.route.navigateByUrl('/login-secretario');
  }
}
