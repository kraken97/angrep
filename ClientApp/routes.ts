import { RouterConfig } from '@angular/router';
import { App } from './components/app/app';


export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: App },
    { path: '**', redirectTo: 'home' }
];
