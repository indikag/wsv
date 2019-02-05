import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { HomeComponent } from '../home/home.component'
import { EditServicesComponent } from '../edit-services/edit-services.component';
import { ServiceLogComponent } from '../service-log/service-log.component';
import { ServiceDefineComponent } from '../service-define/service-define.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full', data: { allowed: false } },
	{ path: 'login', component: UserLoginComponent, data: { allowed: false } },
	{ path: 'home', component: HomeComponent, data: { allowed: false } },
	{ path: 'edit', component: EditServicesComponent, data: { allowed: false } },
	{ path: 'logs', component: ServiceLogComponent, data: { allowed: false } },
	{ path: 'service', component: ServiceDefineComponent, data: { allowed: false } },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	/**
	 * Get the routing list
	 */
	public static getRoutingPaths(): Route[] {
		return routes;
	}
}
