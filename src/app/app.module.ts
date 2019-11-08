import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import {Routes, RouterModule} from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { DurationPipe } from './pipes/duration-pipe/duration.pipe';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';

const routes: Routes = [
  { path: 'courses-page', component: CoursesPageComponent },
  { path: '',
    redirectTo: '/courses-page',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesPageComponent,
    BreadcrumbsComponent,
    CourseSearchComponent,
    CourseItemComponent,
    HighlightDirective,
    DurationPipe,
    FilterPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
