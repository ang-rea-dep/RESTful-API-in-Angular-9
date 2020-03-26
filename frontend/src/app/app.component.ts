import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Event, Router} from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular9project';

    constructor(private loadingbar: SlimLoadingBarService, private router: Router){
        this.router.events.subscribe((event: Event) => {
            this.navigationInterceptor(event);
        })
    }

    private navigationInterceptor(event: Event): void{
        if(event instanceof NavigationStart){
            this.loadingbar.start();
        }
        if(event instanceof NavigationCancel){
            this.loadingbar.stop();
        }
        if(event instanceof NavigationEnd){
            this.loadingbar.complete();
        }
        if(event instanceof NavigationError){
            this.loadingbar.stop();
        }
    }
}
