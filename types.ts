
export enum Screen {
  Login,
  Dashboard,
  AuditTrail,
  KnowledgeBase,
  Settings,
  Upload,
  AnalysisInProgress,
  Report,
}

export type NavigateTo = (screen: Screen) => void;
