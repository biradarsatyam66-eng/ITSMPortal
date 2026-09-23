import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import { LayoutComponent } from './component/layout/layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoaderComponent } from './component/loader/loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    LoaderComponent
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatProgressSpinnerModule
],

  exports: [
    NavbarComponent,
    SidebarComponent,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }