import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
	{ path: '', component: App },
	{ path: 'courses', component: App },
	{ path: 'courses/:id', component: App },
	{ path: 'jobs', component: App },
	{ path: 'jobs/:id', component: App },
	{ path: 'resources', component: App },
	{ path: 'about', component: App },
	{ path: 'contact', component: App },
	{ path: '**', redirectTo: '' }
];
