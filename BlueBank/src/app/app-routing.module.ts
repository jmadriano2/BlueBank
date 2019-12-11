import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/layouts/about/about.component';
import { SidenavResponsiveExample } from './components/layouts/sidebar/sidebar.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'main', component: SidenavResponsiveExample}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
