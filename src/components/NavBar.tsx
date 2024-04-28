'use client';

import LogoWithText from '@/assets/images/logo-with-text';
import { useEffect, useState } from 'react';
import { isLargeDevice } from '@/utils/ui-utils';
import LargeScreenNavBar from '@/components/LargeScreenNavBar';
import SmallScreenNavBar from '@/components/SmallScreenNavBar';

export default function NavBar() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    function resizeEvent() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  return (
    <nav className={'fixed left-0 top-0 z-10 w-screen bg-foreground px-8 py-6'}>
      <div
        className={'section flex w-full flex-row items-center justify-between'}
      >
        <LogoWithText />
        {isLargeDevice(screenWidth) ? (
          <LargeScreenNavBar />
        ) : (
          <SmallScreenNavBar />
        )}
      </div>
    </nav>
  );
}
