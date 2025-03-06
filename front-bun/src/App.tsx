import { DashBoard } from "./components/DashBoard";
import { Activity } from "./components/Activity";
import { Tasks } from "./components/Tasks";
import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
          <DashBoard />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Activity />
            <Tasks />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;