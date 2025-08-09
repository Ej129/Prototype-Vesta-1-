
import React, { useState } from 'react';
import { NavigateTo, Screen } from '../types';
import { SidebarMainLayout } from '../components/Layout';
import { Header } from '../components/Header';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface ReportScreenProps {
  navigateTo: NavigateTo;
}

interface StatCardProps {
  title: string;
  value: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color = 'text-vesta-primary' }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-sm text-vesta-text-light font-medium">{title}</p>
    <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
  </div>
);

const riskData = [
  { name: 'Critical Issues', value: 3, color: '#D0021B' },
  { name: 'Warnings', value: 8, color: '#F5A623' },
  { name: 'Compliance Gaps', value: 5, color: '#4A90E2' },
  { name: 'Operational Risks', value: 12, color: '#9DB2BF' },
];

const RiskDonutChart = () => (
    <div className="bg-white p-6 rounded-lg shadow-md h-96">
        <h3 className="font-bold text-lg text-vesta-primary mb-4">Risks by Category</h3>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={riskData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                >
                    {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
            </PieChart>
        </ResponsiveContainer>
    </div>
);

interface AccordionItemProps {
    title: string;
    severity: 'critical' | 'warning';
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, severity, isOpen, onClick, children }) => {
    const severityClasses = {
        critical: {
            bg: 'bg-vesta-accent-critical/10',
            border: 'border-vesta-accent-critical',
            text: 'text-vesta-accent-critical'
        },
        warning: {
            bg: 'bg-vesta-accent-warning/10',
            border: 'border-vesta-accent-warning',
            text: 'text-vesta-accent-warning'
        }
    };
    const classes = severityClasses[severity];

    return (
        <div className={`border-l-4 rounded-r-lg ${classes.border} ${classes.bg}`}>
            <button onClick={onClick} className="w-full flex justify-between items-center p-4 text-left">
                <span className="font-semibold text-vesta-primary">{title}</span>
                <div className='flex items-center'>
                    <span className={`text-sm font-bold uppercase mr-4 ${classes.text}`}>{severity}</span>
                    <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-200">
                    {children}
                </div>
            )}
        </div>
    );
};

const ReportScreen: React.FC<ReportScreenProps> = ({ navigateTo }) => {
    const [openAccordionId, setOpenAccordionId] = useState<string | null>('finding-1');
    
    const toggleAccordion = (id: string) => {
        setOpenAccordionId(openAccordionId === id ? null : id);
    };

    return (
        <SidebarMainLayout navigateTo={navigateTo} activeScreen={Screen.Dashboard}>
            <Header title="Analysis for: Q3 Mobile Banking App Relaunch" showExportButton />
            <div className="p-8 space-y-8">
                <div>
                    <h2 className="text-xl font-bold text-vesta-text mb-4">Executive Summary</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title="Resilience Score" value="78%" />
                        <StatCard title="Critical Issues" value="3" color="text-vesta-accent-critical" />
                        <StatCard title="Warnings" value="8" color="text-vesta-accent-warning" />
                        <StatCard title="Checks Performed" value="1,247" />
                    </div>
                </div>

                <RiskDonutChart/>

                <div>
                    <h2 className="text-xl font-bold text-vesta-text mb-4">Detailed Findings</h2>
                    <div className="space-y-4">
                        <AccordionItem title="Critical: Missing clause for customer data consent under PDPA." severity="critical" isOpen={openAccordionId === 'finding-1'} onClick={() => toggleAccordion('finding-1')}>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="font-semibold text-vesta-text-light mb-1">Source Text Snippet:</p>
                                    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 bg-gray-50 italic text-vesta-text">"...the app will collect user names and contact details during registration."</blockquote>
                                </div>
                                <div>
                                    <p className="font-semibold text-vesta-text-light mb-1">Vesta's Recommendation:</p>
                                    <p className="text-vesta-text-light leading-relaxed">"Add an explicit consent checkbox and a link to the privacy policy on the registration screen. The privacy policy must clearly state the purpose of data collection, in compliance with the Philippine Data Privacy Act of 2012 (RA 10173)."</p>
                                </div>
                                <div className="flex space-x-3 pt-2">
                                    <button className="px-4 py-2 text-sm font-semibold text-white bg-vesta-accent-success rounded-lg hover:bg-opacity-90">Mark as Resolved</button>
                                    <button className="px-4 py-2 text-sm font-semibold text-vesta-text-light bg-gray-200 rounded-lg hover:bg-gray-300">Dismiss</button>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Warning: Budget does not account for mandatory cybersecurity audit." severity="warning" isOpen={openAccordionId === 'finding-2'} onClick={() => toggleAccordion('finding-2')}>
                            <p className="text-vesta-text-light">Details for this warning would be displayed here.</p>
                        </AccordionItem>
                        <AccordionItem title="Warning: Project timeline does not allocate time for BSP reporting." severity="warning" isOpen={openAccordionId === 'finding-3'} onClick={() => toggleAccordion('finding-3')}>
                            <p className="text-vesta-text-light">Details for this warning would be displayed here.</p>
                        </AccordionItem>
                    </div>
                </div>
            </div>
        </SidebarMainLayout>
    );
};

export default ReportScreen;
