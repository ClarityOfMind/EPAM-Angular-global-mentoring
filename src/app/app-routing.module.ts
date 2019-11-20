import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginPageComponent } from './components/login-page/login-page/login-page.component';


const routes: Routes = [
    { path: 'courses-page', component: CoursesPageComponent },
    { path: '',
        redirectTo: '/courses-page',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
