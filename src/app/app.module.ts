import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DurationPipe } from './pipes/duration-pipe/duration.pipe';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';
import { LoginPageComponent } from './components/login-page/login-page/login-page.component';
import { CourseCreatorComponent } from './components/course-creator/course-creator.component';
import { DurationFieldComponent } from './components/duration-field/duration-field.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TokenInterceptor } from './interceptors/auth.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {appReducers} from './store/app.reducers';
import {DateFieldComponent} from './components/date-field/date-field.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { AuthorsFieldComponent } from './components/authors-field/authors-field.component';

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
        LoginPageComponent,
        CourseCreatorComponent,
        DurationFieldComponent,
        PageNotFoundComponent,
        LoadingComponent,
        DateFieldComponent,
        FormFieldComponent,
        AuthorsFieldComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [
        FilterPipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
    })
export class AppModule { }
