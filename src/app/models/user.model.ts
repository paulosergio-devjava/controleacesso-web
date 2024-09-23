import { Profile } from "./profile.model";

export interface User {
    id: number;
    username: string;
    email: string;
    profile: Profile;
    isAdmin: boolean;
  }