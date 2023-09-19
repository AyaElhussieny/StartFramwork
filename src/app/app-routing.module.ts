import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent,title:"Home"},
  {path:"About",component:AboutComponent,title:"About"},
  {path:"Portfolio",component:PortfolioComponent,title:"Portfolio"},
  {path:"Contact",component:ContactComponent,title:"Contact"},





{path:"**",component:NotfoundComponent,title:"NotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

  }
 
