export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'employee' | 'manager'
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  user?: User
  token?: string
  message?: string
}