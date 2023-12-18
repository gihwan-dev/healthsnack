'use client';

import LogoWithText from '@/assets/images/logo-with-text';
import { useEffect, useState } from 'react';
import { isLargeDevice } from '@/utils/ui-utils';
import LargeScreenNavBar from '@/components/LargeScreenNavBar';
import SmallScreenNavBar from '@/components/SmallScreenNavBar';

export default function NavBar() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
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
        'max-w-7xl ml-auto mr-auto flex flex-row justify-between py-4 px-4 bg-black'
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
