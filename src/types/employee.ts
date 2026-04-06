export type TaskPriority = 'low' | 'medium' | 'high'

export type TaskStatus = 'pending' | 'in-progress' | 'completed'

export interface Task {
  id: string
  title: string
  description: string
  priority: TaskPriority
  status: TaskStatus
  dueDate: string
  assignedBy: string
}

export type LeaveType = 'Annual' | 'Sick' | 'Personal' | 'Maternity' | 'Paternity' | 'Unpaid'

export type LeaveStatus = 'approved' | 'pending' | 'rejected'

export interface LeaveBalance {
  type: LeaveType | string
  total: number
  used: number
  available: number
}

export interface LeaveHistoryEntry {
  id: string
  type: LeaveType
  startDate: string
  endDate: string
  days: number
  status: LeaveStatus
  reason: string
}
