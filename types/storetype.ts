export interface User {
  id: string;
  name: string;
  email?: string;
  photoUrl:string;
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

export interface Participant {
  userId: string;
  micOn?: boolean;
  videoOn?: boolean;
  streamURL?: string;
}

export interface MeetStore {
  sessionId: string | null;
  participants: Participant[];
  chatMessages: any[]; // Optional: define this better
  micOn: boolean;
  videoOn: boolean;

  setSessionId: (id: string) => void;
  clearSessionId: () => void;

  addParticipant: (participant: Participant) => void;
  removeParticipant: (participantId: string) => void;
  updateParticipantMedia: (participant: Pick<Participant, 'userId' | 'micOn' | 'videoOn'>) => void;
  updateParticipantStream: (userId: string, streamURL: string) => void;

  resetMeetingStore: () => void;
}
