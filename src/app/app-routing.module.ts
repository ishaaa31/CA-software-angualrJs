import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'user-panel', component: UserPanelComponent },
    { path: 'client-panel', component: ClientPanelComponent }
    
  ];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }

