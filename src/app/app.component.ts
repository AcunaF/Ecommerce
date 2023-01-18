import { Component } from '@angular/core';
import { AuthService } from './service/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private auth: AuthService) {}
}
