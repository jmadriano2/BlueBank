import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavResponsiveExample } from './components/layouts/sidebar/sidebar.component';
import { WorkspaceComponent } from './components/layouts/workspace/workspace.component';
import { CreateEmployeeProfileComponent } from './components/create-employee-profile/create-employee-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomMaterialModule} from './material-module';
import { LoginComponent } from './components/layouts/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatGridListModule} from '@angular/material/grid-list';
import { AboutComponent } from './components/layouts/about/about.component';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SidenavResponsiveExample,
    WorkspaceComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    CreateEmployeeProfileComponent
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
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
