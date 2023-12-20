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
    <nav
      className={
        'section flex flex-row justify-between py-6 -bg--Black items-center'
      }
    >
      <LogoWithText />
      {isLargeDevice(screenWidth) ? (
        <LargeScreenNavBar />
      ) : (
        <SmallScreenNavBar />
      )}
    </nav>
  );
}
