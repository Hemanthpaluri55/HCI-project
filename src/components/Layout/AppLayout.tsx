import React from 'react';
import Sidebar from './Sidebar';
import { User } from '../../types/user';

interface AppLayoutProps {
  children: React.ReactNode;
  user: User | null;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, user }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <Sidebar user={user} />
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;