import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth0.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
})
export class CallbackComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.handleAuthCallback();
  }
}
