
import React, { useEffect, useState } from 'react';
import { NavigateTo, Screen } from '../types';
import { CenteredLayout } from '../components/Layout';
import { CheckCircleIcon } from '../components/Icons';

interface AnalysisInProgressScreenProps {
  navigateTo: NavigateTo;
}

const analysisSteps = [
  'Parsing document structure...',
  'Cross-referencing with BSP regulations...',
  'Checking for PDPA compliance gaps...',
  'Evaluating operational risks...',
  'Generating actionable recommendations...',
];

const AnalysisInProgressScreen: React.FC<AnalysisInProgressScreenProps> = ({ navigateTo }) => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const navigationTimer = setTimeout(() => {
      navigateTo(Screen.Report);
    }, 5000);

    const stepsInterval = setInterval(() => {
        setVisibleSteps(prev => {
            if (prev < analysisSteps.length) {
                return prev + 1;
            }
            clearInterval(stepsInterval);
            return prev;
        });
    }, 800);

    return () => {
      clearTimeout(navigationTimer);
      clearInterval(stepsInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigateTo]);

  return (
    <CenteredLayout>
      <div className="w-full max-w-lg text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-vesta-primary mx-auto"></div>
        <h2 className="text-2xl font-bold text-vesta-primary mt-8">
          Vesta is Analyzing Your Document...
        </h2>
        <div id="analysisSteps" className="mt-6 text-left inline-block">
          <ul className="space-y-3">
            {analysisSteps.map((step, index) => (
              <li key={index} 
                  className={`flex items-center transition-opacity duration-500 ${index < visibleSteps ? 'opacity-100' : 'opacity-0'}`}>
                <CheckCircleIcon className="w-5 h-5 text-vesta-accent-success mr-3" />
                <span className="text-vesta-text-light">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CenteredLayout>
  );
};

export default AnalysisInProgressScreen;
