import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.styl']
})
export class BreadcrumbsComponent implements OnInit {
    public bradcrumbs = 'Courses';

    constructor(
        private router: Router,
        private activatedRouter: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => this.bradcrumbs = this.createBreadcrumbs(this.activatedRouter.root));
    }

    private createBreadcrumbs(route: ActivatedRoute): string {
        console.log(route);
        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
          return;
        }
    }
}
