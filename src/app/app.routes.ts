import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginAlunoComponent } from './pages/login-aluno/login-aluno.component';
import { LoginProfessorComponent } from './pages/login-professor/login-professor.component';
import { LoginSecretarioComponent } from './pages/login-secretario/login-secretario.component';
import { HomeComponent } from './pages/home/home.component';
import { PageSecretarioComponent } from './pages/page-secretario/page-secretario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: 'page-secretario',
    component: PageSecretarioComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
];
