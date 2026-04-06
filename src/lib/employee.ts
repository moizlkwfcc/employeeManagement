import { LeaveBalance, LeaveHistoryEntry, Task } from '@/types/employee'

export function getLeaveBalances(): LeaveBalance[] {
  return [
    { type: 'Annual', total: 20, used: 8, available: 12 },
    { type: 'Sick', total: 10, used: 3, available: 7 },
    { type: 'Personal', total: 5, used: 2, available: 3 },
  ]
}

export function getTasks(): Task[] {
  return [
    {
      id: '1',
      title: 'Complete Q3 Performance Report',
      description: 'Prepare and submit the quarterly performance report to HR',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2024-09-30',
      assignedBy: 'Jane Smith',
    },
    {
      id: '2',
      title: 'Update Project Documentation',
      description: 'Review and update all project documentation for the new module',
      priority: 'medium',
      status: 'pending',
      dueDate: '2024-10-05',
      assignedBy: 'Michael Lee',
    },
    {
      id: '3',
      title: 'Onboarding Training Session',
      description: 'Attend mandatory onboarding training for new software tools',
      priority: 'high',
      status: 'completed',
      dueDate: '2024-09-15',
      assignedBy: 'HR Department',
    },
    {
      id: '4',
      title: 'Code Review – Auth Module',
      description: 'Review pull requests for the authentication module refactor',
      priority: 'medium',
      status: 'pending',
      dueDate: '2024-10-10',
      assignedBy: 'Michael Lee',
    },
    {
      id: '5',
      title: 'Team Meeting Notes',
      description: 'Compile and distribute notes from the weekly team stand-up',
      priority: 'low',
      status: 'completed',
      dueDate: '2024-09-20',
      assignedBy: 'Jane Smith',
    },
  ]
}

export function getLeaveHistory(): LeaveHistoryEntry[] {
  return [
    {
      id: '1',
      type: 'Annual',
      startDate: '2024-07-15',
      endDate: '2024-07-19',
      days: 5,
      status: 'approved',
      reason: 'Summer vacation',
    },
    {
      id: '2',
      type: 'Sick',
      startDate: '2024-06-03',
      endDate: '2024-06-04',
      days: 2,
      status: 'approved',
      reason: 'Flu and fever',
    },
    {
      id: '3',
      type: 'Personal',
      startDate: '2024-05-20',
      endDate: '2024-05-20',
      days: 1,
      status: 'approved',
      reason: 'Personal errand',
    },
    {
      id: '4',
      type: 'Annual',
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      days: 5,
      status: 'rejected',
      reason: 'Family trip',
    },
    {
      id: '5',
      type: 'Sick',
      startDate: '2024-09-25',
      endDate: '2024-09-25',
      days: 1,
      status: 'pending',
      reason: 'Medical appointment',
    },
  ]
}
