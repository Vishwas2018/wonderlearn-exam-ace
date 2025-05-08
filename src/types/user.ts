
export interface User {
  id: string;
  username: string;
  email: string;
  isSubscribed: boolean;
  isAdmin?: boolean;
  avatarUrl?: string;
  createdAt: string;
}
