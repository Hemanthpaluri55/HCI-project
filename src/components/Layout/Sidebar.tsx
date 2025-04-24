import React from 'react';
import { 
  Activity, Brain, Calendar, Settings, 
  User as UserIcon, Video, LogOut, Home 
} from 'lucide-react';
import { User } from '../../types/user';

interface SidebarProps {
  user: User | null;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const [activeItem, setActiveItem] = React.useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'ai-coach', label: 'AI Coach', icon: <Activity size={20} /> },
    { id: 'progress', label: 'Progress Tracker', icon: <Calendar size={20} /> },
    { id: 'mindfulness', label: 'Mindfulness', icon: <Brain size={20} /> },
    { id: 'live', label: 'Live Sessions', icon: <Video size={20} /> },
    { id: 'profile', label: 'Profile', icon: <UserIcon size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-full md:w-64 bg-white shadow-md md:min-h-screen">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-center md:justify-start">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
            <Activity size={24} />
          </div>
          <h1 className="ml-3 text-xl font-semibold text-gray-800">FitMind AI</h1>
        </div>
      </div>

      {user && (
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-700 font-medium">{user.name.charAt(0)}</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">Level {user.level}</p>
            </div>
          </div>
        </div>
      )}

      <nav className="p-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`w-full flex items-center p-3 rounded-lg my-1 transition-colors ${
              activeItem === item.id
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className={activeItem === item.id ? 'text-emerald-600' : 'text-gray-400'}>
              {item.icon}
            </span>
            <span className="ml-3 text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100">
        <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
          <LogOut size={20} className="text-gray-400" />
          <span className="ml-3 text-sm font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;