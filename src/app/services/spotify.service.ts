import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';

import { SpotifyConfiguration } from './../../environments/environment';
import { User } from '../interfaces/user';
import {
  SpotifyPlaylistToPlaylist,
  SpotifyUserToUserInterface,
} from '../common/spotify-helper';
import { Playlist } from '../interfaces/playlist';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: User;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async initUser() {
    if (!!this.user) {
      return true;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      this.setAccessToken(token);
      await this.getUser();
      return !!this.user;
    } catch (e) {
      return false;
    }
  }

  async getUser() {
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyUserToUserInterface(userInfo);
  }

  getLoginUrl(): string {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getTokenCallbackUrl() {
    if (!window.location.hash) return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  setAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async getUserPlaylist(offset = 0, limit = 50): Promise<Playlist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user?.id, {
      offset,
      limit,
    });

    return playlists.items.map(SpotifyPlaylistToPlaylist);
  }
}
