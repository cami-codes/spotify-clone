import { User } from "../interfaces/user";

export function SpotifyUserToUserInterface(user: SpotifyApi.CurrentUsersProfileResponse): User {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url
  };
}
