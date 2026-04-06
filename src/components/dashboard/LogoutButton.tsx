'use client'

import { useRouter } from 'next/navigation'
import { AuthService } from '@/lib/auth'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await AuthService.getInstance().logout()
    router.push('/')
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
    >
      Sign out
    </button>
  )
}
