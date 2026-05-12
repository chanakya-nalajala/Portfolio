import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

// Location data interface from ipapi
interface LocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  country_name: string;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  org: string;
}

// Visitor data to store in Firestore
interface VisitorData {
  ip: string;
  city: string;
  state: string;
  country: string;
  countryName: string;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  organization: string;
  userAgent: string;
  screenResolution: string;
  language: string;
  referrer: string;
  visitedAt: any; // Firestore timestamp
  pageUrl: string;
  deviceType: string;
  browser: string;
  os: string;
}

// Custom event data
interface CustomEventData {
  eventName: string;
  eventData: Record<string, any>;
  ip?: string;
  city?: string;
  state?: string;
  country?: string;
  timestamp: any; // Firestore timestamp
}

// Fetch location data from ipapi.co (free API, no key required)
export const fetchLocationData = async (): Promise<LocationData | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    const data = await response.json();
    
    // Check for rate limit error
    if (data.error) {
      console.warn('ipapi.co rate limit or error:', data.reason);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
};

// Detect device type
const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

// Detect browser
const getBrowser = (): string => {
  const ua = navigator.userAgent;
  if (ua.indexOf('Chrome') > -1) return 'Chrome';
  if (ua.indexOf('Safari') > -1) return 'Safari';
  if (ua.indexOf('Firefox') > -1) return 'Firefox';
  if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident/') > -1) return 'IE';
  if (ua.indexOf('Edge') > -1) return 'Edge';
  return 'Unknown';
};

// Detect OS
const getOS = (): string => {
  const ua = navigator.userAgent;
  if (ua.indexOf('Win') > -1) return 'Windows';
  if (ua.indexOf('Mac') > -1) return 'MacOS';
  if (ua.indexOf('Linux') > -1) return 'Linux';
  if (ua.indexOf('Android') > -1) return 'Android';
  if (ua.indexOf('iOS') > -1) return 'iOS';
  return 'Unknown';
};

// Track visitor with location data and save to Firestore
export const trackVisitor = async (): Promise<void> => {
  if (!db) {
    console.warn('Firestore not initialized. Skipping visitor tracking.');
    return;
  }

  try {
    const locationData = await fetchLocationData();
    
    if (!locationData) {
      console.warn('Could not fetch location data. Visitor not tracked.');
      return;
    }

    const visitorData: VisitorData = {
      ip: locationData.ip,
      city: locationData.city || 'Unknown',
      state: locationData.region || 'Unknown',
      country: locationData.country || 'Unknown',
      countryName: locationData.country_name || 'Unknown',
      postal: locationData.postal || '',
      latitude: locationData.latitude,
      longitude: locationData.longitude,
      timezone: locationData.timezone || '',
      organization: locationData.org || '',
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      referrer: document.referrer || 'Direct',
      visitedAt: serverTimestamp(),
      pageUrl: window.location.href,
      deviceType: getDeviceType(),
      browser: getBrowser(),
      os: getOS()
    };

    // Add visitor data to Firestore
    await addDoc(collection(db, 'visitors'), visitorData);
    console.log('Visitor tracked successfully');
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};

// Track custom event with location data
export const trackCustomEvent = async (
  eventName: string,
  eventData: Record<string, any> = {}
): Promise<void> => {
  if (!db) {
    console.warn('Firestore not initialized. Skipping custom event tracking.');
    return;
  }

  try {
    // Try to get cached location data from sessionStorage
    let locationData: LocationData | null;
    const cachedLocation = sessionStorage.getItem('locationData');
    
    if (cachedLocation) {
      locationData = JSON.parse(cachedLocation);
    } else {
      locationData = await fetchLocationData();
      if (locationData) {
        sessionStorage.setItem('locationData', JSON.stringify(locationData));
      }
    }

    const customEvent: CustomEventData = {
      eventName,
      eventData,
      ip: locationData?.ip,
      city: locationData?.city,
      state: locationData?.region,
      country: locationData?.country,
      timestamp: serverTimestamp()
    };

    // Add custom event to Firestore
    await addDoc(collection(db, 'customEvents'), customEvent);
    console.log(`Custom event "${eventName}" tracked successfully`);
  } catch (error) {
    console.error('Error tracking custom event:', error);
  }
};
