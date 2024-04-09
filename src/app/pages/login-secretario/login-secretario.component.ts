import { Component } from '@angular/core';
import { FormLayoutComponent } from '../../components/form-layout/form-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-secretario',
  standalone: true,
  imports: [FormLayoutComponent],
  templateUrl: './login-secretario.component.html',
  styleUrl: './login-secretario.component.css'
})
export class LoginSecretarioComponent {

  constructor(private router: Router) {}

  goCadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  goProfessor() {
    this.router.navigateByUrl('/login-professor');
  }

  goAluno() {
    this.router.navigateByUrl('/login-aluno');
  }

}
