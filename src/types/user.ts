
export interface User {
  id: string;
  username: string;
  email: string;
  isSubscribed: boolean;
  isAdmin: boolean;  // Changed from optional to required
  avatarUrl?: string;
  createdAt: string;
}
