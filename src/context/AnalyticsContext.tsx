import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { initializeFirebase } from '../config/firebase';
import { trackVisitor } from '../services/locationTracking';
import { useSessionTracking, useScrollDepth, useTimeOnPage } from '../hooks/useAnalytics';

interface AnalyticsContextType {
  initialized: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType>({ initialized: false });

export const useAnalyticsContext = () => useContext(AnalyticsContext);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        // Initialize Firebase
        await initializeFirebase();
        setInitialized(true);
        
        // Track visitor with location data
        await trackVisitor();
      } catch (error) {
        console.error('Failed to initialize analytics:', error);
      }
    };

    init();
  }, []);

  // Enable session tracking
  useSessionTracking();
  
  // Enable scroll depth tracking
  useScrollDepth();
  
  // Enable time on page tracking
  useTimeOnPage();

  return (
    <AnalyticsContext.Provider value={{ initialized }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
