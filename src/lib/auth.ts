import { LoginCredentials, LoginResponse } from '@/types/auth'

export class AuthService {
  private static instance: AuthService

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock authentication logic
    if (credentials.email && credentials.password) {
      const token = 'mock-jwt-token'
      if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', token)
      }
      return {
        success: true,
        user: {
          id: '1',
          email: credentials.email,
          name: 'John Doe',
          role: 'employee'
        },
        token
      }
    }

    return {
      success: false,
      message: 'Invalid credentials'
    }
  }

  async logout(): Promise<void> {
    // Clear any stored tokens, cookies, etc.
    localStorage.removeItem('authToken')
  }

  isAuthenticated(): boolean {
    // Check if user is authenticated (e.g., has valid token)
    return !!localStorage.getItem('authToken')
  }
}