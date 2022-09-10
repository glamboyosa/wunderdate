export interface LoggedInState {
  isLoggedIn: boolean
  setLoggedIn: (isLoggedIn: boolean) => void
}
export interface UserNameState {
  username: string
  setUsername: (name: string) => void
}
export type TInputRef = HTMLTextAreaElement
