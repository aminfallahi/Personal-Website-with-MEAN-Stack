import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileComponent } from './profile/profile.component';
import { TestAngularComponent } from './test-angular/test-angular.component';



const appRoutes: Routes = [
  {
    path: 'profiles',
    component: ProfileComponent,
    data: { title: 'Profiles' }
  },
  { path: '',
    redirectTo: '/profiles',
    pathMatch: 'full'
  },
  {
    path: 'profile-create',
    component: ProfileCreateComponent,
    data: { title: 'Create Profile' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileCreateComponent,
    TestAngularComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
