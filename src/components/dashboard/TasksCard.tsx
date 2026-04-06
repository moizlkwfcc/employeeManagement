import { Task, TaskPriority, TaskStatus } from '@/types/employee'

interface TasksCardProps {
  tasks: Task[]
}

const priorityStyles: Record<TaskPriority, string> = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-green-100 text-green-700',
}

const statusStyles: Record<TaskStatus, string> = {
  'pending': 'bg-gray-100 text-gray-600',
  'in-progress': 'bg-blue-100 text-blue-700',
  'completed': 'bg-green-100 text-green-700',
}

const statusLabels: Record<TaskStatus, string> = {
  'pending': 'Pending',
  'in-progress': 'In Progress',
  'completed': 'Completed',
}

export function TasksCard({ tasks }: TasksCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-800">Assigned Tasks</h2>
        <span className="text-xs text-gray-400">{tasks.length} task{tasks.length !== 1 ? 's' : ''}</span>
      </div>
      {tasks.length === 0 ? (
        <div className="px-6 py-8 text-center text-gray-400 text-sm">No tasks assigned.</div>
      ) : (
        <ul className="divide-y divide-gray-50">
          {tasks.map((task) => (
            <li key={task.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{task.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{task.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Assigned by <span className="font-medium text-gray-600">{task.assignedBy}</span>
                  {' · '}Due <span className="font-medium text-gray-600">{task.dueDate}</span>
                </p>
              </div>
              <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${priorityStyles[task.priority]}`}>
                  {task.priority}
                </span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[task.status]}`}>
                  {statusLabels[task.status]}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
