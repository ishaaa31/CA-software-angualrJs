import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { LoginModule } from "./login/login.module";
// import { LoginModule } from "./login/login.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AppModule, LoginModule]
})
export class AppComponent {
  title = 'angular-bootstrap-login';
}
