import { Component } from '@angular/core';
import { FormLayoutComponent } from '../../components/form-layout/form-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-professor',
  standalone: true,
  imports: [FormLayoutComponent],
  templateUrl: './login-professor.component.html',
  styleUrl: './login-professor.component.css'
})
export class LoginProfessorComponent {
  constructor(private router: Router) { }

  goCadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  goAluno() {
    this.router.navigateByUrl('/login-aluno');
  }

  goSecretario() {
    this.router.navigateByUrl('/login-secretario');
  }
}
