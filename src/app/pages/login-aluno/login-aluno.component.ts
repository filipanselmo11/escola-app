import { Component } from '@angular/core';
import { FormLayoutComponent } from '../../components/form-layout/form-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-aluno',
  standalone: true,
  imports: [FormLayoutComponent],
  templateUrl: './login-aluno.component.html',
  styleUrl: './login-aluno.component.css'
})
export class LoginAlunoComponent {
  constructor(private router: Router) {}

  goCadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  goProfessor() {
    this.router.navigateByUrl('/login-professor');
  }

  goSecretario() {
    this.router.navigateByUrl('/login-secretario');
  }
}
