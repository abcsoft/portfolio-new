/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './lib/routing';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { ProjectDetail } from './pages/ProjectDetail';
import { Labs } from './pages/Labs';
import { Studio } from './pages/Studio';
import { Openings } from './pages/Openings';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function RouteView() {
  const { path } = useRouter();

  // Normalize path
  const cleanPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

  // Sync document title dynamically per route
  useEffect(() => {
    let title = 'Mainframe® — Creative Agency';
    if (cleanPath === '/work') title = 'Selected Work — Mainframe®';
    else if (cleanPath.startsWith('/work/')) {
      const slug = cleanPath.replace('/work/', '').toUpperCase();
      title = `${slug} Case Study — Mainframe®`;
    } else if (cleanPath === '/labs') title = 'Mainframe Labs — Experimental Sandbox';
    else if (cleanPath === '/studio') title = 'Studio Philosophy & Ethos — Mainframe®';
    else if (cleanPath === '/openings') title = 'Openings & Careers — Mainframe®';
    else if (cleanPath === '/shop') title = 'Studio Editions & Shop — Mainframe®';
    else if (cleanPath === '/contact') title = 'Initiate Commission — Mainframe®';

    document.title = title;
  }, [cleanPath]);

  if (cleanPath === '/' || cleanPath === '') {
    return <Home />;
  }

  if (cleanPath === '/work') {
    return <Work />;
  }

  if (cleanPath.startsWith('/work/')) {
    const slug = cleanPath.replace('/work/', '');
    return <ProjectDetail slug={slug} />;
  }

  if (cleanPath === '/labs') {
    return <Labs />;
  }

  if (cleanPath === '/studio') {
    return <Studio />;
  }

  if (cleanPath === '/openings') {
    return <Openings />;
  }

  if (cleanPath === '/shop') {
    return <Shop />;
  }

  if (cleanPath === '/contact') {
    return <Contact />;
  }

  return <NotFound />;
}

export default function App() {
  return (
    <RouterProvider>
      <div className="relative min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black">
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen transition-opacity duration-300 ease-out">
          <RouteView />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
