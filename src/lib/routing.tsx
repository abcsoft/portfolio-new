import React, { createContext, useContext, useEffect, useState, useCallback, useTransition } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  isPending: boolean;
}

const RouterContext = createContext<RouterContextType>({
  path: window.location.pathname || '/',
  navigate: () => {},
  isPending: false,
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isPending, startTransition] = useTransition();

  const handleLocationChange = useCallback(() => {
    const current = window.location.pathname || '/';
    startTransition(() => {
      setPath(current);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [handleLocationChange]);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (options?.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    startTransition(() => {
      setPath(to);
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate, isPending }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({
  href,
  children,
  className,
  style,
  onClick,
  target,
  rel,
  title,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  title?: string;
  ariaLabel?: string;
}) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If external link, anchor hash on same page, or modifier key held, default browser behavior
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      target === '_blank' ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey ||
      e.defaultPrevented
    ) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={handleClick}
      target={target}
      rel={rel}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
