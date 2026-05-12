import { useEffect, useRef, useCallback } from 'react';
import {
  trackPageView,
  trackSessionStart,
  trackEngagement,
  trackScrollDepth,
  trackSectionView,
  trackButtonClick,
  trackContactClick,
  trackProjectView,
  trackThemeToggle
} from '../services/analytics';

// Hook for tracking page views
export const usePageView = (pageName: string, pageTitle: string) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current) {
      trackPageView(pageName, pageTitle);
      hasTracked.current = true;
    }
  }, [pageName, pageTitle]);
};

// Hook for tracking session start
export const useSessionTracking = () => {
  useEffect(() => {
    const sessionKey = 'analytics_session_tracked';
    const sessionTracked = sessionStorage.getItem(sessionKey);

    if (!sessionTracked) {
      trackSessionStart();
      sessionStorage.setItem(sessionKey, 'true');
    }
  }, []);
};

// Hook for tracking scroll depth
export const useScrollDepth = () => {
  useEffect(() => {
    const scrollMilestones = new Set<number>();
    const milestones = [25, 50, 75, 90, 100];

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercent = Math.round((scrolled / scrollHeight) * 100);

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !scrollMilestones.has(milestone)) {
          scrollMilestones.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook for tracking section visibility
export const useSectionTracking = (sectionName: string) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionName);
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 } // Track when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName]);

  return sectionRef;
};

// Hook for tracking time on page
export const useTimeOnPage = () => {
  useEffect(() => {
    const startTime = Date.now();

    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds
      trackEngagement('time_on_page', timeSpent);
    };

    // Track when user leaves the page
    window.addEventListener('beforeunload', trackTimeSpent);

    // Also track every 30 seconds
    const interval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEngagement('active_time', timeSpent);
    }, 30000);

    return () => {
      window.removeEventListener('beforeunload', trackTimeSpent);
      clearInterval(interval);
      trackTimeSpent();
    };
  }, []);
};

// Custom hook to return tracking functions
export const useTrackEvent = () => {
  const trackButton = useCallback((buttonName: string, location: string) => {
    trackButtonClick(buttonName, location);
  }, []);

  const trackContact = useCallback((contactType: string, contactValue: string) => {
    trackContactClick(contactType, contactValue);
  }, []);

  const trackProject = useCallback((projectName: string) => {
    trackProjectView(projectName);
  }, []);

  const trackTheme = useCallback((theme: string) => {
    trackThemeToggle(theme);
  }, []);

  const trackCustomEngagement = useCallback((engagementType: string, value?: number) => {
    trackEngagement(engagementType, value);
  }, []);

  return {
    trackButton,
    trackContact,
    trackProject,
    trackTheme,
    trackCustomEngagement
  };
};
