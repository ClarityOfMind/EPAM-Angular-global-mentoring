import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginPageComponent } from './components/login-page/login-page/login-page.component';
import { CourseCreatorComponent } from './components/course-creator/course-creator.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './/guards/auth.guard';


const routes: Routes = [
    {
        path: 'courses-page',
        component: CoursesPageComponent,
        canActivate: [AuthGuard],
    },
    {   path: '',
        redirectTo: 'courses-page',
        pathMatch: 'full',
    },
    {
        path: 'courses-page/:id',
        component: CourseCreatorComponent,
        canActivate: [AuthGuard],
        data: {}
    },
    {
        path: 'courses-page/new',
        component: CourseCreatorComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
