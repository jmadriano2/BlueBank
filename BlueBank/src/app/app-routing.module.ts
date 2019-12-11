import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/layouts/about/about.component';
import { SidenavResponsiveExample } from './components/layouts/sidebar/sidebar.component';
import { LoginComponent } from './components/layouts/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEmployeeProfileComponent } from './components/create-employee-profile/create-employee-profile.component';

const routes: Routes = [
  {path: 'main', component: SidenavResponsiveExample, 
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'create_eprofile', component: CreateEmployeeProfileComponent},
      {path: 'about', component: AboutComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

