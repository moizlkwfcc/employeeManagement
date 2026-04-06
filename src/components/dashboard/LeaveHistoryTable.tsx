import { LeaveHistoryEntry, LeaveStatus } from '@/types/employee'

interface LeaveHistoryTableProps {
  history: LeaveHistoryEntry[]
}

const statusStyles: Record<LeaveStatus, string> = {
  approved: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  rejected: 'bg-red-100 text-red-700',
}

export function LeaveHistoryTable({ history }: LeaveHistoryTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-800">Leave History</h2>
      </div>
      {history.length === 0 ? (
        <div className="px-6 py-8 text-center text-gray-400 text-sm">No leave history found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 text-left font-medium">Type</th>
                <th className="px-6 py-3 text-left font-medium">From</th>
                <th className="px-6 py-3 text-left font-medium">To</th>
                <th className="px-6 py-3 text-left font-medium">Days</th>
                <th className="px-6 py-3 text-left font-medium">Reason</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {history.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium text-gray-700">{entry.type}</td>
                  <td className="px-6 py-3 text-gray-600">{entry.startDate}</td>
                  <td className="px-6 py-3 text-gray-600">{entry.endDate}</td>
                  <td className="px-6 py-3 text-gray-600">{entry.days}</td>
                  <td className="px-6 py-3 text-gray-500 max-w-xs truncate">{entry.reason}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusStyles[entry.status]}`}>
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
