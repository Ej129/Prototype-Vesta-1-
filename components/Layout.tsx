
import React from 'react';
import { NavigateTo, Screen } from '../types';
import { VestaLogo, DashboardIcon, HistoryIcon, LibraryIcon, SettingsIcon, UserProfileIcon } from './Icons';

interface NavItemProps {
  text: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ text, icon, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`flex items-center px-4 py-3 cursor-pointer rounded-lg transition-colors duration-200 ${
        active
          ? 'bg-vesta-secondary/20 text-white'
          : 'text-gray-300 hover:bg-vesta-secondary/10 hover:text-white'
      }`}
    >
      <div className="w-6 h-6 mr-4">{icon}</div>
      <span className="font-medium">{text}</span>
    </li>
  );
};

interface SidebarProps {
  navigateTo: NavigateTo;
  activeScreen: Screen;
}

const Sidebar: React.FC<SidebarProps> = ({ navigateTo, activeScreen }) => {
  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, screen: Screen.Dashboard },
    { text: 'Audit Trail', icon: <HistoryIcon />, screen: Screen.AuditTrail },
    { text: 'Knowledge Base', icon: <LibraryIcon />, screen: Screen.KnowledgeBase },
    { text: 'Settings', icon: <SettingsIcon />, screen: Screen.Settings },
  ];

  return (
    <aside className="w-64 bg-vesta-primary text-white flex flex-col min-h-screen">
      <div className="flex items-center justify-center p-6 border-b border-white/10">
        <VestaLogo className="w-10 h-10" />
        <h1 className="text-2xl font-bold ml-3">Vesta</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              text={item.text}
              icon={item.icon}
              active={activeScreen === item.screen}
              onClick={() => navigateTo(item.screen)}
            />
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-white/10">
          <div className="flex items-center p-2 rounded-lg hover:bg-vesta-secondary/10 cursor-pointer">
              <UserProfileIcon className="w-8 h-8 text-gray-300 border-2 border-gray-300 rounded-full p-1" />
              <div className="ml-3">
                  <p className="font-semibold text-white text-sm">John Doe</p>
                  <p className="text-gray-400 text-xs">Project Manager</p>
              </div>
          </div>
      </div>
    </aside>
  );
};

interface SidebarMainLayoutProps {
  children: React.ReactNode;
  navigateTo: NavigateTo;
  activeScreen: Screen;
}

export const SidebarMainLayout: React.FC<SidebarMainLayoutProps> = ({ children, navigateTo, activeScreen }) => {
  return (
    <div className="flex">
      <Sidebar navigateTo={navigateTo} activeScreen={activeScreen} />
      <main className="flex-1 h-screen overflow-y-auto">{children}</main>
    </div>
  );
};

interface CenteredLayoutProps {
    children: React.ReactNode;
}

export const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-vesta-background p-4">
        {children}
    </div>
  );
};
