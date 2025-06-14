import {mmkvStorage} from './storage';

import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import { UserStore } from '../../types/storetype';

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      sessions: [],
      setUser: data => set({user: data}),
      addSession: sessionId => {
        const {sessions} = get();
        const exists = sessions.includes(sessionId);
        if (!exists) {
          set({sessions: [sessionId, ...sessions]});
        }
      },
      removeSession: sessionId => {
        const {sessions} = get();
        const updatedSessions = sessions.filter(s => s !== sessionId);
        set({
          sessions: updatedSessions,
        });
      },
      clearSession: () => set({user: null, sessions: []}),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
