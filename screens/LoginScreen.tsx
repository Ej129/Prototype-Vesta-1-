
import React from 'react';
import { NavigateTo, Screen } from '../types';
import { VestaLogo } from '../components/Icons';
import { CenteredLayout } from '../components/Layout';

interface LoginScreenProps {
  navigateTo: NavigateTo;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigateTo }) => {
  return (
    <CenteredLayout>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg text-center">
        <VestaLogo className="w-24 h-24 mx-auto" />
        <h1 className="text-4xl font-bold text-vesta-primary mt-4">Vesta</h1>
        <p className="text-vesta-text-light mt-2 mb-8">AI-Powered Digital Resilience</p>
        <div className="space-y-4">
            <input 
                type="email" 
                placeholder="Enter your corporate email"
                id="emailInput"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vesta-secondary"
            />
            <input 
                type="password"
                placeholder="Password"
                id="passwordInput"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vesta-secondary"
            />
        </div>
        <button
          onClick={() => navigateTo(Screen.Dashboard)}
          className="w-full mt-8 bg-vesta-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200"
        >
          Login Securely
        </button>
      </div>
    </CenteredLayout>
  );
};

export default LoginScreen;
