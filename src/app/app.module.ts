import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { cdtLoginComponent } from './cdtLogin/cdtLogin.component';
import { insLoginComponent } from './insLogin/insLogin.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'candidateLogin', component: cdtLoginComponent },
  { path: 'instituteLogin', component: insLoginComponent },
   { path: 'list', component: ListComponent },
  { path: 'details',component: DetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent,cdtLoginComponent,insLoginComponent,HomeComponent,ListComponent,DetailsComponent
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
