export interface IApplicationQuery {
  job?: string
}
export interface IApplicationBody {
  open: boolean
  status: 'accepted' | 'rejected'
}
export interface IPositionQuery {
  open?: string
}
