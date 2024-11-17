export default function TaskCard({ task, onEdit, onDelete }) {
    const priorityColors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    };
  
    const statusColors = {
      'todo': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    };
  
    return (
      <div className="card">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{task.title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(task)}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[task.status]}`}>
              {task.status}
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
      </div>
    );
  }