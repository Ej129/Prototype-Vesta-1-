
import React from 'react';
import { NavigateTo, Screen } from '../types';
import { SidebarMainLayout } from '../components/Layout';

interface UploadScreenProps {
  navigateTo: NavigateTo;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ navigateTo }) => {
  return (
    <SidebarMainLayout navigateTo={navigateTo} activeScreen={Screen.Dashboard}>
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-vesta-primary">Create a New Analysis</h1>
          <p className="text-vesta-text-light mt-2 mb-8">
            Upload your project plan (PDF, DOCX) or paste the text below.
          </p>
          
          <div id="planUploader" className="border-2 border-dashed border-gray-300 rounded-xl p-12 cursor-pointer bg-white hover:bg-gray-50 transition">
            <p className="text-vesta-text-light font-semibold">Drag & Drop Your File Here or Click to Browse</p>
          </div>
          
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-4 text-vesta-text-light font-semibold">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <textarea
            id="planPaster"
            placeholder="Paste your business plan text here..."
            className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vesta-secondary"
          ></textarea>

          <button
            onClick={() => navigateTo(Screen.AnalysisInProgress)}
            className="w-full md:w-auto mt-8 bg-vesta-primary text-white font-bold py-3 px-12 rounded-lg hover:bg-opacity-90 transition-all duration-200"
          >
            Analyze Plan
          </button>
        </div>
      </div>
    </SidebarMainLayout>
  );
};

export default UploadScreen;
