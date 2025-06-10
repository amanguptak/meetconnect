export interface User {
  id: string;
  name: string;
  email: string;
  // Add any other fields relevant to your user
}

// Define the type for your Zustand store
export interface UserStore {
  user: User | null;
  sessions: string[];
  setUser: (user: User | null) => void;
  addSession: (sessionId: string) => void;
  removeSession: (sessionId: string) => void;
  clearSession: () => void;
}