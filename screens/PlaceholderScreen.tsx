
import React from 'react';
import { NavigateTo, Screen } from '../types';
import { SidebarMainLayout } from '../components/Layout';
import { Header } from '../components/Header';

interface PlaceholderScreenProps {
  navigateTo: NavigateTo;
  activeScreen: Screen;
  title: string;
}

const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({ navigateTo, activeScreen, title }) => {
  return (
    <SidebarMainLayout navigateTo={navigateTo} activeScreen={activeScreen}>
      <Header title={title} showUserProfile />
      <div className="p-8">
        <div className="bg-white p-20 rounded-lg shadow-md text-center border border-border-color">
          <h2 className="text-2xl font-bold text-vesta-primary">Coming Soon</h2>
          <p className="mt-4 text-vesta-text-light">
            The "{title}" feature is currently under development.
          </p>
        </div>
      </div>
    </SidebarMainLayout>
  );
};

export default PlaceholderScreen;
