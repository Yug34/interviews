import { create } from 'zustand'

interface AppState {
  user: string | null
  setUser: (user: string | null) => void
  room: string | null
  setRoom: (room: string | null) => void
  peers: string[]
  setPeers: (peers: string[]) => void
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  room: null,
  setRoom: (room) => set({ room }),
  peers: [],
  setPeers: (peers) => set({ peers }),
})) 