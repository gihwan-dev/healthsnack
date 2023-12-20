'use client';

import Hamburger from '@/assets/images/hamberger';
import { logoList } from '@/utils/ui-utils';
import Link from 'next/link';
import { useState } from 'react';

const SmallScreenNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickMenuButton = () => {
    setOpenMenu(true);
  };

  const onClickBackDrop = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <button onClick={onClickMenuButton} className={'cursor-pointer'}>
        <Hamburger />
      </button>
      {openMenu ? (
        <>
          <div
            onClick={onClickBackDrop}
            className={'fixed z-10 left-0 top-0 w-screen h-screen'}
          ></div>
          <ul
            className={
              'fixed right-0 top-0 w-10/12 max-w-xs h-screen pl-8 py-8 -bg--Black flex flex-col z-20 gap-6'
            }
          >
            {logoList.map(item => {
              return (
                <li key={`${item.text}-small-nav`}>
                  <Link href={item.link} className={'-text--white'}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default SmallScreenNavBar;
