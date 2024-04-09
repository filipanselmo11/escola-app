import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormLayoutComponent } from '../../components/form-layout/form-layout.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, FormLayoutComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm!: FormGroup;

  constructor(private router: Router) {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      idade: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required])
    });
  }

  enviarForm() {
    console.log('Cadastro Realizado com sucesso', this.cadastroForm.value);
    this.router.navigateByUrl('/login');
  }
}
