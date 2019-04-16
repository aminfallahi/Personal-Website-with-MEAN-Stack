import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MsgsComponent } from './components/msgs/msgs.component';
import { RouterModule, Routes } from '@angular/router';
import { PwService } from './pw.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, 
         MatFormFieldModule, 
         MatInputModule, 
         MatOptionModule, 
         MatSelectModule, 
         MatIconModule, 
         MatButtonModule, 
         MatCardModule, 
         MatTableModule, 
         MatDividerModule, 
         MatSnackBarModule,
         MatSidenavModule } from '@angular/material';


         
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'msgs', component: MsgsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MsgsComponent
  ],
  exports: [MatSidenavModule]
  ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSidenavModule
    
  ],
  providers: [PwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
