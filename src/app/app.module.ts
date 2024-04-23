import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-panel', component: UserPanelComponent },
  { path: 'client-panel', component: ClientPanelComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];


@NgModule({
  declarations: [
    UserPanelComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }