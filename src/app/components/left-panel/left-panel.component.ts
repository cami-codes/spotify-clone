import { Component, OnInit } from '@angular/core';
import { IconDefinition, faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Playlist } from 'src/app/interfaces/playlist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit{

  public activeMenu: string = 'Home';

  public homeIcon: IconDefinition = faHome;
  public searchIcon: IconDefinition = faSearch;
  public artistsIcon: IconDefinition = faGuitar;
  public playlistIcon: IconDefinition = faMusic;

  public playlists: Playlist[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  public clickButton(button: string): void {
    this.activeMenu = button;
  }

  public async getPlaylists() {
    this.playlists = await this.spotifyService.getUserPlaylist();
  }

}
