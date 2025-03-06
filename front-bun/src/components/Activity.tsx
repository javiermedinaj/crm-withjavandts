import { Users, Phone, Mail, Calendar } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "New customer added",
    description: "John Smith from Acme Inc.",
    time: "2h ago",
    color: "blue",
  },
  {
    icon: Phone,
    title: "Sales call completed",
    description: "30 min call with TechGlobal team",
    time: "4h ago",
    color: "green",
  },
  {
    icon: Mail,
    title: "Email campaign sent",
    description: "Quarterly newsletter to 1,257 subscribers",
    time: "Yesterday",
    color: "purple",
  },
];

export function Activity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all
        </button>
      </div>
      
      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`w-10 h-10 rounded-full bg-${activity.color}-100 flex items-center justify-center flex-shrink-0 mt-1`}>
              <activity.icon className={`w-5 h-5 text-${activity.color}-600`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500 truncate">{activity.description}</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-5 pt-4 border-t border-gray-100">
        <div className="flex items-center text-sm">
          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-gray-500">Calendar connected · 12 events this week</span>
        </div>
      </div>
    </div>
  );
}