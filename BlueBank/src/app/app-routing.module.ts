import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/layouts/about/about.component';
import { SidenavResponsiveExample } from './components/layouts/sidebar/sidebar.component';
import { LoginComponent } from './components/layouts/login/login.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'main', component: SidenavResponsiveExample},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
