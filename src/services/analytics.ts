import { logEvent, setUserProperties } from "firebase/analytics";
import { analytics } from "../config/firebase";

// Analytics Event Types
export enum AnalyticsEvent {
  PAGE_VIEW = 'page_view',
  SESSION_START = 'session_start',
  USER_ENGAGEMENT = 'user_engagement',
  SCROLL_DEPTH = 'scroll_depth',
  BUTTON_CLICK = 'button_click',
  SECTION_VIEW = 'section_view',
  CONTACT_CLICK = 'contact_click',
  PROJECT_VIEW = 'project_view',
  SKILL_INTERACTION = 'skill_interaction',
  THEME_TOGGLE = 'theme_toggle'
}

// Page View Tracking
export const trackPageView = (pageName: string, pageTitle: string) => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.PAGE_VIEW, {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_name: pageName,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Session Tracking
export const trackSessionStart = () => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.SESSION_START, {
      timestamp: new Date().toISOString(),
      session_id: generateSessionId()
    });
  } catch (error) {
    console.error('Error tracking session start:', error);
  }
};

// User Engagement Tracking
export const trackEngagement = (engagementType: string, value?: number) => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.USER_ENGAGEMENT, {
      engagement_type: engagementType,
      engagement_value: value,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking engagement:', error);
  }
};

// Scroll Depth Tracking
export const trackScrollDepth = (depth: number) => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.SCROLL_DEPTH, {
      scroll_depth: depth,
      page_path: window.location.pathname,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking scroll depth:', error);
  }
};

// Section View Tracking
export const trackSectionView = (sectionName: string) => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.SECTION_VIEW, {
      section_name: sectionName,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking section view:', error);
  }
};

// Button Click Tracking
export const trackButtonClick = (buttonName: string, location: string) => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.BUTTON_CLICK, {
      button_name: buttonName,
      button_location: location,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking button click:', error);
  }
};

// Contact Click Tracking
export const trackContactClick = (contactType: string, contactValue: string) => {
  if (!analytics) return;
  console.log(contactValue);
  
  try {
    logEvent(analytics, AnalyticsEvent.CONTACT_CLICK, {
      contact_type: contactType,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking contact click:', error);
  }
};

// Project View Tracking
export const trackProjectView = (projectName: string) => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.PROJECT_VIEW, {
      project_name: projectName,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking project view:', error);
  }
};

// Theme Toggle Tracking
export const trackThemeToggle = (theme: string) => {
  if (!analytics) return;
  
  try {
    logEvent(analytics, AnalyticsEvent.THEME_TOGGLE, {
      theme: theme,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking theme toggle:', error);
  }
};

// Set User Properties (Device info is automatically tracked by Firebase)
export const setUserDevice = (deviceInfo: { type: string; os: string; browser: string }) => {
  if (!analytics) return;
  
  try {
    setUserProperties(analytics, {
      device_type: deviceInfo.type,
      device_os: deviceInfo.os,
      device_browser: deviceInfo.browser
    });
  } catch (error) {
    console.error('Error setting user device properties:', error);
  }
};

// Helper function to generate session ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};
