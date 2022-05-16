import analytics from '@analytics';
import { useEffect } from 'react';

/**
 * Tracks page views for the current user.
 */
export default function usePageViews(): void {
  // eslint-disable-next-line prefer-const
  let location = window.location.pathname;
  useEffect(() => {
    analytics.logEvent('page_view', {
      page_path: location,
    });
  }, [location]);
}
