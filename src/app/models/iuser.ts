export interface IUserRepo {
  id: number,
  name: string,
  url: string,
  created_at: string,
  updated_at: string
}

export interface IUser {
  id: number,
  login: string,
  name: string,
  bio: string,
  avatar_url: string,
  followers: number,
  public_repos: number,
  repos_url: string,
  created_at: string,
  updated_at: string
}

