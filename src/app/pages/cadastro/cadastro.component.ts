import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      senha: new FormControl('', [Validators.required])
    });
  }

  enviarForm() {
    console.log('Cadastro Realizado com sucesso');
    this.router.navigateByUrl('/login');
    // if (this.cadastroForm.value !== null) {
    //   console.log('Cadastro Realizado com sucesso');
    //   this.router.navigateByUrl('/login');
    // }
    // else {
    //   alert('Por favor preencha todos os campos obrigatórios');
    // }
  }
}
