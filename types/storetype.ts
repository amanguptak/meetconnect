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

export type SessionInfoPayload = {
  participants: Participant[];
};


export interface Participant {
  id: string;
  name: string;
  userId: string;
  photoUrl?: string;
  micOn?: boolean;
  videoOn?: boolean;

}

export interface MeetStore {
  sessionId: string | null;
  participants: Participant[];
  chatMessages: any[];
  micOn: boolean;
  videoOn: boolean;

  // setters
  setSessionId: (id: string | null) => void;
  clearSessionId: () => void;

  // participant management
  addParticipant: (participant: Participant) => void;
  removeParticipant: (participantId: string) => void;
  updateParticipantMedia: (
    updated: Pick<Participant, 'userId' | 'micOn' | 'videoOn'>
  ) => void;
  updateParticipantStream: (userId: string, streamURL: string) => void;

  // 🔄 toggle microphone / camera
  toggleState: (type: 'mic' | 'video') => void;

  // reset entire meeting state
  resetMeetingStore: () => void;
}
