import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuardGuard } from './core/auth-service/auth-guard.guard';


const routes: Routes = [
  {
    path: 'login',component:LoginComponent
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'users',canActivate:[AuthGuardGuard],
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
