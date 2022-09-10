import create from 'zustand'
import { LoggedInState, UserNameState } from './types'

export const useLoggedInStore = create<LoggedInState>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}))
export const useUsernameStore = create<UserNameState>((set) => ({
  username: '',
  setUsername: (name: string) => set({ username: name }),
}))
