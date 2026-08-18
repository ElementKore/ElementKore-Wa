import { useEffect } from 'react';

/**
 * Custom hook to set document title dynamically.
 * Automatically appends " | ElementKore-Wa" suffix.
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ElementKore-Wa`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
