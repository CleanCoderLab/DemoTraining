import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
	{ path: '', component: AppComponent },
	{ path: 'courses', component: AppComponent },
	{ path: 'courses/:id', component: AppComponent },
	{ path: 'jobs', component: AppComponent },
	{ path: 'jobs/:id', component: AppComponent },
	{ path: 'resources', component: AppComponent },
	{ path: 'about', component: AppComponent },
	{ path: 'contact', component: AppComponent },
	{ path: '**', redirectTo: '' }
];
