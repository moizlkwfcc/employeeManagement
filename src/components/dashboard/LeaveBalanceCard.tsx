import { LeaveBalance } from '@/types/employee'

interface LeaveBalanceCardProps {
  balance: LeaveBalance
}

const colorMap: Record<string, { bg: string; text: string; bar: string }> = {
  Annual: { bg: 'bg-blue-50', text: 'text-blue-700', bar: 'bg-blue-500' },
  Sick: { bg: 'bg-green-50', text: 'text-green-700', bar: 'bg-green-500' },
  Personal: { bg: 'bg-purple-50', text: 'text-purple-700', bar: 'bg-purple-500' },
  Maternity: { bg: 'bg-pink-50', text: 'text-pink-700', bar: 'bg-pink-500' },
  Paternity: { bg: 'bg-indigo-50', text: 'text-indigo-700', bar: 'bg-indigo-500' },
  Unpaid: { bg: 'bg-gray-50', text: 'text-gray-700', bar: 'bg-gray-500' },
}

export function LeaveBalanceCard({ balance }: LeaveBalanceCardProps) {
  const colors = colorMap[balance.type] ?? colorMap['Unpaid']
  const usedPercent = balance.total > 0 ? Math.round((balance.used / balance.total) * 100) : 0

  return (
    <div className={`rounded-xl p-5 ${colors.bg} flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        <span className={`text-sm font-semibold ${colors.text}`}>{balance.type} Leave</span>
        <span className={`text-2xl font-bold ${colors.text}`}>{balance.available}</span>
      </div>
      <div className="text-xs text-gray-500">
        {balance.used} used of {balance.total} days
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${colors.bar}`}
          style={{ width: `${usedPercent}%` }}
        />
      </div>
      <div className="text-xs text-gray-400">{usedPercent}% used</div>
    </div>
  )
}
