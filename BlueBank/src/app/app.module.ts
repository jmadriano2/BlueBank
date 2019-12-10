import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
// import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { SidenavResponsiveExample } from './components/layouts/sidebar/sidebar.component';
import { WorkspaceComponent } from './components/layouts/workspace/workspace.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

import {MatSidenavModule} from '@angular/material/sidenav';

import {CustomMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavResponsiveExample,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    CustomMaterialModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
