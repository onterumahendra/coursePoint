import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup',component: SignUpComponent },
  { path: 'list', component: ListComponent },
  { path: 'details',component: DetailsComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [AppComponent,LoginComponent,SignUpComponent,ListComponent,DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
