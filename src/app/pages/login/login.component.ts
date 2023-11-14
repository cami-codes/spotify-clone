import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.checkTokenUrlCallback();
  }

  public checkTokenUrlCallback() {
    const token = this.spotifyService.getTokenCallbackUrl();
    if (!!token) {
      this.spotifyService.setAccessToken(token);
      this.router.navigate(['/player']);
    }
  }

  public login() {
    window.location.href = this.spotifyService.getLoginUrl();
  }
}
