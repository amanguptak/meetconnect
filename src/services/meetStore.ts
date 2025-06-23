import { create } from 'zustand';
import { MeetStore, Participant } from '../../types/storetype'; // adjust path if needed

export const useMeetStore = create<MeetStore>()((set, get) => ({
  sessionId: null,
  participants: [],
  chatMessages: [],
  micOn: false,
  videoOn: false,

  // Set or clear the active session
  setSessionId: (id: string | null) => set({ sessionId: id }),
  clearSessionId: () => set({ sessionId: null }),

  // Manage participants
  addParticipant: (participant: Participant) => {
    const { participants } = get();
    const alreadyExists = participants.some(p => p.userId === participant.userId);
    if (!alreadyExists) {
      set({ participants: [...participants, participant] });
    }
  },

  removeParticipant: (participantId: string) => {
    const { participants } = get();
    set({
      participants: participants.filter(p => p.userId !== participantId),
    });
  },

  updateParticipantMedia: (updated: Pick<Participant, 'userId' | 'micOn' | 'videoOn'>) => {
    const { participants } = get();
    set({
      participants: participants.map(p =>
        p.userId === updated.userId
          ? { ...p, micOn: updated.micOn, videoOn: updated.videoOn }
          : p
      ),
    });
  },

  updateParticipantStream: (userId: string, streamURL: string) => {
    const { participants } = get();
    set({
      participants: participants.map(p =>
        p.userId === userId ? { ...p, streamURL } : p
      ),
    });
  },

  toggle : (type:string)=>{
      if(type=="mic"){
        set(state=>({micOn: !state.micOn}))
      }
      if(type=="video"){
        set((state)=>({videoOn:!state.videoOn}))
      }
  },

  // Optional: reset the entire store (e.g., on leave)
  resetMeetingStore: () =>
    set({
      sessionId: null,
      participants: [],
      chatMessages: [],
      micOn: false,
      videoOn: false,
    }),
}));
