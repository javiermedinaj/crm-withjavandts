import { CalendarClock, CheckCircle } from "lucide-react";

const tasks = [
  {
    title: "Follow up with Enterprise clients",
    dueDate: "Today at 3:00 PM",
    priority: "High",
    priorityColor: "red",
    completed: false,
  },
  {
    title: "Prepare quarterly sales report",
    dueDate: "Tomorrow at 10:00 AM",
    priority: "Medium",
    priorityColor: "yellow",
    completed: false,
  },
  {
    title: "Update CRM database with new leads",
    dueDate: "Wed, 12:00 PM",
    priority: "Low",
    priorityColor: "green",
    completed: false,
  },
];

export function Tasks() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Create task
        </button>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
            <div className="pt-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{task.title}</p>
              <div className="flex items-center mt-1">
                <CalendarClock className="w-3.5 h-3.5 text-gray-400 mr-1.5" />
                <p className="text-xs text-gray-500">{task.dueDate}</p>
              </div>
            </div>
            <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full bg-${task.priorityColor}-100 text-${task.priorityColor}-800`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full py-2 flex items-center justify-center text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>View all tasks</span>
        </button>
      </div>
    </div>
  );
}