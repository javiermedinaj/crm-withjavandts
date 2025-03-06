import { Users, TrendingUp, DollarSign, BarChart } from "lucide-react";

const stats = [
  {
    label: "Total Customers",
    value: "1,482",
    change: "+12.5%",
    icon: Users,
    color: "blue",
    isPositive: true,
  },
  {
    label: "Active Deals",
    value: "65",
    change: "-5.2%",
    icon: TrendingUp,
    color: "green",
    isPositive: false,
  },
  {
    label: "Monthly Revenue",
    value: "$12,000",
    change: "+2.5%",
    icon: DollarSign,
    color: "purple",
    isPositive: true,
  },
  {
    label: "Conversion Rate",
    value: "12.5%",
    change: "+1.5%",
    icon: BarChart,
    color: "orange",
    isPositive: true,
  },
];

export function DashBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div 
              className={`p-3 rounded-full bg-${stat.color}-100`}
            >
              <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mt-4">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          <div className="mt-2 flex items-center">
            <span 
              className={`text-${stat.isPositive ? 'green' : 'red'}-500 text-sm font-medium`}
            >
              {stat.change}
            </span>
            <span className="text-gray-400 text-sm ml-2">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}