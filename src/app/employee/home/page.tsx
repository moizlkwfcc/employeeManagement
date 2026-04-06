import { getLeaveBalances, getLeaveHistory, getTasks } from '@/lib/employee'
import { LeaveBalanceCard } from '@/components/dashboard/LeaveBalanceCard'
import { TasksCard } from '@/components/dashboard/TasksCard'
import { LeaveHistoryTable } from '@/components/dashboard/LeaveHistoryTable'
import { LogoutButton } from '@/components/dashboard/LogoutButton'

export default function EmployeeHomePage() {
  const leaveBalances = getLeaveBalances()
  const tasks = getTasks()
  const leaveHistory = getLeaveHistory()

  const employeeName = 'John Doe'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-base font-semibold text-gray-800">Employee Management System</span>
          </div>
          <LogoutButton />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-white">Welcome back, {employeeName} 👋</h1>
            <p className="text-blue-100 text-sm mt-1">Here&apos;s a summary of your workspace today.</p>
          </div>
          <div className="flex gap-4 text-center">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <p className="text-2xl font-bold text-white">{tasks.filter(t => t.status !== 'completed').length}</p>
              <p className="text-xs text-blue-100">Open Tasks</p>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <p className="text-2xl font-bold text-white">{leaveBalances.reduce((sum, b) => sum + b.available, 0)}</p>
              <p className="text-xs text-blue-100">Leave Days Left</p>
            </div>
          </div>
        </div>

        {/* Leave Balance */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Leave Balance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leaveBalances.map((balance) => (
              <LeaveBalanceCard key={balance.type} balance={balance} />
            ))}
          </div>
        </section>

        {/* Assigned Tasks */}
        <section>
          <TasksCard tasks={tasks} />
        </section>

        {/* Leave History */}
        <section>
          <LeaveHistoryTable history={leaveHistory} />
        </section>
      </main>
    </div>
  )
}
