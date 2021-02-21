import { SigninComponent } from './Auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: 'Auth/signin', component : SigninComponent},
  {path: 'Auth/signup', component: SignupComponent},
  {path: 'home', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'setting', canActivate: [AuthGuardService], component: SettingComponent },
  {path: '',redirectTo: 'Auth/signin',pathMatch: 'full'},
  {path: '**',redirectTo: 'Auth/signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
