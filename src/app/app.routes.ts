import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginAlunoComponent } from './pages/login-aluno/login-aluno.component';
import { LoginProfessorComponent } from './pages/login-professor/login-professor.component';
import { LoginSecretarioComponent } from './pages/login-secretario/login-secretario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login-aluno',
    pathMatch: 'full'
  },
  {
    path: 'login-aluno',
    component: LoginAlunoComponent,
  },
  {
    path: 'login-professor',
    component: LoginProfessorComponent,
  },
  {
    path: 'login-secretario',
    component: LoginSecretarioComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'materias',
    component: HomeComponent
  }
];
