
import React, { useState } from 'react';
import { Screen, NavigateTo, AnalysisReport } from './types';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import UploadScreen from './screens/UploadScreen';
import AnalysisInProgressScreen from './screens/AnalysisInProgressScreen';
import ReportScreen from './screens/ReportScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import KnowledgeBaseScreen from './screens/KnowledgeBaseScreen';

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.Login);
  const [planContent, setPlanContent] = useState<string>('');
  const [analysisReport, setAnalysisReport] = useState<AnalysisReport | null>(null);

  const navigateTo: NavigateTo = (newScreen: Screen) => {
    setScreen(newScreen);
  };

  const handleStartAnalysis = (content: string) => {
    setPlanContent(content);
    navigateTo(Screen.AnalysisInProgress);
  };

  const handleAnalysisComplete = (report: AnalysisReport) => {
    setAnalysisReport(report);
    navigateTo(Screen.Report);
  };

  const renderScreen = () => {
    switch (screen) {
      case Screen.Login:
        return <LoginScreen navigateTo={navigateTo} />;
      case Screen.Dashboard:
        return <DashboardScreen navigateTo={navigateTo} />;
      case Screen.Upload:
        return <UploadScreen navigateTo={navigateTo} onStartAnalysis={handleStartAnalysis} />;
      case Screen.AnalysisInProgress:
        return <AnalysisInProgressScreen planContent={planContent} onAnalysisComplete={handleAnalysisComplete} />;
      case Screen.Report:
        return <ReportScreen navigateTo={navigateTo} report={analysisReport} />;
      case Screen.AuditTrail:
        return <PlaceholderScreen navigateTo={navigateTo} activeScreen={Screen.AuditTrail} title="Audit Trail" />;
      case Screen.KnowledgeBase:
        return <KnowledgeBaseScreen navigateTo={navigateTo} />;
      case Screen.Settings:
        return <PlaceholderScreen navigateTo={navigateTo} activeScreen={Screen.Settings} title="Settings" />;
      default:
        return <LoginScreen navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="font-sans bg-vesta-background min-h-screen text-vesta-text">
      {renderScreen()}
    </div>
  );
}
