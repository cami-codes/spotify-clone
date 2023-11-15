import { Playlist } from "../interfaces/playlist";
import { User } from "../interfaces/user";

export function SpotifyUserToUserInterface(user: SpotifyApi.CurrentUsersProfileResponse): User {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url
  };
}

export function SpotifyPlaylistToPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): Playlist {
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop().url
  };
}
